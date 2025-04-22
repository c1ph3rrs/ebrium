import './contact.css';
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
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

import {  faSquareVirus } from '@fortawesome/free-solid-svg-icons';
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
        <div className="contact-page">
            <Navbar />
            
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <h1>Get in Touch</h1>
                        <div className="contact-divider"></div>
                        <p className="contact-tagline">We're here to answer your questions and help you succeed</p>
                    </div>
                </div>
                <div className="contact-shape contact-shape-1"></div>
                <div className="contact-shape contact-shape-2"></div>
            </section>
            
            {/* Main Contact Section */}
            <section className="contact-main">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info-container">
                            <div className="contact-info-card">
                                <h2>Contact Information</h2>
                                <p className="contact-intro">
                                    Have questions about our services? Reach out to us through any of these channels and we'll get back to you promptly.
                                </p>
                                
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Email</h3>
                                        <p>For general inquiries:</p>
                                        <a href="mailto:hello@ebrium.codes" className="contact-link">
                                            hello@ebrium.codes
                                        </a>
                                        {/* <p>For support:</p>
                                        <a href="mailto:support@ebrium.com" className="contact-link">
                                            support@ebrium.com
                                        </a> */}
                                    </div>
                                </div>
                                
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <FontAwesomeIcon icon={faSquareVirus} />
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Fiverr</h3>
                                        <p>Find us on Fiverr for project-based work:</p>
                                        <a href="https://www.fiverr.com/dev__ib" target="_blank" rel="noopener noreferrer" className="contact-link">
                                            fiverr.com/dev__ib
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Phone</h3>
                                        <p>Call our customer service:</p>
                                        <a href="tel:+1234567890" className="contact-link">
                                            +92 317 1755276
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Office</h3>
                                        <p>Pakistan</p>
                                        <p>Islamabad</p>
                                        <p>Islamabad, Pakistan</p>
                                    </div>
                                </div>
                                
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <FontAwesomeIcon icon={faClock} />
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Business Hours</h3>
                                        <p>Monday - Friday: 9:00 AM to 5:00 PM</p>
                                        <p>Saturday: 10:00 AM to 2:00 PM</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-form-container">
                            {!isSubmitted ? (
                                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                                    <h2>Send Us a Message</h2>
                                    
                                    <div className="form-group floating-label">
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                        <label htmlFor="name">Full Name</label>
                                        <div className="input-highlight"></div>
                                    </div>
                                    
                                    <div className="form-group floating-label">
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                        <label htmlFor="email">Email Address</label>
                                        <div className="input-highlight"></div>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group floating-label">
                                            <input 
                                                type="tel" 
                                                id="phone" 
                                                name="phone" 
                                                value={formData.phone} 
                                                onChange={handleChange} 
                                            />
                                            <label htmlFor="phone">Phone Number</label>
                                            <div className="input-highlight"></div>
                                        </div>
                                        
                                        <div className="form-group select-wrapper">
                                            <select 
                                                id="subject" 
                                                name="subject" 
                                                value={formData.subject} 
                                                onChange={handleChange}
                                                required
                                                className="styled-select"
                                            >
                                                <option value="" disabled>Select a subject</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Technical Support">Technical Support</option>
                                                <option value="Cloud Services">Cloud Services</option>
                                                <option value="Mobile App Development">Mobile App Development</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                            </select>
                                            <label htmlFor="subject" className="select-label">Subject</label>
                                            <div className="select-arrow"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group floating-label textarea-wrapper">
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows={6} 
                                            value={formData.message} 
                                            onChange={handleChange} 
                                            required
                                        ></textarea>
                                        <label htmlFor="message">Message</label>
                                        <div className="input-highlight"></div>
                                    </div>
                                    
                                    <button type="submit" className="contact-submit-btn">
                                        <span>Send Message</span>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </form>
                            ) : (
                                <div className="contact-success-message">
                                    <div className="success-icon">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <h2>Message Sent!</h2>
                                    <p>Thank you for contacting us. We'll get back to you shortly.</p>
                                    <button 
                                        onClick={() => window.location.reload()} 
                                        className="send-another-btn"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>
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
            <section className="contact-faq">
                <div className="container">
                    <div className="contact-section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Find quick answers to common questions about contacting us</p>
                    </div>
                    
                    <div className="faq-container">
                        <div className="faq-item">
                            <h3>How quickly will I receive a response?</h3>
                            <p>We typically respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our support line directly.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>Can I schedule a consultation?</h3>
                            <p>Yes! You can schedule a free 30-minute consultation by filling out the contact form and selecting "Consultation" as the subject, or by calling our office directly.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>Do you work with international clients?</h3>
                            <p>Absolutely. We have clients around the globe and can accommodate different time zones for meetings and support.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>What information should I include in my message?</h3>
                            <p>To help us address your inquiry effectively, please include details about your project, timeline, budget considerations, and specific services you're interested in.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}   

export default Contact;