const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const templateFile = path.join(distDir, 'index.html');
const routes = [
  { path: 'campaign-background' },
  {
    path: 'bds-declaration',
    og: {
      title: '✋ BDS 선언문 - 내 삶터·일터에서 이스라엘산 원재료가 들어간 식품을 소비하지 않겠습니다.',
      description: '내 생활반경에서 이스라엘산 원재료가 들어간 식품을 소비하지 않겠다는 선언에 함께해 주세요.',
      url: 'https://inti-fada.github.io/bds-declaration/',
      image: 'https://inti-fada.github.io/og-bds.png',
    },
  },
];

const ogProperties = {
  title: 'og:title',
  description: 'og:description',
  url: 'og:url',
  image: 'og:image',
};

function escapeAttribute(value) {
  return value.replace(/[&"<>]/g, (character) => ({
    '&': '&amp;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
  })[character]);
}

function applyOgMetadata(html, metadata, htmlFile) {
  for (const [key, value] of Object.entries(metadata)) {
    const property = ogProperties[key];
    if (!property || typeof value !== 'string') {
      throw new Error(`Invalid Open Graph metadata "${key}" for ${htmlFile}`);
    }

    const tag = new RegExp(`(<meta\\s+property="${property}"\\s+content=")[^"]*("\\s*/?>)`);
    if (!tag.test(html)) {
      throw new Error(`Missing ${property} tag in ${htmlFile}`);
    }

    html = html.replace(tag, (_, before, after) => `${before}${escapeAttribute(value)}${after}`);
  }

  return html;
}

const template = fs.readFileSync(templateFile, 'utf8');
fs.copyFileSync(
  path.join(__dirname, '../og-bds.png'),
  path.join(distDir, 'og-bds.png')
);

for (const route of routes) {
  const outputFile = path.join(distDir, route.path, 'index.html');
  const html = route.og ? applyOgMetadata(template, route.og, outputFile) : template;

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, html);
}