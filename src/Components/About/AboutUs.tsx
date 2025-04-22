import React from 'react';
import './aboutus.css';
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
    faCode
} from '@fortawesome/free-solid-svg-icons';

// Placeholder images - replace with actual team member images
const teamMember1 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
const teamMember2 = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
const teamMember3 = "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";
const teamMember4 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80";

// Placeholder for office image
const officeImage = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80";

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <Navbar />
            
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1>About Ebrium</h1>
                        <p className="about-tagline">Transforming Ideas Into Digital Excellence Since 2018</p>
                        <div className="about-divider"></div>
                    </div>
                </div>
                <div className="about-shape about-shape-1"></div>
                <div className="about-shape about-shape-2"></div>
            </section>
            
            {/* Mission Section */}
            <section className="about-mission">
                <div className="container">
                    <div className="about-mission-content">
                        <div className="about-mission-text">
                            <h2>Our Mission</h2>
                            <p>At Ebrium, we're on a mission to empower businesses through innovative digital solutions that drive growth and create lasting value. We combine cutting-edge technology with strategic thinking to transform challenges into opportunities.</p>
                            <p>We believe in building partnerships, not just projects. Our client-first approach ensures that we deliver solutions that are tailored to your unique needs and goals.</p>
                        </div>
                        <div className="about-mission-image">
                            <img src={officeImage} alt="Ebrium Office" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Stats Section */}
            <section className="about-stats">
                <div className="container">
                    <div className="about-stats-grid">
                        <div className="about-stat-card">
                            <div className="about-stat-icon">
                                <FontAwesomeIcon icon={faTrophy} />
                            </div>
                            <div className="about-stat-number">5+</div>
                            <div className="about-stat-text">Years Experience</div>
                        </div>
                        
                        <div className="about-stat-card">
                            <div className="about-stat-icon">
                                <FontAwesomeIcon icon={faCode} />
                            </div>
                            <div className="about-stat-number">100+</div>
                            <div className="about-stat-text">Projects Completed</div>
                        </div>
                        
                        <div className="about-stat-card">
                            <div className="about-stat-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <div className="about-stat-number">50+</div>
                            <div className="about-stat-text">Happy Clients</div>
                        </div>
                        
                        <div className="about-stat-card">
                            <div className="about-stat-icon">
                                <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <div className="about-stat-number">12+</div>
                            <div className="about-stat-text">Countries Served</div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    <div className="about-section-header">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    
                    <div className="about-values-grid">
                        <div className="about-value-card">
                            <div className="about-value-icon">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>
                            <h3>Innovation</h3>
                            <p>We constantly push boundaries to find creative solutions that drive your business forward.</p>
                        </div>
                        
                        <div className="about-value-card">
                            <div className="about-value-icon">
                                <FontAwesomeIcon icon={faHandshake} />
                            </div>
                            <h3>Integrity</h3>
                            <p>We believe in transparency, honesty, and ethical practices in all our business relationships.</p>
                        </div>
                        
                        <div className="about-value-card">
                            <div className="about-value-icon">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <h3>Excellence</h3>
                            <p>We are committed to delivering high-quality solutions that exceed expectations.</p>
                        </div>
                        
                        <div className="about-value-card">
                            <div className="about-value-icon">
                                <FontAwesomeIcon icon={faUserShield} />
                            </div>
                            <h3>Client Focus</h3>
                            <p>We prioritize understanding your unique needs to create tailored solutions that deliver real value.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Timeline Section */}
            <section className="about-timeline">
                <div className="container">
                    <div className="about-section-header">
                        <h2>Our Journey</h2>
                        <p>Milestones that shaped our growth</p>
                    </div>
                    
                    <div className="about-timeline-container">
                        <div className="about-timeline-line"></div>
                        
                        <div className="about-timeline-item">
                            <div className="about-timeline-dot"></div>
                            <div className="about-timeline-content">
                                <div className="about-timeline-year">2018</div>
                                <h3>Founded</h3>
                                <p>Ebrium was established with a vision to provide innovative digital solutions.</p>
                            </div>
                        </div>
                        
                        <div className="about-timeline-item">
                            <div className="about-timeline-dot"></div>
                            <div className="about-timeline-content">
                                <div className="about-timeline-year">2019</div>
                                <h3>First Major Client</h3>
                                <p>Secured our first enterprise client and expanded our team to 10 members.</p>
                            </div>
                        </div>
                        
                        <div className="about-timeline-item">
                            <div className="about-timeline-dot"></div>
                            <div className="about-timeline-content">
                                <div className="about-timeline-year">2020</div>
                                <h3>Global Expansion</h3>
                                <p>Started serving international clients and implemented remote-first work culture.</p>
                            </div>
                        </div>
                        
                        <div className="about-timeline-item">
                            <div className="about-timeline-dot"></div>
                            <div className="about-timeline-content">
                                <div className="about-timeline-year">2022</div>
                                <h3>Service Expansion</h3>
                                <p>Added AI and Machine Learning solutions to our service offerings.</p>
                            </div>
                        </div>
                        
                        <div className="about-timeline-item">
                            <div className="about-timeline-dot"></div>
                            <div className="about-timeline-content">
                                <div className="about-timeline-year">2023</div>
                                <h3>Today</h3>
                                <p>Growing team of experts dedicated to delivering cutting-edge digital solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Team Section */}
            <section className="about-team">
                <div className="container">
                    <div className="about-section-header">
                        <h2>Meet Our Team</h2>
                        <p>The talented people behind our success</p>
                    </div>
                    
                    <div className="about-team-grid">
                        <div className="about-team-card">
                            <div className="about-team-image">
                                <img src={teamMember1} alt="John Smith" />
                            </div>
                            <h3>John Smith</h3>
                            <p className="about-team-position">CEO & Founder</p>
                            <p className="about-team-bio">With over 15 years of experience in software development and business management, John leads our company with vision and expertise.</p>
                        </div>
                        
                        <div className="about-team-card">
                            <div className="about-team-image">
                                <img src={teamMember2} alt="Sarah Johnson" />
                            </div>
                            <h3>Sarah Johnson</h3>
                            <p className="about-team-position">CTO</p>
                            <p className="about-team-bio">Sarah brings deep technical knowledge and strategic thinking to ensure we stay at the cutting edge of technology.</p>
                        </div>
                        
                        <div className="about-team-card">
                            <div className="about-team-image">
                                <img src={teamMember3} alt="Emily Davis" />
                            </div>
                            <h3>Emily Davis</h3>
                            <p className="about-team-position">Lead Designer</p>
                            <p className="about-team-bio">Emily's creative vision and user-centered approach helps create engaging and intuitive digital experiences.</p>
                        </div>
                        
                        <div className="about-team-card">
                            <div className="about-team-image">
                                <img src={teamMember4} alt="Michael Chen" />
                            </div>
                            <h3>Michael Chen</h3>
                            <p className="about-team-position">Lead Developer</p>
                            <p className="about-team-bio">Michael's technical expertise and problem-solving skills ensure our solutions are robust, scalable, and efficient.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Contact CTA */}
            <section className="about-contact-cta">
                <div className="container">
                    <div className="about-cta-content">
                        <h2>Ready to Work With Us?</h2>
                        <p>Let's discuss how we can help you achieve your business goals through innovative digital solutions.</p>
                        <a href="/contact" className="about-cta-button">Contact Us</a>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default AboutUs;
