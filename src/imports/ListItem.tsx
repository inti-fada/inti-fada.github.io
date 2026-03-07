import imgThumbnail from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
type ListItemProps = {
  className?: string;
  hasThumbnail?: boolean;
  thumbnail?: string;
  category: string;
  name: string;
  distributor: string;
  israeliIngredients: string;
};

export default function ListItem({ 
  className, 
  hasThumbnail = false,
  thumbnail,
  category,
  name,
  distributor,
  israeliIngredients
}: ListItemProps) {
  return (
    <div className={className || "bg-white content-stretch flex items-start min-h-[120px] p-[12px] relative rounded-[4px] w-[328px]"} data-name="ListItem">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative self-stretch" data-name="TextContainer">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="PrimaryInformation">
          <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Category">
            <p className="font-['Pretendard:semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">{category}</p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Name">
            <p className="flex-[1_0_0] font-['Pretendard:semibold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#1f2937] text-[16px]">{name}</p>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Distributor">
            <p className="font-['Pretendard:semibold',sans-serif] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#6b7280] text-[12px] text-ellipsis whitespace-nowrap">{distributor}</p>
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="IsraeliIngredients">
          <p className="flex-[1_0_0] font-['Pretendard:regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#1f2937] text-[12px]">{`이스라엘산 ${israeliIngredients} 포함`}</p>
        </div>
      </div>
      {hasThumbnail && thumbnail && (
        <div className="overflow-clip relative rounded-[4px] shrink-0 size-[108px]" data-name="Thumbnail">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={thumbnail} />
          <div className="absolute bg-[rgba(31,41,55,0.02)] inset-0" data-name="Overlay" />
        </div>
      )}
    </div>
  );
}