import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Chrome } from 'lucide-react';
import styles from './Signup.module.css';

export default function Signup() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
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
        console.log('Signup attempt:', formData);

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        // Simulate successful registration and login
        login({ name: formData.fullName, email: formData.email });
        navigate('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{t('create_account')}</h1>
                    <p className={styles.subtitle}>{t('join_community')}</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullName" className={styles.label}>{t('full_name')}</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="John Doe"
                            required
                        />
                    </div>

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
                            placeholder={t('create_password')}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword" className={styles.label}>{t('confirm_password')}</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder={t('confirm_your_password')}
                            required
                        />
                    </div>

                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            required
                        />
                        <span>
                            {t('i_agree')} <a href="#" className={styles.link}>{t('terms')}</a> {t('and')} <a href="#" className={styles.link}>{t('privacy')}</a>
                        </span>
                    </label>

                    <button type="submit" className={styles.submitButton}>
                        {t('create_account')}
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>{t('or_signup_with')}</span>
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
                    {t('already_have_account')}{' '}
                    <Link to="/login" className={styles.link}>
                        {t('sign_in')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
