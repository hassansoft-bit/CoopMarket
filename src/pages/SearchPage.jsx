import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/mockData';

import { useLanguage } from '../context/LanguageContext';

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const { t } = useLanguage();
    const categoryFilter = searchParams.get('category');
    const searchTerm = searchParams.get('q');

    // Filter products (mock logic)
    const filteredProducts = products.filter(product => {
        if (categoryFilter && !product.category?.toLowerCase()?.includes(categoryFilter.toLowerCase())) {
            // Since mock data might not have category field on all items yet, usually we check logic.
            // For now, let's just show all or rudimentary filter if property exists.
            return true;
        }
        return true;
    });

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1>{t('search_results')}</h1>

            {(categoryFilter || searchTerm) && (
                <p style={{ color: '#666', marginBottom: '2rem' }}>
                    {t('filters')}:
                    {categoryFilter && <span style={{ fontWeight: 'bold' }}> {t('category')}: {categoryFilter}</span>}
                    {searchTerm && <span style={{ fontWeight: 'bold' }}> Search: {searchTerm}</span>}
                </p>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                {filteredProducts.map((product) => (
                    <div key={product.id} style={{
                        background: 'white',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                        border: '1px solid #e5e5e5'
                    }}>
                        <div style={{ height: '200px', background: '#eee' }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <h3 style={{ fontSize: '1.25rem', color: '#2E5D32', marginBottom: '0.25rem' }}>
                                {product.price} {product.currency}
                            </h3>
                            <h4 style={{ fontSize: '1rem', fontWeight: 500 }}>{product.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
