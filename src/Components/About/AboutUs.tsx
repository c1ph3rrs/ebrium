import React from 'react';
import './aboutus.css';
import mainLogo from '../../assets/main_logo.png';
import avatar from '../../assets/avatar.jpg';
import aboutImage from '../../assets/about_us.jpeg';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLightbulb,
    faHandshake,
    faRocket,
    faUserShield,
    faTrophy,
    faUsers,
    faGlobe,
    faCode,
    faArrowRight,
    faChevronDown,
    faMapMarkerAlt,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            
            {/* Enhanced Hero Section */}
            <section className="ebrium-about-hero">
                <div className="ebrium-about-hero-bg"></div>
                <div className="ebrium-about-hero-overlay"></div>
                <div className="container">
                    <div className="ebrium-about-hero-content">
                        <div className="ebrium-about-hero-text">
                            <span className="ebrium-about-hero-badge">About Ebrium</span>
                            <h1 className="ebrium-about-hero-title">Transforming Ideas Into <span className="ebrium-about-highlight">Digital Excellence</span></h1>
                            <p className="ebrium-about-hero-description">
                                Since 2018, we've been at the forefront of digital innovation, helping businesses worldwide transform their ideas into powerful, scalable solutions that drive growth and create lasting impact.
                            </p>
                            <div className="ebrium-about-hero-buttons">
                                <a href="#our-story" className="ebrium-about-primary-btn">
                                    Our Story
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                                <a href="#team" className="ebrium-about-secondary-btn">
                                    Meet Our Team
                                </a>
                            </div>
                        </div>
                        <div className="ebrium-about-hero-visual">
                            <div className="ebrium-about-hero-shapes">
                                <div className="ebrium-about-shape ebrium-about-shape-1"></div>
                                <div className="ebrium-about-shape ebrium-about-shape-2"></div>
                                <div className="ebrium-about-shape ebrium-about-shape-3"></div>
                            </div>
                            <div className="ebrium-about-hero-cards">
                                <div className="ebrium-about-hero-card">
                                    <div className="ebrium-about-hero-card-icon">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                    <h3>5+ Years</h3>
                                    <p>Experience</p>
                                </div>
                                <div className="ebrium-about-hero-card">
                                    <div className="ebrium-about-hero-card-icon">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                    <h3>50+</h3>
                                    <p>Happy Clients</p>
                                </div>
                                <div className="ebrium-about-hero-card">
                                    <div className="ebrium-about-hero-card-icon">
                                        <FontAwesomeIcon icon={faTrophy} />
                                    </div>
                                    <h3>100+</h3>
                                    <p>Projects</p>
                                </div>
                                <div className="ebrium-about-hero-card">
                                    <div className="ebrium-about-hero-card-icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </div>
                                    <h3>12+</h3>
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Story Section */}
            <section id="our-story" className="ebrium-about-story">
                <div className="container">
                    <div className="ebrium-about-story-content">
                        <div className="ebrium-about-story-text">
                            <h2 className="ebrium-about-section-title">Our Mission & Vision</h2>
                            <p>At Ebrium, we're on a mission to empower businesses through innovative digital solutions that drive growth and create lasting value. We combine cutting-edge technology with strategic thinking to transform challenges into opportunities.</p>
                            <p>We believe in building partnerships, not just projects. Our client-first approach ensures that we deliver solutions that are tailored to your unique needs and goals, helping you stay ahead in today's competitive digital landscape.</p>
                            <div className="ebrium-about-story-stats">
                                <div className="ebrium-about-stat">
                                    <div className="ebrium-about-stat-number">5+</div>
                                    <div className="ebrium-about-stat-label">Years of Excellence</div>
                                </div>
                                <div className="ebrium-about-stat">
                                    <div className="ebrium-about-stat-number">100+</div>
                                    <div className="ebrium-about-stat-label">Successful Projects</div>
                                </div>
                                <div className="ebrium-about-stat">
                                    <div className="ebrium-about-stat-number">50+</div>
                                    <div className="ebrium-about-stat-label">Happy Clients</div>
                                </div>
                            </div>
                        </div>
                        <div className="ebrium-about-story-image">
                            <img src={aboutImage} alt="Ebrium Team Working Together" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Core Values Section */}
            <section className="ebrium-about-values">
                <div className="container">
                    <div className="ebrium-about-section-header">
                        <h2 className="ebrium-about-section-title">Our Core Values</h2>
                        <p className="ebrium-about-section-subtitle">The principles that guide everything we do</p>
                    </div>

                    <div className="ebrium-about-values-grid">
                        <div className="ebrium-about-value-card">
                            <div className="ebrium-about-value-icon">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>
                            <h3>Innovation</h3>
                            <p>We constantly push boundaries to find creative solutions that drive your business forward in the digital age.</p>
                        </div>

                        <div className="ebrium-about-value-card">
                            <div className="ebrium-about-value-icon">
                                <FontAwesomeIcon icon={faHandshake} />
                            </div>
                            <h3>Integrity</h3>
                            <p>We believe in transparency, honesty, and ethical practices in all our business relationships and development processes.</p>
                        </div>

                        <div className="ebrium-about-value-card">
                            <div className="ebrium-about-value-icon">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <h3>Excellence</h3>
                            <p>We are committed to delivering high-quality solutions that exceed expectations and set new industry standards.</p>
                        </div>

                        <div className="ebrium-about-value-card">
                            <div className="ebrium-about-value-icon">
                                <FontAwesomeIcon icon={faUserShield} />
                            </div>
                            <h3>Client Focus</h3>
                            <p>We prioritize understanding your unique needs to create tailored solutions that deliver real value and measurable results.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Journey Section */}
            <section className="ebrium-about-timeline">
                <div className="container">
                    <div className="ebrium-about-section-header">
                        <h2 className="ebrium-about-section-title">Our Journey</h2>
                        <p className="ebrium-about-section-subtitle">Milestones that shaped our growth</p>
                    </div>

                    <div className="ebrium-about-timeline-container">
                        <div className="ebrium-about-timeline-line"></div>

                        <div className="ebrium-about-timeline-item">
                            <div className="ebrium-about-timeline-dot"></div>
                            <div className="ebrium-about-timeline-content">
                                <div className="ebrium-about-timeline-year">2018</div>
                                <h3>Founded</h3>
                                <p>Ebrium was established with a vision to provide innovative digital solutions that bridge the gap between technology and business success.</p>
                            </div>
                        </div>

                        <div className="ebrium-about-timeline-item">
                            <div className="ebrium-about-timeline-dot"></div>
                            <div className="ebrium-about-timeline-content">
                                <div className="ebrium-about-timeline-year">2019</div>
                                <h3>First Major Client</h3>
                                <p>Secured our first enterprise client and expanded our team to 10 members, establishing our reputation for quality and reliability.</p>
                            </div>
                        </div>

                        <div className="ebrium-about-timeline-item">
                            <div className="ebrium-about-timeline-dot"></div>
                            <div className="ebrium-about-timeline-content">
                                <div className="ebrium-about-timeline-year">2020</div>
                                <h3>Global Expansion</h3>
                                <p>Started serving international clients across 12+ countries and implemented remote-first work culture to build a distributed team of experts.</p>
                            </div>
                        </div>

                        <div className="ebrium-about-timeline-item">
                            <div className="ebrium-about-timeline-dot"></div>
                            <div className="ebrium-about-timeline-content">
                                <div className="ebrium-about-timeline-year">2022</div>
                                <h3>Service Expansion</h3>
                                <p>Added AI and Machine Learning solutions to our service offerings, becoming a full-service digital transformation partner.</p>
                            </div>
                        </div>

                        <div className="ebrium-about-timeline-item">
                            <div className="ebrium-about-timeline-dot"></div>
                            <div className="ebrium-about-timeline-content">
                                <div className="ebrium-about-timeline-year">2024</div>
                                <h3>Leading Innovation</h3>
                                <p>Growing team of 15+ experts dedicated to delivering cutting-edge digital solutions and driving business growth worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Meet Our Team Section */}
            <section id="team" className="ebrium-about-team">
                <div className="container">
                    <div className="ebrium-about-section-header">
                        <h2 className="ebrium-about-section-title">Meet Our Team</h2>
                        <p className="ebrium-about-section-subtitle">The talented professionals behind our success</p>
                    </div>

                    <div className="ebrium-about-team-grid">
                        <div className="ebrium-about-team-card">
                            <div className="ebrium-about-team-image">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="Ibrahim Akram - CEO & Founder" />
                            </div>
                            <h3>Ibrahim Akram</h3>
                            <p className="ebrium-about-team-position">CEO & Founder</p>
                            <p className="ebrium-about-team-bio">With expertise in full-stack development and business strategy, Ibrahim founded Ebrium to bridge the gap between technology and business success.</p>
                        </div>

                        <div className="ebrium-about-team-card">
                            <div className="ebrium-about-team-image">
                                <img src={avatar} alt="Sarah Johnson - CTO" />
                            </div>
                            <h3>Sarah Johnson</h3>
                            <p className="ebrium-about-team-position">CTO</p>
                            <p className="ebrium-about-team-bio">Sarah brings deep technical knowledge and strategic thinking to ensure we stay at the cutting edge of technology and innovation.</p>
                        </div>

                        <div className="ebrium-about-team-card">
                            <div className="ebrium-about-team-image">
                                <img src={avatar} alt="Emily Davis - Lead Designer" />
                            </div>
                            <h3>Emily Davis</h3>
                            <p className="ebrium-about-team-position">Lead Designer</p>
                            <p className="ebrium-about-team-bio">Emily's creative vision and user-centered approach helps create engaging and intuitive digital experiences that users love.</p>
                        </div>

                        <div className="ebrium-about-team-card">
                            <div className="ebrium-about-team-image">
                                <img src={avatar} alt="Michael Chen - Lead Developer" />
                            </div>
                            <h3>Michael Chen</h3>
                            <p className="ebrium-about-team-position">Lead Developer</p>
                            <p className="ebrium-about-team-bio">Michael's technical expertise and problem-solving skills ensure our solutions are robust, scalable, and built for the future.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Hire Me Section - Fiverr & Upwork */}
            <section className="hire-me-section">
                <div className="container">
                    <div className="hire-me-content">
                        <h2>Ready to Partner With Us?</h2>
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

            {/* Contact CTA */}
            <section className="ebrium-about-cta">
                <div className="container">
                    <div className="ebrium-about-cta-content">
                        <h2>Ready to Work With Us?</h2>
                        <p>Let's discuss how we can help you achieve your business goals through innovative digital solutions.</p>
                        <a href="/contact" className="ebrium-about-cta-button">
                            Contact Us
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
