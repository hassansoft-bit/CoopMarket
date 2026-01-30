import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Chrome } from 'lucide-react';
import styles from './Signup.module.css';

export default function Signup() {
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
        // Add registration logic here
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Create Account</h1>
                    <p className={styles.subtitle}>Join our cooperative community today</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullName" className={styles.label}>Full Name</label>
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
                        <label htmlFor="email" className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="john@example.com"
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
                            placeholder="Create a strong password"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Confirm your password"
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
                            I agree to the <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>
                        </span>
                    </label>

                    <button type="submit" className={styles.submitButton}>
                        Create Account
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>Or sign up with</span>
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
                    Already have an account?{' '}
                    <Link to="/login" className={styles.link}>
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
