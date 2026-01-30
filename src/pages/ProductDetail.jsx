import React from 'react';
import { useParams } from 'react-router-dom';

import { useLanguage } from '../context/LanguageContext';

export default function ProductDetail() {
    const { id } = useParams();
    const { t } = useLanguage();
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1>{t('product_detail')} {id}</h1>
            <p>{t('full_product_view')}</p>
        </div>
    );
}
