import { useState, useMemo, useEffect } from 'react';
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
    <div className="product-card">
      <div className="product-info">
        <div className="flex flex-col gap-1">
          <div className="product-badge">
            <p>{product.category}</p>
          </div>
          <p className="product-name">{product.name}</p>
          <p className="product-distributor truncate">{product.distributor}</p>
        </div>
        <p className="product-ingredients">
          이스라엘산 {product.israeliIngredients.join(', ')} 포함
        </p>
      </div>
      {hasImage && (
        <div className="product-thumb-container">
          <img alt={product.name} className="img-full" src={imageUrl} />
          <div className="product-thumb-overlay" />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const imageSet = useMemo(() => new Set(availableImages), []);
  
  const onSaleProducts = useMemo(() => {
    return (productsData.products as Product[]).filter(p => p.state === 'onSale');
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    onSaleProducts.forEach(p => counts.set(p.category, (counts.get(p.category) || 0) + 1));
    
    return Array.from(counts.keys()).sort((a, b) => (counts.get(b) || 0) - (counts.get(a) || 0));
  }, [onSaleProducts]);

  const filteredProducts = useMemo(() => {
    const list = selectedCategory 
      ? onSaleProducts.filter(p => p.category === selectedCategory)
      : onSaleProducts;
    
    return [...list].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }, [onSaleProducts, selectedCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  return (
    <Layout>
      <nav className="filter-bar">
        <div className="filter-scroll-container">
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
      </nav>
      <main className="product-list-container">
        <div className="flex flex-col gap-3">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              hasImage={imageSet.has(product.id)} 
            />
          ))}
        </div>
        <footer className="pb-4 text-center">
          <p className="product-count">
            {filteredProducts.length}개 제품
          </p>
        </footer>
      </main>
    </Layout>
  );
}