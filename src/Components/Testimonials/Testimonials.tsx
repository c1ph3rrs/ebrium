
import React, { useState, useEffect } from 'react';
import './testimonials.css';
import mainLogo from '../../assets/main_logo.png';
import avatar from '../../assets/avatar.jpg';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
    faQuoteLeft,
    faArrowRight,
    faChevronLeft,
    faChevronRight,
    faChevronDown,
    faMapMarkerAlt,
    faBuilding,
    faUser
} from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
    id: number;
    content: string;
    author: {
        name: string;
        position: string;
        company: string;
        location: string;
        avatar: string;
        rating: number;
        service: string;
    };
}

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');

    const testimonials: Testimonial[] = [
        {
            id: 1,
            content: "Ebrium Coders has truly EXCELLED in the cloud computing sphere, showing exemplary attention to details in his delivery. Working with him was a pleasure, marked by remarkable responsiveness and politeness, ensuring everything was completed on time.",
            author: {
                name: "Bakhtiyar Linove",
                position: "CEO",
                company: "Aqua Station",
                location: "United Arab Emirates",
                avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/e10ef734fc09e853740b3e7b880f3e45-1627975564724/00662766-0750-4f3d-9e98-bc68c2657fb5.jpg",
                rating: 5,
                service: "Cloud Services"
            }
        },
        {
            id: 2,
            content: "The web application developed by Ebrium exceeded our expectations. The attention to detail, user experience design, and technical implementation were outstanding. Our users love the new platform!",
            author: {
                name: "Muhsn",
                position: "CTO",
                company: "TechStart Inc",
                location: "Austria",
                avatar: avatar,
                rating: 5,
                service: "Web Development"
            }
        },
        {
            id: 3,
            content: "Ebrium Coders has demonstrated exceptional expertise in AI and machine learning, delivering a sophisticated recommendation engine with remarkable attention to detail. Their responsiveness and professionalism made the entire process smooth and efficient.",
            author: {
                name: "Daniel Amirit",
                position: "Project Manager",
                company: "Timeer Work Orders",
                location: "Israel",
                avatar: avatar,
                rating: 5,
                service: "AI & ML"
            }
        },
        {
            id: 4,
            content: "The mobile app developed by Ebrium transformed our business operations. The user interface is intuitive, the performance is excellent, and customer feedback has been overwhelmingly positive. Highly recommended!",
            author: {
                name: "Sarah Johnson",
                position: "Operations Director",
                company: "RetailPlus",
                location: "United Kingdom",
                avatar: avatar,
                rating: 5,
                service: "Mobile Development"
            }
        },
        {
            id: 5,
            content: "Working with Ebrium on our business intelligence solution was a game-changer. They delivered exactly what we needed - actionable insights that helped us make better decisions and improve our bottom line.",
            author: {
                name: "Michael Chen",
                position: "Data Director",
                company: "Analytics Corp",
                location: "Singapore",
                avatar: avatar,
                rating: 5,
                service: "Business Intelligence"
            }
        },
        {
            id: 6,
            content: "Ebrium's cybersecurity services gave us peace of mind. They conducted a thorough security audit and implemented robust protection measures that have kept our systems secure and compliant.",
            author: {
                name: "Emma Davis",
                position: "IT Security Manager",
                company: "SecureTech Solutions",
                location: "Canada",
                avatar: avatar,
                rating: 5,
                service: "Cybersecurity"
            }
        }
    ];

    const filteredTestimonials = activeFilter === 'all'
        ? testimonials
        : testimonials.filter(testimonial => testimonial.author.service.toLowerCase().includes(activeFilter));

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredTestimonials.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredTestimonials.length / 3)) % Math.ceil(filteredTestimonials.length / 3));
    };

    const services = ['all', 'mobile development', 'web development', 'cloud services', 'ai & ml', 'business intelligence', 'cybersecurity'];

    const visibleTestimonials = filteredTestimonials.slice(currentSlide * 3, (currentSlide + 1) * 3);

    return (
        <div className="ebrium-testimonials-page-wrapper">
            <Navbar />

            {/* Enhanced Hero Section */}
            <section className="ebrium-testimonials-hero">
                <div className="ebrium-testimonials-hero-bg"></div>
                <div className="ebrium-testimonials-hero-overlay"></div>
                <div className="container">
                    <div className="ebrium-testimonials-hero-content">
                        <div className="ebrium-testimonials-hero-text">
                            <span className="ebrium-testimonials-hero-badge">Client Success Stories</span>
                            <h1 className="ebrium-testimonials-hero-title">Trusted by <span className="ebrium-testimonials-highlight">Leading Businesses</span></h1>
                            <p className="ebrium-testimonials-hero-description">
                                Discover what our clients say about working with Ebrium. Real testimonials from real businesses that have transformed their operations with our innovative solutions.
                            </p>
                            <div className="ebrium-testimonials-hero-stats">
                                <div className="ebrium-testimonials-stat">
                                    <div className="ebrium-testimonials-stat-number">50+</div>
                                    <div className="ebrium-testimonials-stat-label">Happy Clients</div>
                    </div>
                                <div className="ebrium-testimonials-stat">
                                    <div className="ebrium-testimonials-stat-number">100+</div>
                                    <div className="ebrium-testimonials-stat-label">Projects Completed</div>
                            </div>
                                <div className="ebrium-testimonials-stat">
                                    <div className="ebrium-testimonials-stat-number">5.0</div>
                                    <div className="ebrium-testimonials-stat-label">Average Rating</div>
                                </div>
                            </div>
                        </div>
                        <div className="ebrium-testimonials-hero-visual">
                            <div className="ebrium-testimonials-hero-shapes">
                                <div className="ebrium-testimonials-shape ebrium-testimonials-shape-1"></div>
                                <div className="ebrium-testimonials-shape ebrium-testimonials-shape-2"></div>
                                <div className="ebrium-testimonials-shape ebrium-testimonials-shape-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ebrium-testimonials-scroll-indicator">
                        <span>Scroll to explore testimonials</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="ebrium-testimonials-filter">
                <div className="container">
                    <div className="ebrium-testimonials-filter-content">
                        <h2 className="ebrium-testimonials-section-title">Filter by Service</h2>
                        <div className="ebrium-testimonials-filter-buttons">
                            {services.map((service) => (
                                <button
                                    key={service}
                                    className={`ebrium-testimonials-filter-btn ${activeFilter === service ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(service)}
                                >
                                    {service === 'all' ? 'All Services' : service.charAt(0).toUpperCase() + service.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="ebrium-testimonials-section">
                <div className="container">
                    <div className="ebrium-testimonials-section-header">
                        <h2 className="ebrium-testimonials-section-title">What Our Clients Say</h2>
                        <p className="ebrium-testimonials-section-subtitle">Real feedback from businesses we've helped transform</p>
                    </div>

                    <div className="ebrium-testimonials-container">
                        <div className="ebrium-testimonials-grid">
                            {visibleTestimonials.map((testimonial) => (
                                <div key={testimonial.id} className="ebrium-testimonials-card">
                                    <div className="ebrium-testimonials-quote">
                                        <FontAwesomeIcon icon={faQuoteLeft} />
                                    </div>
                                    <div className="ebrium-testimonials-rating">
                                        {[...Array(testimonial.author.rating)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                        ))}
                                    </div>
                                    <div className="ebrium-testimonials-content">
                                        <p>{testimonial.content}</p>
                                    </div>
                                    <div className="ebrium-testimonials-author">
                                        <div className="ebrium-testimonials-author-avatar">
                                            <img src={testimonial.author.avatar} alt={`${testimonial.author.name} - ${testimonial.author.position}`} />
                                        </div>
                                        <div className="ebrium-testimonials-author-info">
                                            <h4>{testimonial.author.name}</h4>
                                            <p className="ebrium-testimonials-author-position">{testimonial.author.position}</p>
                                            <p className="ebrium-testimonials-author-company">{testimonial.author.company}</p>
                                            <div className="ebrium-testimonials-author-meta">
                                                <span className="ebrium-testimonials-service-tag">{testimonial.author.service}</span>
                                                <span className="ebrium-testimonials-location">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                    {testimonial.author.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredTestimonials.length > 3 && (
                            <div className="ebrium-testimonials-navigation">
                                <button
                                    className="ebrium-testimonials-nav-btn"
                                    onClick={prevSlide}
                                    disabled={currentSlide === 0}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <div className="ebrium-testimonials-dots">
                                    {Array.from({ length: Math.ceil(filteredTestimonials.length / 3) }, (_, i) => (
                                        <button
                                            key={i}
                                            className={`ebrium-testimonials-dot ${currentSlide === i ? 'active' : ''}`}
                                            onClick={() => setCurrentSlide(i)}
                                        />
                                    ))}
                                </div>
                                <button
                                    className="ebrium-testimonials-nav-btn"
                                    onClick={nextSlide}
                                    disabled={currentSlide === Math.ceil(filteredTestimonials.length / 3) - 1}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Hire Me Section - Fiverr & Upwork */}
            <section className="hire-me-section">
                <div className="container">
                    <div className="hire-me-content">
                        <h2>Ready to Join Our Success Stories?</h2>
                        <p>Get expert digital solutions from our trusted team. Available on leading freelance platforms.</p>

                        <div className="platform-buttons">
                            <a href="https://www.fiverr.com/dev__ib" className="platform-btn fiverr-btn" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-fiverr'></i>
                                <span>Hire on Fiverr</span>
                            </a>
                            <a href="https://www.upwork.com/freelancers/~dev__ib" className="platform-btn upwork-btn" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-upwork'></i>
                                <span>Hire on Upwork</span>
                            </a>
                        </div>
                        
                        <div className="trust-indicators">
                            <div className="trust-item">
                                <i className='bx bx-check-circle'></i>
                                <span>5-Star Rated Professional</span>
                            </div>
                            <div className="trust-item">
                                <i className='bx bx-check-circle'></i>
                                <span>100+ Successful Projects</span>
                                </div>
                            <div className="trust-item">
                                <i className='bx bx-check-circle'></i>
                                <span>Enterprise Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="hire-me-image">
                        <img src={mainLogo} alt="Ebrium Digital Solutions" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Testimonials;