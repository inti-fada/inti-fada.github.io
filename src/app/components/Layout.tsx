import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router';
import { SocialLink } from './UI';

const Layout = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogoClick = () => {
      navigate('/');
      setMenuOpen(false);
    };

    return (
      <div 
        ref={ref}
        className="bg-[#f9fafb] h-full flex flex-col max-w-[480px] mx-auto shadow-[0_0_20px_0_rgba(0,0,0,0.10)] overflow-y-auto relative"
      >
      {menuOpen && (
        <div className="fixed bg-white top-[52px] left-0 right-0 bottom-0 max-w-[480px] mx-auto flex flex-col justify-between pb-[24px] px-[12px] z-[50] overflow-y-auto">
          <div className="flex flex-col w-full">
            <MenuItem label="🔍 이스라엘산 과일 원료 포함 식품 목록" onClick={() => { navigate('/'); setMenuOpen(false); }} />
            <MenuItem label="❓ 왜 이스라엘산 과일이 문제인가요?" onClick={() => { navigate('/article'); setMenuOpen(false); }} />
            <MenuItem label="📮 제보하기" isOutlink href="https://forms.gle/3kKMPJrdXr9dK7tUA" />
          </div>
          
          <div className="flex flex-col w-full">
            <SocialLink href="https://twitter.com/pps_kr" icon="/ui-assets/brandTwitter.svg" label="팔레스타인평화연대 (@pps_kr)" />
            <SocialLink href="https://www.instagram.com/palestineinkorea/" icon="/ui-assets/brandInstagram.svg" label="팔레스타인과 연대하는 한국 시민사회 긴급행동 (@palestineinkorea)" isMultiline />
            <SocialLink href="https://github.com/inti-fada/inti-fada.github.io" icon="/ui-assets/brandGitHub.svg" label="Joanne (@inti-fada)" />
          </div>
        </div>
      )}
        <div className="bg-white sticky top-0 w-full z-[40] border-b border-[#e5e7eb]">
          <div className="flex items-center pr-[16px] py-[4px] h-[52px]">
            <div className="size-[44px] flex items-center justify-center cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              <img src={menuOpen ? "/ui-assets/close.svg" : "/ui-assets/menu.svg"} className="size-[24px]" alt="menu" />
            </div>
            <div 
              className="cursor-pointer flex items-center" 
              onClick={handleLogoClick}
            >
              <p className="font-['Pretendard:bold'] text-[#1f2937] text-[18px] tracking-[-0.2px]">
                🧐 이스라엘산 들어갔나요?
              </p>
            </div>
          </div>
        </div>

        {children}
      </div>
    );
  }
);

export default Layout;

function MenuItem({ label, onClick, isOutlink, href }: { label: string; onClick?: () => void; isOutlink?: boolean; href?: string }) {
  const content = (
    <div className="h-[44px] flex items-center px-[8px] border-t border-[#1f2937] gap-[4px]">
      <p className="font-['Pretendard:semibold'] text-[#1f2937] text-[16px] truncate">{label}</p>
      {isOutlink && <img src="/ui-assets/outlink.svg" className="size-[20px]" alt="" />}
    </div>
  );

  return isOutlink ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : <div className="cursor-pointer" onClick={onClick}>{content}</div>;
}