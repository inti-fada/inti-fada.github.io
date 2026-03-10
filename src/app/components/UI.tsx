export function Image({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="aspect-[3/2] relative shrink-0 w-full">
      <img className="absolute inset-0 object-cover size-full" src={src} alt={alt} />
    </div>
  );
}

export function FilterButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  const activeClass = "bg-[#f43f5e] text-white font-['Pretendard:bold']";
  const inactiveClass = "bg-white text-[#6b7280] font-['Pretendard:medium'] border border-[#e5e7eb]";
  
  return (
    <div 
      onClick={onClick}
      className={`px-[12px] py-[6px] rounded-[16px] cursor-pointer text-[12px] whitespace-nowrap transition-colors flex items-center justify-center h-[32px] ${isActive ? activeClass : inactiveClass}`}
    >
      {label}
    </div>
  );
}

export function SocialLink({ href, icon, label, isMultiline = false }: { href: string; icon: string; label: string; isMultiline?: boolean }) {
  return (
    <a className="min-h-[28px] w-full" href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex gap-[4px] items-start px-[8px] py-[6px]">
        <img src={icon} className="size-[16px] shrink-0 mt-[2px]" alt="" />
        <p className={`text-[#6b7280] text-[12px] leading-[1.4] ${isMultiline ? 'whitespace-normal break-keep' : 'truncate'}`}>
          {label}
        </p>
      </div>
    </a>
  );
}