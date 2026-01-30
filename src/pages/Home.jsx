import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { categories, products } from '../data/mockData';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Discover Authentic Moroccan Products</h1>
                    <p className={styles.heroSubtitle}>Directly from local cooperatives to your doorstep.</p>

                    <div className={styles.searchBox}>
                        <div className={styles.inputGroup}>
                            <Search className={styles.icon} />
                            <input type="text" placeholder="What are you looking for?" />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.borderLeft}`}>
                            <MapPin className={styles.icon} />
                            <select defaultValue="">
                                <option value="" disabled>All Cities</option>
                                <option value="agadir">Agadir</option>
                                <option value="marrakech">Marrakech</option>
                            </select>
                        </div>
                        <button className={`${styles.searchButton} btn-primary`}>Search</button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="container section">
                <h2 className="section-title">Browse by Category</h2>
                <div className={styles.categoryGrid}>
                    {categories.map((cat) => (
                        <div key={cat.id} className={styles.categoryCard}>
                            <div className={styles.categoryIcon}>{cat.name[0]}</div>
                            <span>{cat.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Latest Listings */}
            <section className="container section">
                <h2 className="section-title">Fresh from Cooperatives</h2>
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
