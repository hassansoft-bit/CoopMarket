import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { Search, ShoppingBag, User, PlusCircle } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    const { user } = useAuth();
    const { t, switchLanguage, language } = useLanguage();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.logo}>
                    <ShoppingBag className={styles.logoIcon} />
                    <span>CoopMarket</span>
                </Link>

                <div className={styles.searchBar}>
                    <input type="text" placeholder={t('search_placeholder')} className={styles.searchInput} />
                    <button className={styles.searchBtn}><Search size={18} /></button>
                </div>

                <nav className={styles.nav}>
                    <select
                        value={language}
                        onChange={(e) => switchLanguage(e.target.value)}
                        style={{
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            marginRight: '1rem',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                        }}
                    >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="ar">العربية</option>
                    </select>

                    <div className={styles.authButtons}>
                        {user ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{user.name}</span>
                                <Link to="/dashboard" className={styles.signupBtn} style={{ textDecoration: 'none' }}>
                                    {t('dashboard')}
                                </Link>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className={styles.loginBtn}>
                                    <User size={20} />
                                    <span>{t('login')}</span>
                                </Link>
                                <Link to="/signup" className={styles.signupBtn}>
                                    {t('signup')}
                                </Link>
                            </>
                        )}
                    </div>

                    {user && (
                        <Link to="/post-ad" className={`btn btn-primary ${styles.postBtn}`}>
                            <PlusCircle size={18} style={{ marginRight: '0.5rem' }} />
                            {t('post_ad')}
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
