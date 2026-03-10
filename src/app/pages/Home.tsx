import { useState, useMemo, useEffect, useRef } from 'react';
import productsData from '../../imports/products.json';
import availableImages from '../../imports/availableImages.json';

import Layout from '../components/Layout';
import { FilterButton } from '../components/UI';

interface Product {
  id: string;
  distributor: string;
  category: string;
  name: string;
  israeliIngredients: string[];
  state: string;
}

function ProductCard({ product, hasImage }: { product: Product; hasImage: boolean }) {
  const imageUrl = `/thumbnails/${product.id}.webp`;

  return (
    <div className="bg-white flex items-start p-[12px] relative rounded-[8px] w-full border border-[#e5e7eb] gap-[12px] min-h-[120px]">
      <div className="flex flex-1 flex-col gap-[12px] items-start self-stretch">
        <div className="flex flex-col gap-[8px] items-start w-full">
          <div className="bg-[#f3f4f6] px-[6px] py-[2px] rounded-[4px]">
            <p className="font-['Pretendard:semibold'] text-[#6b7280] text-[12px]">{product.category}</p>
          </div>
          <p className="font-['Pretendard:semibold'] text-[#1f2937] text-[16px] leading-tight">{product.name}</p>
          <p className="font-['Pretendard:semibold'] text-[#6b7280] text-[12px] truncate w-full">{product.distributor}</p>
        </div>
        <div className="mt-auto">
          <p className="font-['Pretendard:regular'] text-[#1f2937] text-[12px]">
            이스라엘산 {product.israeliIngredients.join(', ')} 포함
          </p>
        </div>
      </div>
      {hasImage && (
        <div className="overflow-clip relative rounded-[4px] shrink-0 size-[108px] bg-gray-50">
          <img alt={product.name} className="absolute inset-0 object-cover size-full" src={imageUrl} />
          <div className="absolute bg-[rgba(31,41,55,0.03)] inset-0" />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const allProducts = productsData.products as Product[];
  const imageSet = useMemo(() => new Set(availableImages), []);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products = useMemo(() => {
    return allProducts.filter(p => p.state === 'onSale');
  }, [allProducts]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const categoryCounts = new Map<string, number>();
    products.forEach(p => {
      categoryCounts.set(p.category, (categoryCounts.get(p.category) || 0) + 1);
    });
    
    const uniqueCategories = Array.from(categoryCounts.keys());
    return uniqueCategories.sort((a, b) => {
      const countA = categoryCounts.get(a) || 0;
      const countB = categoryCounts.get(b) || 0;
      return countB - countA;
    });
  }, [products]);

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory 
      ? products.filter(p => p.category === selectedCategory)
      : products;
    
    return filtered.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }, [products, selectedCategory]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [selectedCategory]);

  return (
    <Layout ref={scrollContainerRef}>
      <div className="bg-white sticky top-[53px] z-[20] border-b border-[#e5e7eb] w-full">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-[8px] px-[16px] py-[10px] items-center whitespace-nowrap">
            <FilterButton 
              label="모두 보기" 
              isActive={selectedCategory === null}
              onClick={() => setSelectedCategory(null)}
            />
            {categories.map((category) => (
              <FilterButton 
                key={category}
                label={category} 
                isActive={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product List Content */}
      <div className="flex flex-col gap-[12px] p-[16px] w-full flex-1">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            hasImage={imageSet.has(product.id)} 
          />
        ))}

        {/* 하단 결과 개수 및 여백 */}
        <div className="pt-[8px] pb-[16px] text-center">
          <p className="font-['Pretendard:medium'] text-[14px] text-[#6b7280]">
            {filteredProducts.length}개 제품
          </p>
        </div>
      </div>
    </Layout>
  );
}