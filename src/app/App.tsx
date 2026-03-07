import { useState, useMemo, useEffect } from 'react';
import productsData from '../imports/products.json';

interface Product {
  id: string;
  distributor: string;
  category: string;
  name: string;
  israeliIngredients: string[];
  state: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[20px] relative shrink-0 w-full rounded-lg">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0">
            <p className="font-['Pretendard:semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">
              {product.category}
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Pretendard:semibold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#1f2937] text-[16px]">
              {product.name}
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <p className="font-['Pretendard:semibold',sans-serif] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#6b7280] text-[12px] text-ellipsis whitespace-nowrap">
              {product.distributor}
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Pretendard:regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#1f2937] text-[12px]">
            이스라엘산 {product.israeliIngredients.join(', ')} 포함
          </p>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ 
  label, 
  isActive, 
  onClick 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
}) {
  if (isActive) {
    return (
      <div 
        className="bg-[#1f2937] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[16px] shrink-0 cursor-pointer"
        onClick={onClick}
      >
        <p className="font-['Pretendard:bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div 
      className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[16px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Pretendard:medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

export default function App() {
  const allProducts = productsData.products as Product[];

  // Filter only products on sale
  const products = useMemo(() => {
    return allProducts.filter(p => p.state === 'onSale');
  }, [allProducts]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories sorted by product count (descending)
  const categories = useMemo(() => {
    const categoryCounts = new Map<string, number>();
    products.forEach(p => {
      categoryCounts.set(p.category, (categoryCounts.get(p.category) || 0) + 1);
    });
    
    const uniqueCategories = Array.from(categoryCounts.keys());
    return uniqueCategories.sort((a, b) => {
      const countA = categoryCounts.get(a) || 0;
      const countB = categoryCounts.get(b) || 0;
      return countB - countA; // Descending order
    });
  }, [products]);

  // Filter products based on selected category and sort by name ascending
  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory 
      ? products.filter(p => p.category === selectedCategory)
      : products;
    
    // Sort by name in ascending order
    return filtered.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }, [products, selectedCategory]);

  // Scroll to top when filter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  return (
    <div className="bg-[#f9fafb] min-h-screen flex flex-col max-w-[480px] mx-auto border-x border-[#e5e7eb]">
      {/* Header */}
      <div className="bg-white content-stretch flex flex-col items-start pb-[8px] shrink-0 sticky top-0 w-full z-[2]">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
        
        {/* NavBar */}
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] py-[4px] relative w-full">
              <p className="font-['Pretendard:bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1f2937] text-[18px] tracking-[-0.2px] whitespace-nowrap">
                🧐 이스라엘산 들어갔나요?
              </p>
              <a 
                className="content-stretch cursor-pointer flex h-[44px] items-center justify-center relative shrink-0" 
                href="https://forms.gle/3kKMPJrdXr9dK7tUA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-[#f43f5e] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 hover:bg-[#e11d48] transition-colors">
                  <p className="font-['Pretendard:bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                    제보하기
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Filter Group */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center overflow-x-auto overflow-y-clip size-full">
            <div className="content-stretch flex items-center px-[16px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-center pr-[16px] relative shrink-0">
                <div className="content-stretch flex flex-col h-[44px] items-center justify-center relative shrink-0">
                  <FilterButton 
                    label="모두 보기" 
                    isActive={selectedCategory === null}
                    onClick={() => setSelectedCategory(null)}
                  />
                </div>
                {categories.map((category) => (
                  <div key={category} className="content-stretch flex flex-col h-[44px] items-center justify-center relative shrink-0">
                    <FilterButton 
                      label={category} 
                      isActive={selectedCategory === category}
                      onClick={() => setSelectedCategory(category)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex flex-col gap-[12px] p-[16px] w-full">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Results count */}
      <div className="px-[16px] pb-[16px] text-center">
        <p className="font-['Pretendard:medium',sans-serif] text-[14px] text-[#6b7280]">
          {filteredProducts.length}개 제품
        </p>
      </div>

      {/* Footer */}
      <div className="px-[16px] pb-[24px] text-center">
        <p className="font-['Pretendard:regular',sans-serif] text-[12px] text-[#9ca3af]">
          made by Joanne - Saoirse don Phalaistín 🍉
        </p>
      </div>
    </div>
  );
}