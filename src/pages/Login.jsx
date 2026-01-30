import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Lock, Facebook, Chrome } from 'lucide-react';
import styles from './Login.module.css';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
        // Simulate successful login
        login({ name: 'Hassan Store', email: formData.email });
        navigate('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{t('welcome_back')}</h1>
                    <p className={styles.subtitle}>{t('signin_subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>{t('email_label')}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder={t('enter_email')}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>{t('password_label')}</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder={t('enter_password')}
                            required
                        />
                    </div>

                    <div className={styles.actions}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            {t('remember_me')}
                        </label>
                        <Link to="/forgot-password" className={styles.link}>
                            {t('forgot_password')}
                        </Link>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        {t('sign_in')}
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>{t('or_continue_with')}</span>
                </div>

                <div className={styles.socialLogin}>
                    <button type="button" className={styles.socialBtn}>
                        <Chrome size={20} />
                        Google
                    </button>
                    <button type="button" className={styles.socialBtn}>
                        <Facebook size={20} />
                        Facebook
                    </button>
                </div>

                <div className={styles.footer}>
                    {t('dont_have_account')}{' '}
                    <Link to="/signup" className={styles.link}>
                        {t('signup')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
