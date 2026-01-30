import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1>Product Detail {id}</h1>
            <p>Full product view here.</p>
        </div>
    );
}
