import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Search, MapPin } from 'lucide-react';
import { categories, products } from '../data/mockData';
import styles from './Home.module.css';

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
                    <p className={styles.heroSubtitle}>{t('hero_subtitle')}</p>

                    <div className={styles.searchBox}>
                        <div className={styles.inputGroup}>
                            <Search className={styles.icon} />
                            <input type="text" placeholder={t('search_placeholder')} />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.borderLeft}`}>
                            <MapPin className={styles.icon} />
                            <select defaultValue="">
                                <option value="" disabled>All Cities</option>
                                <option value="agadir">Agadir</option>
                                <option value="marrakech">Marrakech</option>
                            </select>
                        </div>
                        <button className={`${styles.searchButton} btn-primary`}>{t('search_btn')}</button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="container section">
                <h2 className="section-title">{t('category_browse')}</h2>
                <div className={styles.categoryGrid}>
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={`/search?category=${cat.name.toLowerCase()}`}
                            className={styles.categoryCard}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className={styles.categoryIcon}>{cat.name[0]}</div>
                            <span>{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Latest Listings */}
            <section className="container section">
                <h2 className="section-title">{t('latest_products')}</h2>
                <div className={styles.productGrid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <div className={styles.imageWrapper}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.price}>{product.price} {product.currency}</h3>
                                <h4 className={styles.gridTitle}>{product.title}</h4>
                                <div className={styles.cardFooter}>
                                    <span>{product.city}</span>
                                    <span>{product.seller.joined}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
