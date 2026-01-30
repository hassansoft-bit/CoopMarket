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
import styles from './Dashboard.module.css';

export default function Dashboard() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const { t } = useLanguage();
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
                    {/* Stats Row */}
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

                    {/* Active Listings Section */}
                    <section>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>{t('active_listings')}</h2>
                            <Link to="/post-ad" className="btn btn-primary">
                                <PlusCircle size={18} style={{ marginRight: '0.5rem' }} />
                                {t('create_listing')}
                            </Link>
                        </div>

                        <div className={styles.emptyState}>
                            <Package size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                            <h3>{t('no_listings')}</h3>
                            <p>{t('start_selling')}</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
