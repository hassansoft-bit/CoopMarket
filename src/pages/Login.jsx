import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Facebook, Chrome } from 'lucide-react';
import styles from './Login.module.css';

export default function Login() {
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
        // Add authentication logic here
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p className={styles.subtitle}>Please enter your details to sign in</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Enter your password"
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
                            Remember me
                        </label>
                        <Link to="/forgot-password" className={styles.link}>
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Sign in
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>Or continue with</span>
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
                    Don't have an account?{' '}
                    <Link to="/signup" className={styles.link}>
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
