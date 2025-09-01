import './contact.css';
import mainLogo from '../../assets/main_logo.png';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faLocationDot,
    faClock,
    faCheck,
    faPaperPlane,
    faArrowRight,
    faChevronDown,
    faMapMarkerAlt,
    faUser,
    faMessage,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef<HTMLFormElement>(null);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            // Using the form directly with EmailJS
            // The template expects: {{name}}, {{email}}, and {{project}}
            // No need to create templateParams separately as the form fields
            // should match the template variables
            emailjs
                .sendForm(
                    'service_2nx168m', 
                    'template_4y0je97', 
                    form.current, 
                    'fzjFI68zyrzIRPZXa'
                )
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                    setIsSubmitted(true);
                    
                    setTimeout(() => {
                        setIsSubmitted(false);
                        setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            subject: '',
                            message: '',
                        });
                    }, 5000);
                })
                .catch((error) => {
                    console.error('Failed to send email:', error.text);
                    alert('Failed to send message. Please try again later.');
                });
        }
    };

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* Enhanced Hero Section */}
            <section className="ebrium-contact-hero">
                <div className="ebrium-contact-hero-bg"></div>
                <div className="ebrium-contact-hero-overlay"></div>
                <div className="container">
                    <div className="ebrium-contact-hero-content">
                        <div className="ebrium-contact-hero-text">
                            <span className="ebrium-contact-hero-badge">Get in Touch</span>
                            <h1 className="ebrium-contact-hero-title">Let's Build Something <span className="ebrium-contact-highlight">Amazing</span> Together</h1>
                            <p className="ebrium-contact-hero-description">
                                Ready to transform your business with innovative digital solutions? We're here to answer your questions, discuss your project, and help you achieve your goals.
                            </p>
                            <div className="ebrium-contact-hero-buttons">
                                <a href="#contact-form" className="ebrium-contact-primary-btn">
                                    Send Message
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                                <a href="#contact-info" className="ebrium-contact-secondary-btn">
                                    Contact Info
                                </a>
                            </div>
                        </div>
                        <div className="ebrium-contact-hero-visual">
                            <div className="ebrium-contact-hero-shapes">
                                <div className="ebrium-contact-shape ebrium-contact-shape-1"></div>
                                <div className="ebrium-contact-shape ebrium-contact-shape-2"></div>
                                <div className="ebrium-contact-shape ebrium-contact-shape-3"></div>
                            </div>
                            <div className="ebrium-contact-hero-cards">
                                <div className="ebrium-contact-hero-card">
                                    <div className="ebrium-contact-hero-card-icon">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <h3>Expert Team</h3>
                                    <p>Skilled professionals ready to help</p>
                                </div>
                                <div className="ebrium-contact-hero-card">
                                    <div className="ebrium-contact-hero-card-icon">
                                        <FontAwesomeIcon icon={faMessage} />
                                    </div>
                                    <h3>Quick Response</h3>
                                    <p>24-48 hours guaranteed reply</p>
                                </div>
                                <div className="ebrium-contact-hero-card">
                                    <div className="ebrium-contact-hero-card-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <h3>Direct Support</h3>
                                    <p>Phone and live chat available</p>
                                </div>
                                <div className="ebrium-contact-hero-card">
                                    <div className="ebrium-contact-hero-card-icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <h3>Email Support</h3>
                                    <p>Dedicated support channels</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ebrium-contact-scroll-indicator">
                        <span>Scroll to explore</span>
                        <FontAwesomeIcon icon={faChevronDown} bounce />
                    </div>
                </div>
            </section>
            
            {/* Contact Information Section */}
            <section id="contact-info" className="ebrium-contact-info">
                <div className="container">
                    <div className="ebrium-contact-info-content">
                        <div className="ebrium-contact-section-header">
                            <h2 className="ebrium-contact-section-title">Get in Touch</h2>
                            <p className="ebrium-contact-section-subtitle">Multiple ways to connect with our team</p>
                        </div>

                        <div className="ebrium-contact-info-grid">
                            <div className="ebrium-contact-info-card">
                                <div className="ebrium-contact-info-icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="ebrium-contact-info-content">
                                    <h3>Email Us</h3>
                                    <p>Send us an email and we'll respond within 24 hours</p>
                                    <a href="mailto:hello@ebrium.codes" className="ebrium-contact-link">
                                        hello@ebrium.codes
                                    </a>
                                </div>
                            </div>

                            <div className="ebrium-contact-info-card">
                                <div className="ebrium-contact-info-icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="ebrium-contact-info-content">
                                    <h3>Call Us</h3>
                                    <p>Speak directly with our experts</p>
                                    <a href="tel:+923171755276" className="ebrium-contact-link">
                                        +92 317 1755276
                                    </a>
                                </div>
                            </div>

                            <div className="ebrium-contact-info-card">
                                <div className="ebrium-contact-info-icon">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <div className="ebrium-contact-info-content">
                                    <h3>Our Location</h3>
                                    <p>Serving clients worldwide from Pakistan</p>
                                    <span className="ebrium-contact-location">Islamabad, Pakistan</span>
                                </div>
                            </div>

                            <div className="ebrium-contact-info-card">
                                <div className="ebrium-contact-info-icon">
                                    <FontAwesomeIcon icon={faClock} />
                                </div>
                                <div className="ebrium-contact-info-content">
                                    <h3>Business Hours</h3>
                                    <p>Mon-Fri: 9AM-5PM</p>
                                    <p>Sat: 10AM-2PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Hire Me Section - Fiverr & Upwork */}
                        <div className="ebrium-contact-hire-section">
                            <h3>Available on Freelance Platforms</h3>
                            <p>Hire our expert team through trusted freelance marketplaces</p>

                            <div className="ebrium-contact-platform-buttons">
                                <a href="https://www.fiverr.com/dev__ib" className="ebrium-contact-platform-btn ebrium-contact-fiverr-btn" target="_blank" rel="noopener noreferrer">
                                    <i className='bx bxl-fiverr'></i>
                                    <span>Hire on Fiverr</span>
                                </a>
                                <a href="https://www.upwork.com/freelancers/~dev__ib" className="ebrium-contact-platform-btn ebrium-contact-upwork-btn" target="_blank" rel="noopener noreferrer">
                                    <i className='bx bxl-upwork'></i>
                                    <span>Hire on Upwork</span>
                                </a>
                            </div>

                            <div className="ebrium-contact-trust-indicators">
                                <div className="ebrium-contact-trust-item">
                                    <i className='bx bx-check-circle'></i>
                                    <span>5-Star Rated Professional</span>
                                </div>
                                <div className="ebrium-contact-trust-item">
                                    <i className='bx bx-check-circle'></i>
                                    <span>100+ Successful Projects</span>
                                </div>
                                <div className="ebrium-contact-trust-item">
                                    <i className='bx bx-check-circle'></i>
                                    <span>Enterprise Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form Section */}
            <section id="contact-form" className="ebrium-contact-form-section">
                <div className="container">
                    <div className="ebrium-contact-form-container">
                        {!isSubmitted ? (
                            <div className="ebrium-contact-form-wrapper">
                                <div className="ebrium-contact-form-header">
                                    <h2 className="ebrium-contact-form-title">Send Us a Message</h2>
                                    <p className="ebrium-contact-form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
                                </div>

                                <form ref={form} className="ebrium-contact-form" onSubmit={handleSubmit}>
                                    <div className="ebrium-contact-form-grid">
                                        <div className="ebrium-contact-form-group">
                                            <label htmlFor="name" className="ebrium-contact-form-label">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="ebrium-contact-form-input"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>

                                        <div className="ebrium-contact-form-group">
                                            <label htmlFor="email" className="ebrium-contact-form-label">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="ebrium-contact-form-input"
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>

                                        <div className="ebrium-contact-form-group">
                                            <label htmlFor="phone" className="ebrium-contact-form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="ebrium-contact-form-input"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        <div className="ebrium-contact-form-group">
                                            <label htmlFor="subject" className="ebrium-contact-form-label">Service Interest</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="ebrium-contact-form-select"
                                                required
                                            >
                                                <option value="" disabled>Select a service</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Mobile App Development">Mobile App Development</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="AI & Machine Learning">AI & Machine Learning</option>
                                                <option value="Cloud Solutions">Cloud Solutions</option>
                                                <option value="Business Intelligence">Business Intelligence</option>
                                                <option value="Consultation">Free Consultation</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="ebrium-contact-form-group ebrium-contact-form-group-full">
                                        <label htmlFor="message" className="ebrium-contact-form-label">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="ebrium-contact-form-textarea"
                                            placeholder="Tell us about your project, timeline, and specific requirements..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="ebrium-contact-submit-btn">
                                        <span>Send Message</span>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="ebrium-contact-success-message">
                                <div className="ebrium-contact-success-icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <h2 className="ebrium-contact-success-title">Message Sent Successfully!</h2>
                                <p className="ebrium-contact-success-text">Thank you for contacting us. We'll get back to you within 24 hours with a detailed response.</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="ebrium-contact-send-another-btn"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            {/* Map Section */}
            <section className="contact-map">
                <div className="container">
                    <div className="contact-section-header">
                        <h2>Find Us</h2>
                        <p>Visit our office located in the heart of San Francisco</p>
                    </div>
                    <div className="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.65839536357!2d-122.44731685806446!3d37.75769018817291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1644841384160!5m2!1sen!2sus" 
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="ebrium-contact-faq">
                <div className="container">
                    <div className="ebrium-contact-section-header">
                        <h2 className="ebrium-contact-section-title">Frequently Asked Questions</h2>
                        <p className="ebrium-contact-section-subtitle">Find quick answers to common questions</p>
                    </div>

                    <div className="ebrium-contact-faq-container">
                        <div className="ebrium-contact-faq-item">
                            <div className="ebrium-contact-faq-icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div className="ebrium-contact-faq-content">
                                <h3>How quickly will I receive a response?</h3>
                                <p>We typically respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our support line directly for immediate assistance.</p>
                            </div>
                        </div>

                        <div className="ebrium-contact-faq-item">
                            <div className="ebrium-contact-faq-icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="ebrium-contact-faq-content">
                                <h3>Can I schedule a consultation?</h3>
                                <p>Yes! You can schedule a free 30-minute consultation by filling out the contact form and selecting "Free Consultation" as the subject, or by calling our office directly.</p>
                            </div>
                        </div>

                        <div className="ebrium-contact-faq-item">
                            <div className="ebrium-contact-faq-icon">
                                <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <div className="ebrium-contact-faq-content">
                                <h3>Do you work with international clients?</h3>
                                <p>Absolutely. We have clients around the globe and can accommodate different time zones for meetings and support. Our team is experienced in international project management.</p>
                            </div>
                        </div>

                        <div className="ebrium-contact-faq-item">
                            <div className="ebrium-contact-faq-icon">
                                <FontAwesomeIcon icon={faMessage} />
                            </div>
                            <div className="ebrium-contact-faq-content">
                                <h3>What information should I include in my message?</h3>
                                <p>To help us address your inquiry effectively, please include details about your project, timeline, budget considerations, and specific services you're interested in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}   

export default Contact;