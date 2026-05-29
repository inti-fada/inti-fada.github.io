import { useState, useMemo, useEffect } from 'react';
import productsData from '../../imports/products.json';
import availableProductImages from '../../imports/availableProductImages.json';
import availableIngredientImages from '../../imports/availableIngredientImages.json';

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

function ProductCard({ product, hasImage, hasIngredientImage, onIngredientClick }: { product: Product; hasImage: boolean; hasIngredientImage: boolean; onIngredientClick?: () => void }) {
  const imageUrl = `/thumbnails/${product.id}.webp`;

  return (
    <div 
      className={`product-card ${hasIngredientImage ? 'product-card-clickable' : ''}`}
      onClick={() => hasIngredientImage && onIngredientClick?.()}
    >
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
  const imageSet = useMemo(() => new Set(availableProductImages), []);
  const ingredientImageSet = useMemo(() => new Set(availableIngredientImages), []);
  
  const onSaleProducts = useMemo(() => {
    return (productsData.products as Product[]).filter(p => p.state === 'onSale');
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIngredientProduct, setSelectedIngredientProduct] = useState<Product | null>(null);
  const [sortOrder, setSortOrder] = useState<'newest' | 'alphabetical'>('newest');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const sortOptions = [
    { value: 'newest' as const, label: '최근 등록순' },
    { value: 'alphabetical' as const, label: '가나다순' },
  ];

  const currentSortLabel = sortOptions.find(opt => opt.value === sortOrder)?.label || '정렬';

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    onSaleProducts.forEach(p => counts.set(p.category, (counts.get(p.category) || 0) + 1));
    
    return Array.from(counts.keys()).sort((a, b) => (counts.get(b) || 0) - (counts.get(a) || 0));
  }, [onSaleProducts]);

  const filteredProducts = useMemo(() => {
    let list = selectedCategory 
      ? onSaleProducts.filter(p => p.category === selectedCategory)
      : onSaleProducts;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().replace(/\s/g, '');
      list = list.filter(p => 
        p.distributor.toLowerCase().replace(/\s/g, '').includes(query) ||
        p.name.toLowerCase().replace(/\s/g, '').includes(query) ||
        p.israeliIngredients.some(ing => ing.toLowerCase().replace(/\s/g, '').includes(query))
      );
    }
    
    if (sortOrder === 'alphabetical') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    } else {
      return [...list].sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }
  }, [onSaleProducts, selectedCategory, searchQuery, sortOrder]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedIngredientProduct) {
      document.body.style.overflow = 'hidden';
      
      const preventScroll = (e: Event) => {
        e.preventDefault();
      };
      
      document.addEventListener('touchmove', preventScroll, { passive: false });
      
      return () => {
        document.removeEventListener('touchmove', preventScroll);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIngredientProduct]);

  useEffect(() => {
    if (showSortMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSortMenu]);

  return (
    <Layout showSearchButton={true} onSearch={setSearchQuery}>
      {selectedIngredientProduct && (
        <div 
          className="ingredient-modal-overlay"
          onClick={() => setSelectedIngredientProduct(null)}
        >
          <div className="ingredient-modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="ingredient-modal-close"
              onClick={() => setSelectedIngredientProduct(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img 
              src={`/ingredient-info-images/${selectedIngredientProduct.id}.webp`}
              alt={selectedIngredientProduct.name}
              className="ingredient-modal-image"
            />
          </div>
        </div>
      )}
      <nav className="filter-bar">
        <div className="filter-scroll-container">
          <button 
            className="sort-dropdown-button"
            onClick={() => setShowSortMenu(!showSortMenu)}
          >
            <span>{currentSortLabel}</span>
            <img src="/ui-assets/chevronDown.svg" alt="sort" className="sort-button-icon" />
          </button>
          <FilterButton 
            label="모두 보기" 
            isActive={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
          />
          {categories.filter(c => c !== '기타').map((category) => (
            <FilterButton 
              key={category}
              label={category} 
              isActive={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
          {categories.includes('기타') && (
            <FilterButton 
              key="기타"
              label="기타" 
              isActive={selectedCategory === '기타'}
              onClick={() => setSelectedCategory('기타')}
            />
          )}
        </div>
      </nav>
      <main className="product-list-container">
        <div className="flex flex-col gap-3">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              hasImage={imageSet.has(product.id)}
              hasIngredientImage={ingredientImageSet.has(product.id)}
              onIngredientClick={() => setSelectedIngredientProduct(product)}
            />
          ))}
        </div>
        <footer className="pb-4 text-center">
          <p className="product-count">
            {filteredProducts.length}개 제품
          </p>
        </footer>
      </main>
      {showSortMenu && (
        <div 
          className="sort-sheet-overlay"
          onClick={() => setShowSortMenu(false)}
        >
          <div className="sort-bottom-sheet" onClick={e => e.stopPropagation()}>
            <div className="sort-sheet-header">
              <h3>정렬 방식</h3>
              <button
                className="sort-sheet-close"
                onClick={() => setShowSortMenu(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="sort-sheet-content">
              {sortOptions.map((option) => (
                <label key={option.value} className="sort-sheet-option">
                  <input
                    type="radio"
                    name="sortOrder"
                    value={option.value}
                    checked={sortOrder === option.value}
                    onChange={(e) => {
                      setSortOrder(e.target.value as 'newest' | 'alphabetical');
                      setShowSortMenu(false);
                    }}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}