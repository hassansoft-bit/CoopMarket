import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <Link to="/" className={styles.logo}>
                            <ShoppingBag className={styles.logoIcon} />
                            <span>CoopMarket</span>
                        </Link>
                        <p className={styles.tagline}>
                            Connecting local cooperatives with the community. Fresh, organic, and handmade products directly from the source.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3>Quick Links</h3>
                        <ul className={styles.links}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/search">Browse Products</Link></li>
                            <li><Link to="/post-ad">Sell Your Products</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className={styles.column}>
                        <h3>Support</h3>
                        <ul className={styles.links}>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Safety Tips</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h3>Contact Us</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <Mail size={18} />
                                <span>support@coopmarket.ma</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={18} />
                                <span>+212 522 000 000</span>
                            </div>
                            <div className={styles.contactItem}>
                                <MapPin size={18} />
                                <span>Casablanca, Morocco</span>
                            </div>

                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialIcon}><Facebook size={18} /></a>
                                <a href="#" className={styles.socialIcon}><Instagram size={18} /></a>
                                <a href="#" className={styles.socialIcon}><Twitter size={18} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} CoopMarket. All rights reserved.</p>
                    <p>Made with ❤️ for local cooperatives</p>
                </div>
            </div>
        </footer>
    );
}
