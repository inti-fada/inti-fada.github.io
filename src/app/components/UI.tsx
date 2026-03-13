import React from 'react';

interface ImageProps {
  src: string;
  alt?: string;
}

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
  isMultiline?: boolean;
}

export const Image: React.FC<ImageProps> = ({ src, alt = "" }) => (
  <div className="img-container">
    <img className="img-full" src={src} alt={alt} />
  </div>
);

export const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`filter-button ${isActive ? 'active' : 'inactive'}`}
    role="button"
    tabIndex={0}
  >
    {label}
  </div>
);

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, isMultiline = false }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="social-link-item"
  >
    <img src={icon} className="social-icon" alt="" aria-hidden="true" />
    <p className={`social-label ${isMultiline ? 'multiline' : 'truncate'}`}>
      {label}
    </p>
  </a>
);