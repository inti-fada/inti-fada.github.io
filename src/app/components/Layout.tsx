import React, { useState, useEffect, forwardRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { SocialLink } from './UI';

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  isOutlink?: boolean;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, isOutlink, href }) => {
  const content = (
    <div className="menu-item-content">
      <p className="menu-item-label truncate">{label}</p>
      {isOutlink && <img src="/ui-assets/outlink.svg" className="size-[20px]" alt="external" />}
    </div>
  );

  if (isOutlink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block decoration-none">
        {content}
      </a>
    );
  }

  return (
    <div className="cursor-pointer" onClick={onClick}>
      {content}
    </div>
  );
};

const Layout = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (menuOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      
      return () => document.body.classList.remove('no-scroll');
    }, [menuOpen]);

    // Scroll to top when navigating to a different page
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    const handleLogoClick = () => {
      setMenuOpen(false);
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    };

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
      <div ref={ref} className="layout-wrapper">
        {menuOpen && (
          <nav className="full-menu">
            <div className="flex flex-col w-full">
              <MenuItem label="🔍 이스라엘산 과일 원료 포함 식품 목록" onClick={() => { navigate('/'); closeMenu(); }} />
              <MenuItem label="❓ 왜 이스라엘산 과일이 문제인가요?" onClick={() => { navigate('/campaign-background'); closeMenu(); }} />
              <MenuItem label="📮 제보하기" isOutlink href="https://forms.gle/3kKMPJrdXr9dK7tUA" />
            </div>
            
            <div className="flex flex-col w-full pt-4">
              <SocialLink href="https://twitter.com/pps_kr" icon="/ui-assets/brandTwitter.svg" label="팔레스타인평화연대 (@pps_kr)" />
              <SocialLink href="https://www.instagram.com/palestineinkorea/" icon="/ui-assets/brandInstagram.svg" label="팔레스타인과 연대하는 한국 시민사회 긴급행동 (@palestineinkorea)" isMultiline />
              <SocialLink href="https://github.com/inti-fada/inti-fada.github.io" icon="/ui-assets/brandGitHub.svg" label="Joanne (@inti-fada)" />
            </div>
          </nav>
        )}

        <header className="header">
          <div className="header-inner">
            <button 
              className="icon-button" 
              onClick={toggleMenu}
            >
              <img 
                src={menuOpen ? "/ui-assets/close.svg" : "/ui-assets/menu.svg"} 
                className="size-[24px]" 
              />
            </button>
            
            <div className="cursor-pointer flex items-center" onClick={handleLogoClick}>
              <span className="header-title">🧐 이스라엘산 들어갔나요?</span>
            </div>
          </div>
        </header>

        {children}
      </div>
    );
  }
);

export default Layout;