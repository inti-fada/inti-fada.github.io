import Layout from '../components/Layout';
import { Image } from '../components/UI';

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="MainContent">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleTitle">
        <p className="flex-[1_0_0] font-['Pretendard:bold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#1f2937] text-[18px] tracking-[-0.2px]">❓ 왜 이스라엘산 과일이 문제인가요?</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleParagraph">
        <p className="flex-[1_0_0] font-['Pretendard:regular',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#1f2937] text-[16px] break-words whitespace-normal">{`﻿이스라엘산 과일은 단순한 농산물 이상의 맥락을 지니고 있습니다. 오늘날 우리가 알고 있는 이스라엘이라는 '국가'는 본래 팔레스타인 사람들이 살고 있던 땅을 강제로 탈취하며 세워졌습니다. 특히 1948년 5월 15일을 기점으로 이 시기 최소 75만 명 이상의 팔레스타인 사람들이 대대로 살아온 고향에서 추방 당했으며, 이들은 서안지구 및 가자지구, 그리고 주변 아랍 국가로의 피난길에 올라야 했습니다. 팔레스타인 사람들이 나크바(아랍어로 '대재앙'을 의미)의 날로 부르는 이날은, 이스라엘 독립기념일의 바로 다음 날입니다.`}</p>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="ArticleImage">
        <Image src="/article-images/articleImage1.webp" />
        <p className="font-['Pretendard:medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] text-center whitespace-nowrap">출처: 대학신문</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleParagraph">
        <div className="flex-[1_0_0] font-['Pretendard:regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#1f2937] text-[0px] text-[16px] whitespace-pre-wrap break-words">
          <p className="mb-[14px]">
            <span className="leading-[26px]">{`﻿수많은 이스라엘산 농산물들은 이처럼 불법적으로 탈취해 만들어진 '국가'의 땅에서 재배되고, 이스라엘의 특산물로 포장됩니다. 특히 그중 야파(자파) 오렌지는 이스라엘의 정착민 식민주의를 가장 잘 드러내는 예시입니다. 이 땅이 당연하게 팔레스타인 땅으로 여겨지던 19세기, 팔레스타인은 다양한 시트러스류 과일을 수출하기 시작했고 특히 팔레스타인산 오렌지는 유럽에서 큰 인기를 얻었습니다. 1939년에는 수출을 위해 야파항에서 하루 46대의 선박에 오렌지를 실었을 정도입니다. 본래 샤무티라는 이름으로 불리던 이 오렌지는 야파항을 통해 수출되며 야파 오렌지라는 이름을 얻었으나, 이스라엘의 정착민 식민주의자들이 야파 지역을 군사 점령한 이후 이스라엘 특산 품종으로 둔갑했습니다. 일제강점기 한국에서 군산항을 통해 호남평야의 쌀이 수탈됐던 것처럼, `}</span>
            <span className="font-['Pretendard:SemiBold',sans-serif] leading-[26px] not-italic">팔레스타인 사람들로부터 땅을 빼앗고 이들이 일구던 경작지에서 오렌지를 훔쳐 야파항을 통해 수탈</span>
            <span className="leading-[26px]">한 것입니다.</span>
          </p>
          <p className="leading-[26px]">{`﻿이것만으로도 충분히 문제적이지만, 더 심각한 문제가 있습니다. 이스라엘 정부는 현재 일반적으로 '이스라엘'로 여겨지는 땅 외에도, 국제법으로조차 팔레스타인 땅으로 인정되는 서안지구에 불법적으로 자국민들을 이주시켜 정착촌을 만들고 있습니다. 정착민들은 무력과 중장비를 동원해 팔레스타인 원주민들의 집과 마을을 부수고 불법정착촌을 건설합니다.`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="ArticleImage">
        <Image src="/article-images/articleImage2.webp" />
        <p className="font-['Pretendard:medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] text-center whitespace-nowrap">출처: Middle East Monitor</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleParagraph">
        <div className="flex-[1_0_0] font-['Pretendard:regular',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#1f2937] text-[16px] whitespace-pre-wrap break-words">
          <p className="mb-[14px]">{`﻿이렇게 만들어진 불법정착촌에서는 각종 농업과 제조업이 이루어지며, 이곳에서의 농작물 재배를 위해 이스라엘 정부는 팔레스타인 사람들이 사용할 물까지 빼앗아 사용합니다. 이들은 지하수를 독점해 인근 정착촌으로 보내기 위해 요르단 계곡의 지하수에 관정을 설치했고, 이 결과 현재 이 지역 인구의 20%를 차지하는 이스라엘 정착민이 80%의 수자원을 사용하고 있습니다. 정착민들은 이곳에서 과수 농장을 운영하며 식수와 농업용수를 마음껏 사용하지만, 관정 이용을 금지당한 팔레스타인 원주민들은 멀리서부터 물을 사 와야만 합니다. 심지어 관정을 보호한다는 명목으로 이스라엘군이 마을에 주둔하며 인근 지역을 보안지역으로 지정해 팔레스타인 사람들을 강제로 퇴거시키기까지 하고 있습니다.`}</p>
          <p>{`﻿한국에 들어오는 이스라엘산 농산물들은 정착민 식민'국가'로 만들어진 이스라엘, 또는 국제법상으로도 명백히 불법인 서안지구 내 정착촌에서 재배돼 수입되고 있습니다. 한국이 이스라엘과 맺은 FTA 협정문의 원산지 규정에 원산지로 인정되는 기준을 '팔레스타인 지역을 제외한 이스라엘'이라고만 명시했을 뿐, 정착촌에 대해서는 별도의 언급을 하지 않았기 때문입니다. 이는 서안지구와 골란고원의 유대인 정착촌에서 생산된 물품에는 '이스라엘 정착촌산'이라고 원산지를 표기해야 한다는 유럽연합의 가이드라인과 대조적입니다. 한국의 소비자들에겐 '이스라엘산' 상품이 정착촌에서 온 것인지 아닌지 구분할 방법이 없는 것입니다.`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="ArticleImage">
        <Image src="/article-images/articleImage3.webp" />
        <p className="font-['Pretendard:medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] text-center whitespace-nowrap">출처: 팔레스타인평화연대 트위터</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleParagraph">
        <div className="flex-[1_0_0] font-['Pretendard:regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#1f2937] text-[0px] text-[16px] break-words">
          <p className="mb-[14px]">
            <span className="leading-[26px]">{`이러한 농산물을 재배하는 이들은 일반적인 농업 종사자가 아닌 `}</span>
            <span className="font-['Pretendard:SemiBold',sans-serif] leading-[26px] not-italic">의도적으로 폭력을 자행하고 국제법을 위반하는 정착민 식민주의자들</span>
            <span className="leading-[26px]">{`이며, 이 농산물의 수출로 벌어들이는 이익은 이스라엘 경제의 큰 축을 이뤄 이들이 팔레스타인을 상대로 일으키고 있는 `}</span>
            <span className="font-['Pretendard:SemiBold',sans-serif] leading-[26px] not-italic">집단학살, 불법점령, 아파르트헤이트(인종분리정책)를 지속시키는 원료</span>
            <span className="leading-[26px]">로서 역할하고 있습니다.</span>
          </p>
          <p className="text-[#f43f5e] font-['Pretendard:SemiBold',sans-serif] leading-[26px] break-words">이 같은 상황에서 이스라엘산 과일을 불매하는 것은 이스라엘의 범죄에 반대하고 팔레스타인인들에게 연대할 수 있는 가장 쉬운 방법이며, 국제 시민으로서의 책무입니다.</p>
        </div>
      </div>
    </div>
  );
}

function References() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="References">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleSubtitle">
        <p className="flex-[1_0_0] font-['Pretendard:semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#1f2937] text-[18px]">📚 참고한 자료</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleParagraph">
        <ul className="block flex-[1_0_0] font-['Pretendard:regular',sans-serif] leading-[0] list-disc pl-5 gap-[12px] min-h-px min-w-px not-italic relative text-[#1f2937] whitespace-pre-wrap">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <a className="cursor-pointer decoration-solid font-['Pretendard:Regular',sans-serif] leading-[26px] not-italic text-[16px] underline" href="https://pal.or.kr/wp/boycott-israeli-citrus/" target="_blank" rel="noopener noreferrer">
              <span className="decoration-solid leading-[26px]">팔레스타인평화연대 - 이스라엘산 과일과 농축액 함유 제품</span>
            </a>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <a className="cursor-pointer decoration-solid font-['Pretendard:Regular',sans-serif] leading-[26px] not-italic text-[16px] underline" href="https://youtu.be/QUCeQt8zg5o" target="_blank" rel="noopener noreferrer">
              <span className="decoration-solid leading-[26px]">Al Jazeera World Documentary - Palestine 1920: The Other Side of the Palestinian Story</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleSubtitle">
        <p className="flex-[1_0_0] font-['Pretendard:semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#1f2937] text-[18px]">✍️ 관련 서명 운동</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleParagraph">
        <ul className="block flex-[1_0_0] font-['Pretendard:regular',sans-serif] leading-[0] list-disc pl-5 gap-[12px] min-h-px min-w-px not-italic relative text-[#1f2937] whitespace-pre-wrap">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <a className="cursor-pointer decoration-solid font-['Pretendard:Regular',sans-serif] leading-[26px] not-italic text-[16px] underline" href="https://forms.gle/BC4NEpzr9TFRKDfS6" target="_blank" rel="noopener noreferrer">
              <span className="decoration-solid leading-[26px]">매일유업 제품에서 이스라엘산 빼주세요!</span>
            </a>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <a className="cursor-pointer decoration-solid font-['Pretendard:Regular',sans-serif] leading-[26px] not-italic text-[16px] underline" href="https://amnesty.or.kr/onlineaction/132757/" target="_blank" rel="noopener noreferrer">
              <span className="decoration-solid leading-[26px]">HD현대: 이스라엘의 팔레스타인 불법 철거 공모를 멈춰라</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function RelatedMaterials() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="RelatedMaterials">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleSubtitle">
        <p className="flex-[1_0_0] font-['Pretendard:semibold',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#1f2937] text-[18px]">👀 함께 보기</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="ArticleParagraph">
        <ul className="block flex-[1_0_0] list-disc pl-5 gap-[12px] font-['Pretendard:regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#1f2937]">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] whitespace-pre-wrap">
            <a className="cursor-pointer decoration-solid font-['Pretendard:Regular',sans-serif] leading-[26px] not-italic text-[16px] underline" href="https://youtube.com/playlist?list=PLRxPKRxsOyGc52zTaOu1Z6dQdlJZ6RqMs" target="_blank" rel="noopener noreferrer">
              <span className="decoration-solid leading-[26px]">언허드: 마사페르 야타를 지켜라</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function ArticlePage() {
  return (
    <Layout>
      <div className="bg-[#f9fafb] flex-1 w-full">
        <div className="overflow-x-clip overflow-y-auto size-full">
          <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start py-[4px] relative shrink-0 w-full">
              <MainContent />
              <References />
              <Actions />
              <RelatedMaterials />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}