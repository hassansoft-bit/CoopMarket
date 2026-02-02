import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../context/ProductContext';
import { Upload, X, ArrowLeft } from 'lucide-react';
import styles from './PostAd.module.css';

export default function PostAd() {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const { addProduct } = useProducts();
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        unit: 'piece',
        description: '',
        image: null
    });
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file
            }));
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleRemoveImage = (e) => {
        e.stopPropagation();
        setFormData(prev => ({
            ...prev,
            image: null
        }));
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
            setPreviewUrl(null);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            ...formData,
            currency: 'MAD', // Default currency
            image: previewUrl, // Storing blob URL for now. In real app, this would be a server URL.
            seller: {
                name: 'Current User', // Should come from AuthContext
                type: 'Cooperative',
                joined: new Date().getFullYear().toString()
            }
        };

        addProduct(newProduct);
        console.log('Publishing Ad:', newProduct);
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
                    <h1 className={styles.title}>{t('create_new_listing')}</h1>
                    <p className={styles.subtitle}>{t('listing_subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formSection}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="title" className={styles.label}>{t('product_title')}</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="e.g. Natural Cooperative Products"
                                required
                            />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="category" className={styles.label}>{t('category')}</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className={styles.select}
                                    required
                                >
                                    <option value="">{t('select_category')}</option>
                                    <option value="argan oil">Argan Oil</option>
                                    <option value="honey">Honey</option>
                                    <option value="carpet & rugs ">Carpet & Rugs</option>
                                    <option value="pottery">Pottery</option>
                                    <option value="spices">Spices</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="price" className={styles.label}>{t('price')}</label>
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
                            <label htmlFor="unit" className={styles.label}>{t('unit')}</label>
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
                            <label htmlFor="description" className={styles.label}>{t('description')}</label>
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
                        <label className={styles.label}>{t('upload_images')}</label>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            accept="image/*"
                        />
                        <div
                            className={styles.uploadZone}
                            onClick={handleUploadClick}
                            style={{ cursor: 'pointer', position: 'relative' }}
                        >
                            {previewUrl ? (
                                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: 'rgba(255, 0, 0, 0.7)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Upload size={32} className={styles.uploadIcon} />
                                    <p style={{ fontWeight: 500 }}>{t('drag_drop')}</p>
                                    <p style={{ fontSize: '0.8rem' }}>SVG, PNG, JPG or GIF (max. 3MB)</p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button type="button" onClick={() => navigate('/dashboard')} className={styles.cancelBtn}>
                            {t('cancel')}
                        </button>
                        <button type="submit" className={styles.submitBtn}>
                            {t('publish_ad')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
