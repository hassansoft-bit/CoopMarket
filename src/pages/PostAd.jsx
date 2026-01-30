import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, ArrowLeft } from 'lucide-react';
import styles from './PostAd.module.css';

export default function PostAd() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        unit: 'piece',
        description: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Publishing Ad:', formData);
        // Simulate API call
        alert('Ad posted successfully! Returning to dashboard.');
        navigate('/dashboard');
    };

    return (
        <div className={styles.container}>
            <button onClick={() => navigate(-1)} className={styles.cancelBtn} style={{ marginBottom: '1rem', paddingLeft: 0 }}>
                <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back
            </button>

            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Post a New Ad</h1>
                    <p className={styles.subtitle}>Fill in the details to list your product on the marketplace.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formSection}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="title" className={styles.label}>Product Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="e.g. Fresh Organic Tomatoes"
                                required
                            />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="category" className={styles.label}>Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className={styles.select}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="vegetables">Vegetables</option>
                                    <option value="fruits">Fruits</option>
                                    <option value="dairy">Dairy & Eggs</option>
                                    <option value="crafts">Handmade Crafts</option>
                                    <option value="seeds">Seeds & Plants</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="price" className={styles.label}>Price (MAD)</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="0.00"
                                    min="0"
                                    step="0.01"
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="unit" className={styles.label}>Unit</label>
                            <select
                                id="unit"
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="piece">Per Piece</option>
                                <option value="kg">Per Kg</option>
                                <option value="liter">Per Liter</option>
                                <option value="box">Per Box</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="description" className={styles.label}>Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Describe your product (freshness, origin, etc.)"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <label className={styles.label}>Product Image</label>
                        <div className={styles.uploadZone}>
                            <Upload size={32} className={styles.uploadIcon} />
                            <p style={{ fontWeight: 500 }}>Click to upload image</p>
                            <p style={{ fontSize: '0.8rem' }}>SVG, PNG, JPG or GIF (max. 3MB)</p>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button type="button" onClick={() => navigate('/dashboard')} className={styles.cancelBtn}>
                            Cancel
                        </button>
                        <button type="submit" className={styles.submitBtn}>
                            Publish Ad
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
