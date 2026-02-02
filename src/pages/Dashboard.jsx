import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Settings,
    LogOut,
    Package,
    DollarSign,
    ShoppingBag,
    PlusCircle,
    User
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../context/ProductContext';
import styles from './Dashboard.module.css';

export default function Dashboard() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const { t } = useLanguage();
    const { products, deleteProduct } = useProducts();
    const [activeTab, setActiveTab] = useState('overview');

    // Redirect if not logged in
    React.useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    // Mock data for dashboard
    const stats = [
        { label: t('total_sales'), value: '$1,234', icon: DollarSign },
        { label: t('active_listings'), value: '12', icon: Package },
        { label: t('items_sold'), value: '45', icon: ShoppingBag },
    ];

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteProduct(id);
        }
    };

    const renderOverview = () => (
        <>
            <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <stat.icon size={24} />
                        </div>
                        <div className={styles.statInfo}>
                            <h3>{stat.label}</h3>
                            <p>{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <section>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>{t('active_listings')}</h2>
                    <Link to="/post-ad" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
                        <PlusCircle size={18} style={{ marginRight: '0.5rem' }} />
                        {t('create_listing')}
                    </Link>
                </div>

                <div className={styles.productsGrid}>
                    {products.slice(0, 3).map(product => (
                        <div key={product.id} className={styles.statCard} style={{ display: 'block' }}>
                            <img src={product.image} alt={product.title} className={styles.cardImage} />
                            <h3 className={styles.cardTitle}>{product.title}</h3>
                            <p className={styles.cardPrice}>{product.price} {product.currency}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );

    const renderProducts = () => (
        <section>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{t('my_products')}</h2>
                <Link to="/post-ad" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
                    <PlusCircle size={18} style={{ marginRight: '0.5rem' }} />
                    {t('create_listing')}
                </Link>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>{t('product_title')}</th>
                            <th>{t('category')}</th>
                            <th>{t('price')}</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} alt={product.title} className={styles.productImage} />
                                </td>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.price} {product.currency}</td>
                                <td>
                                    <button className={styles.actionBtn} title="Edit">
                                        <Settings size={18} />
                                    </button>
                                    <button
                                        className={`${styles.actionBtn} ${styles.deleteBtn}`}
                                        title="Delete"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <LogOut size={18} style={{ transform: 'rotate(180deg)' }} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );

    const renderSettings = () => (
        <section>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>{t('settings')}</h2>
            <form className={styles.settingsForm} onSubmit={(e) => { e.preventDefault(); alert('Settings saved!'); }}>
                <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" defaultValue={user?.name || ''} />
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" defaultValue={user?.email || ''} />
                </div>
                <div className={styles.formGroup}>
                    <label>Cooperative Name</label>
                    <input type="text" defaultValue="Coop Amal" />
                </div>
                <button type="submit" className={styles.saveBtn}>Save Changes</button>
            </form>
        </section>
    );

    return (
        <div className={styles.dashboard}>
            <div className={styles.container}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.userInfo}>
                        <div className={styles.userAvatar}>
                            <User size={40} />
                        </div>
                        <h2 className={styles.userName}>{user ? user.name : 'Seller'}</h2>
                        <span className={styles.userRole}>Cooperative Seller</span>
                    </div>

                    <nav className={styles.menu}>
                        <button
                            className={`${styles.menuItem} ${activeTab === 'overview' ? styles.active : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            <LayoutDashboard size={20} />
                            {t('overview')}
                        </button>
                        <button
                            className={`${styles.menuItem} ${activeTab === 'products' ? styles.active : ''}`}
                            onClick={() => setActiveTab('products')}
                        >
                            <Package size={20} />
                            {t('my_products')}
                        </button>
                        <button
                            className={`${styles.menuItem} ${activeTab === 'settings' ? styles.active : ''}`}
                            onClick={() => setActiveTab('settings')}
                        >
                            <Settings size={20} />
                            {t('settings')}
                        </button>
                        <button
                            className={`${styles.menuItem} ${styles.logoutBtn}`}
                            onClick={handleLogout}
                        >
                            <LogOut size={20} />
                            {t('quit_account')}
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    {activeTab === 'overview' && renderOverview()}
                    {activeTab === 'products' && renderProducts()}
                    {activeTab === 'settings' && renderSettings()}
                </main>
            </div>
        </div>
    );
}
