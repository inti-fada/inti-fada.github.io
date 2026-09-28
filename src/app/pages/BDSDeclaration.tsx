import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
export default function articlePage() {
  const [orgNames, setOrgNames] = useState<string[]>([]);
  const [isLoadingOrgs, setIsLoadingOrgs] = useState(true);
  const [orgsError, setOrgsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadOrgNames() {
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbwTLMluNkS39o12Eq5hLXj40F1EgVyYR9LFzVMn7jPKTVLt6GayC3dmn0Ho8LmvWOJz/exec',
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error('Failed to load org names');
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data) || !data.every((name) => typeof name === 'string')) {
          throw new Error('Invalid org names response');
        }

        setOrgNames(data);
      } catch {
        if (!controller.signal.aborted) {
          setOrgsError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingOrgs(false);
        }
      }
    }

    loadOrgNames();
    return () => controller.abort();
  }, []);

  return (
    <Layout>
      <main className="article-container">
        <div className="flex flex-col gap-[var(--spacing-content-gap)]">
          <h1 className="article-title">✋ BDS 선언문 - 내 삶터·일터에서 이스라엘산 원재료가 들어간 식품을 소비하지 않겠습니다.</h1>
          <div className="article-paragraph">
            <p>우리가 일상에서 아무렇지 않게 마시는 음료에도 이스라엘산 원재료가 들어갑니다. 매일유업의 피크닉처럼 떡볶이에 곁들이는 익숙한 음료에도 이스라엘산 자몽, 레몬, 복숭아, 딸기, 망고 등의 과즙이 함유되어 있습니다.</p>
            <p>우리가 매일 마시고 먹는 한 모금, 한입이 어디에서 왔는지 생각해봅시다. 이러한 음료에 함유된 과일은 이스라엘이 팔레스타인 원주민들을 강제로 몰아낸 땅 위에서, 군사점령 하에 수탈한 자원으로 자라납니다. 팔레스타인 서안지구와 동예루살렘에는 팔레스타인 사람을 강제 퇴거하고 이스라엘 자국민에게 인센티브를 주고 이주시켜 살도록 하는 불법 유대인 정착촌이 163개 이상 있습니다. 비공식적으로 지어진 아웃포스트를 포함하면 불법 유대인 정착촌은 500개를 훌쩍 넘깁니다.</p>
            <p>그렇기에 내가 회사에서 먹는 바이오 그릭요거트 바나나맛 한입, 우리 아이가 학교에서 마시는 피크닉 복숭아맛 한 모금이 이스라엘 경제에 이익을 환원하고, 점령지 팔레스타인에서 자행되는 집단학살과 군사점령, 아파르트헤이트(인종분리정책), 그리고 팔레스타인인들에 대한 구조적 억압을 지속시키는 기름 한방울이 될 수 있습니다.</p>
            <p>내가 할 수 있는 가장 일상적인 자리에서, 이스라엘의 집단학살과 아파르트헤이트와 점령에 공모하지 않겠다고 선언합시다. 내 일터에서, 내 학교에서, 내 가정에서, 내 생활반경에서 이스라엘산 원재료가 함유된 식품을 소비하지 않을 것에 동참해 주세요. 이스라엘산 원재료가 첨가된 식품에 대한 보이콧을 선언해주세요.</p>
            <a href="https://forms.gle/ek14MXxwdWjvCNCB7" className="cta" target="_blank" rel="noopener noreferrer">BDS 선언 동참하기 ✍️</a>
          </div>
        </div>
        <hr className="divider" />
        <h2 className="article-subtitle">🔥 선언에 함께하는 단체들</h2>
        {isLoadingOrgs && <p className="bds-declaration-org-list-loading">목록을 불러오고 있습니다...</p>}
        {orgsError && <p role="alert">목록을 불러오는 중 오류가 발생했습니다. 페이지를 새로고침해 주세요.</p>}
        {!isLoadingOrgs && !orgsError && (
          <ul className="bds-declaration-org-list">
            {orgNames.map((name, index) => (
              <li key={`${name}-${index}`}>{name}</li>
            ))}
          </ul>
        )}
      </main>
    </Layout>
  );
}