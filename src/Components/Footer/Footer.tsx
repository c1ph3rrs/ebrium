
import React, { useState } from 'react';
import './Footer.css';
import mainLogo from '../../assets/main_logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faArrowRight,
    faPaperPlane,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        setIsSubscribed(true);
        setEmail('');

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
    };

    return (
        <footer className="ebrium-footer">
            {/* Newsletter Section */}
            <div className="ebrium-footer-newsletter">
                <div className="container">
                    <div className="ebrium-footer-newsletter-content">
                        <div className="ebrium-footer-newsletter-text">
                            <h3>Stay Updated</h3>
                            <p>Get the latest insights on digital transformation, technology trends, and industry best practices delivered to your inbox.</p>
                        </div>
                        {!isSubscribed ? (
                            <form className="ebrium-footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
                                <div className="ebrium-footer-newsletter-input-group">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="ebrium-footer-newsletter-input"
                                        required
                                    />
                                    <button type="submit" className="ebrium-footer-newsletter-btn">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="ebrium-footer-newsletter-success">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Thank you for subscribing!</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="ebrium-footer-main">
                <div className="container">
                    <div className="ebrium-footer-content">
                        {/* Company Info */}
                        <div className="ebrium-footer-column ebrium-footer-company">
                            <div className="ebrium-footer-logo">
                                <img src={mainLogo} alt="Ebrium Digital Solutions" />
                            </div>
                            <p className="ebrium-footer-description">
                                Transforming ideas into digital reality. We deliver innovative, scalable, and future-ready solutions that help businesses thrive in the digital era.
                            </p>

                            {/* Trust Indicators */}
                            <div className="ebrium-footer-trust">
                                <div className="ebrium-footer-trust-item">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                    <span>5-Star Rated Professional</span>
                                </div>
                                <div className="ebrium-footer-trust-item">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                    <span>100+ Successful Projects</span>
                                </div>
                                <div className="ebrium-footer-trust-item">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                    <span>Enterprise Experience</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="ebrium-footer-social">
                                <h4>Follow Us</h4>
                                <div className="ebrium-footer-social-links">
                                    <a href="https://www.linkedin.com/in/engr-ibrahim-akram-6819081a2/" target="_blank" rel="noopener noreferrer" className="ebrium-footer-social-link">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                    <a href="https://x.com/ib__mughal" target="_blank" rel="noopener noreferrer" className="ebrium-footer-social-link">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61571213197093" target="_blank" rel="noopener noreferrer" className="ebrium-footer-social-link">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                    <a href="https://www.instagram.com/ebriumcoders/" target="_blank" rel="noopener noreferrer" className="ebrium-footer-social-link">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="ebrium-footer-column">
                            <h3 className="ebrium-footer-heading">Services</h3>
                            <ul className="ebrium-footer-links">
                                <li><Link to="/mob">Mobile App Development</Link></li>
                                <li><Link to="/web">Web Development</Link></li>
                                <li><Link to="/ai">AI & Machine Learning</Link></li>
                                <li><Link to="/cloud">Cloud Solutions</Link></li>
                                <li><Link to="/bi">Business Intelligence</Link></li>
                                <li><Link to="/cybersecurity">Cybersecurity Services</Link></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="ebrium-footer-column">
                            <h3 className="ebrium-footer-heading">Quick Links</h3>
                            <ul className="ebrium-footer-links">
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/solutions">Our Solutions</Link></li>
                                <li><Link to="/consultation">Free Consultation</Link></li>
                                <li><Link to="/testimonials">Client Testimonials</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>

                        {/* Resources & Contact */}
                        <div className="ebrium-footer-column">
                            <h3 className="ebrium-footer-heading">Resources</h3>
                            <ul className="ebrium-footer-links">
                                <li><Link to="/case-studies">Case Studies</Link></li>
                                <li><Link to="/white-papers">White Papers</Link></li>
                                <li><Link to="/faq">FAQs</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/support">Support Center</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                            </ul>

                            {/* Contact Info */}
                            <div className="ebrium-footer-contact">
                                <h4>Get in Touch</h4>
                                <div className="ebrium-footer-contact-item">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a href="mailto:hello@ebrium.codes">hello@ebrium.codes</a>
                                </div>
                                <div className="ebrium-footer-contact-item">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+923171755276">+92 317 1755276</a>
                                </div>
                                <div className="ebrium-footer-contact-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span>Islamabad, Pakistan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Freelance Platforms Section */}
            <div className="ebrium-footer-platforms">
                <div className="container">
                    <div className="ebrium-footer-platforms-content">
                        <h3>Available on Leading Platforms</h3>
                        <p>Hire our expert team through trusted freelance marketplaces for your next project.</p>

                        <div className="ebrium-footer-platform-buttons">
                            <a href="https://www.fiverr.com/dev__ib" className="ebrium-footer-platform-btn ebrium-footer-fiverr-btn" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-fiverr'></i>
                                <span>Hire on Fiverr</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                            <a href="https://www.upwork.com/freelancers/~dev__ib" className="ebrium-footer-platform-btn ebrium-footer-upwork-btn" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-upwork'></i>
                                <span>Hire on Upwork</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="ebrium-footer-bottom">
                <div className="container">
                    <div className="ebrium-footer-bottom-content">
                        <p className="ebrium-footer-copyright">
                            &copy; 2025 Ebrium. All rights reserved. | Powered by Innovation, Driven by Excellence.
                        </p>
                        <div className="ebrium-footer-bottom-links">
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/cookies">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
