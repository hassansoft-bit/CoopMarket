import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, PlusCircle } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.logo}>
                    <ShoppingBag className={styles.logoIcon} />
                    <span>CoopMarket</span>
                </Link>

                <div className={styles.searchBar}>
                    {/* Header search could be simplified if Home has a big one. 
              Keeping it simple for now, maybe only active on non-home pages later. */}
                    <input type="text" placeholder="Search..." className={styles.searchInput} />
                    <button className={styles.searchBtn}><Search size={18} /></button>
                </div>

                <nav className={styles.nav}>
                    <Link to="/auth" className={styles.navLink}>
                        <User size={20} />
                        <span>Login</span>
                    </Link>
                    <Link to="/dashboard" className={`btn btn-primary ${styles.postBtn}`}>
                        <PlusCircle size={18} style={{ marginRight: '0.5rem' }} />
                        Post Ad
                    </Link>
                </nav>
            </div>
        </header>
    );
}
