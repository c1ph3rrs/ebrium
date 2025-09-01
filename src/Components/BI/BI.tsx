import React, { useState } from 'react';
import './bi.css';
import mainLogo from '../../assets/main_logo.png';
import avatar from '../../assets/avatar.jpg';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartLine,
    faDatabase,
    faChartBar,
    faFileAlt,
    faUsers,
    faLightbulb,
    faArrowRight,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const BI: React.FC = () => {

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    }

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* Enhanced Hero Section */}
            <section className="ebrium-bi-hero">
                <div className="ebrium-bi-hero-bg"></div>
                <div className="ebrium-bi-hero-overlay"></div>
                <div className="container">
                    <div className="ebrium-bi-hero-content">
                        <div className="ebrium-bi-hero-text">
                            <span className="ebrium-bi-hero-badge">Business Intelligence</span>
                            <h1 className="ebrium-bi-hero-title">Transform Data Into <span className="ebrium-bi-highlight">Strategic Insights</span></h1>
                            <p className="ebrium-bi-hero-description">
                                Unlock the power of your data with advanced business intelligence solutions. From interactive dashboards to predictive analytics, we help you make smarter business decisions.
                            </p>
                            <div className="ebrium-bi-hero-buttons">
                                <a href="#get-quote" className="ebrium-bi-primary-btn">
                                    Get Started
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                                <a href="#services" className="ebrium-bi-secondary-btn">
                                    Explore Services
                                </a>
                            </div>
                        </div>
                        <div className="ebrium-bi-hero-visual">
                            <div className="ebrium-bi-hero-shapes">
                                <div className="ebrium-bi-shape ebrium-bi-shape-1"></div>
                                <div className="ebrium-bi-shape ebrium-bi-shape-2"></div>
                                <div className="ebrium-bi-shape ebrium-bi-shape-3"></div>
                            </div>
                            <div className="ebrium-bi-hero-cards">
                                <div className="ebrium-bi-hero-card">
                                    <div className="ebrium-bi-hero-card-icon">
                                        <FontAwesomeIcon icon={faChartLine} />
                                    </div>
                                    <h3>Analytics</h3>
                                </div>
                                <div className="ebrium-bi-hero-card">
                                    <div className="ebrium-bi-hero-card-icon">
                                        <FontAwesomeIcon icon={faDatabase} />
                                    </div>
                                    <h3>Data Warehousing</h3>
                                </div>
                                <div className="ebrium-bi-hero-card">
                                    <div className="ebrium-bi-hero-card-icon">
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </div>
                                    <h3>Dashboards</h3>
                                </div>
                                <div className="ebrium-bi-hero-card">
                                    <div className="ebrium-bi-hero-card-icon">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                    </div>
                                    <h3>Reporting</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ebrium-bi-scroll-indicator">
                        <span>Scroll to explore</span>
                        <FontAwesomeIcon icon={faChevronDown} bounce />
                    </div>
                </div>
            </section>

            <section id="services" className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our BI Solutions</h2>
                        <p className="section-subtitle">Comprehensive Business Intelligence Services</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-line-chart'></i>
                            </div>
                            <h3>Data Analytics</h3>
                            <p>Advanced analytics solutions that uncover hidden patterns and provide actionable business insights from your data.</p>
                            <a href="#analytics" className="service-link">Learn More <span>→</span></a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-bar-chart-alt-2'></i>
                            </div>
                            <h3>Interactive Dashboards</h3>
                            <p>Custom dashboards that provide real-time visibility into your key performance indicators and business metrics.</p>
                            <a href="#dashboards" className="service-link">Learn More <span>→</span></a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-data'></i>
                            </div>
                            <h3>Data Warehousing</h3>
                            <p>Scalable data warehouse solutions that consolidate your data from multiple sources for unified analysis.</p>
                            <a href="#warehousing" className="service-link">Learn More <span>→</span></a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-file'></i>
                            </div>
                            <h3>Automated Reporting</h3>
                            <p>Automated report generation and distribution systems that keep stakeholders informed with timely insights.</p>
                            <a href="#reporting" className="service-link">Learn More <span>→</span></a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-trending-up'></i>
                            </div>
                            <h3>Predictive Analytics</h3>
                            <p>Forecast future trends and outcomes using advanced machine learning algorithms and statistical models.</p>
                            <a href="#predictive" className="service-link">Learn More <span>→</span></a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-shield-check'></i>
                            </div>
                            <h3>Data Governance</h3>
                            <p>Implement robust data governance frameworks to ensure data quality, security, and compliance.</p>
                            <a href="#governance" className="service-link">Learn More <span>→</span></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="portfolio-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Success Stories</h2>
                        <p className="section-subtitle">Real Results from Our BI Solutions</p>
                    </div>

                    <div className="portfolio-grid">
                        <div className="portfolio-card">
                            <div className="portfolio-image">
                                <img src={mainLogo} alt="Retail Analytics Dashboard" />
                            </div>
                            <div className="portfolio-content">
                                <h3>Retail Analytics Dashboard</h3>
                                <p>Built a comprehensive dashboard that increased sales by 25% through data-driven insights and inventory optimization.</p>
                                <div className="portfolio-tags">
                                    <span>Tableau</span>
                                    <span>SQL</span>
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-card">
                            <div className="portfolio-image">
                                <img src={mainLogo} alt="Financial Risk Assessment" />
                            </div>
                            <div className="portfolio-content">
                                <h3>Financial Risk Assessment</h3>
                                <p>Developed predictive models that reduced loan default rates by 40% through advanced risk analytics.</p>
                                <div className="portfolio-tags">
                                    <span>Python</span>
                                    <span>Machine Learning</span>
                                    <span>Power BI</span>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-card">
                            <div className="portfolio-image">
                                <img src={mainLogo} alt="Healthcare Data Platform" />
                            </div>
                            <div className="portfolio-content">
                                <h3>Healthcare Data Platform</h3>
                                <p>Created a centralized data platform that improved patient outcomes through predictive healthcare analytics.</p>
                                <div className="portfolio-tags">
                                    <span>Snowflake</span>
                                    <span>Tableau</span>
                                    <span>HL7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Client Testimonials</h2>
                        <p className="section-subtitle">What Our Clients Say About Our BI Solutions</p>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Ebrium's BI dashboard transformed how we view our business data. We've seen a 30% improvement in decision-making speed and accuracy. The insights we get are invaluable."</p>
                            </div>
                            <div className="testimonial-author">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/e10ef734fc09e853740b3e7b880f3e45-1627975564724/00662766-0750-4f3d-9e98-bc68c2657fb5.jpg" alt="Sarah Johnson" />
                                <div className="author-details">
                                    <h4>Sarah Johnson</h4>
                                    <p>CEO, TechStart Solutions</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"The predictive analytics solution helped us optimize our supply chain and reduce costs by 22%. Their expertise in data warehousing is exceptional."</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={avatar} alt="Michael Chen" />
                                <div className="author-details">
                                    <h4>Michael Chen</h4>
                                    <p>CFO, Global Logistics Corp</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Ebrium's BI implementation gave us real-time visibility into our operations. The automated reporting system saves us 15 hours per week."</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={avatar} alt="Emily Rodriguez" />
                                <div className="author-details">
                                    <h4>Emily Rodriguez</h4>
                                    <p>Operations Director, RetailMax</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Our BI Services</h2>
                        <p className="section-subtitle">What Sets Our Business Intelligence Solutions Apart</p>
                    </div>

                    <div className="why-choose-grid">
                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <h3>Expert Team</h3>
                            <p>Our BI specialists have extensive experience with enterprise data platforms and advanced analytics.</p>
                        </div>

                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>
                            <h3>Data-Driven Approach</h3>
                            <p>We focus on extracting meaningful insights that drive real business value and ROI.</p>
                        </div>

                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-customize'></i>
                            </div>
                            <h3>Custom Solutions</h3>
                            <p>Every BI solution is tailored to your specific business needs and industry requirements.</p>
                        </div>

                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Fast Implementation</h3>
                            <p>Our agile methodology ensures quick deployment without compromising on quality or functionality.</p>
                        </div>

                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-support'></i>
                            </div>
                            <h3>Ongoing Support</h3>
                            <p>We provide continuous maintenance and updates to keep your BI systems running optimally.</p>
                        </div>

                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-shield-check'></i>
                            </div>
                            <h3>Data Security</h3>
                            <p>Enterprise-grade security measures protect your sensitive business data and ensure compliance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section bi-process">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our BI Implementation Process</h2>
                        <p className="section-subtitle">Systematic Approach to BI Success</p>
                    </div>

                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <div className="process-content">
                                <h3>Data Assessment</h3>
                                <p>We analyze your current data landscape, identify key metrics, and assess data quality and integration needs.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">2</div>
                            <div className="process-content">
                                <h3>Solution Design</h3>
                                <p>Our team designs a comprehensive BI architecture tailored to your business objectives and technical requirements.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">3</div>
                            <div className="process-content">
                                <h3>Development & Integration</h3>
                                <p>We build and integrate your BI solution, ensuring seamless data flow and optimal performance across all systems.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">4</div>
                            <div className="process-content">
                                <h3>Training & Deployment</h3>
                                <p>We provide comprehensive training and deploy your solution with ongoing support and monitoring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hire Me Section - Fiverr & Upwork */}
            <section className="hire-me-section">
                <div className="container">
                    <div className="hire-me-content">
                        <h2>Ready to Transform Your Data?</h2>
                        <p>Get expert business intelligence solutions from a trusted professional. Available on leading freelance platforms.</p>

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
                        <img src={mainLogo} alt="Business Intelligence Solutions" />
                    </div>
                </div>
            </section>

            {/* FAQ and Contact Form */}
            <section id="get-quote" className="faq-contact-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">BI Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-contact-container">
                        <div className="faq-section">
                            <div className="accordion">
                                <div className="accordion-item">
                                    <div
                                        className={`accordion-header ${activeFaq === 0 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(0)}
                                    >
                                        <h3>What types of data can be analyzed in a BI system?</h3>
                                        <i className={`bx ${activeFaq === 0 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 0 ? 'active' : ''}`}>
                                        <p>BI systems can analyze virtually any type of business data including sales figures, customer information, operational metrics, financial data, inventory levels, and external market data. Our solutions can integrate data from databases, spreadsheets, cloud services, and IoT devices.</p>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div
                                        className={`accordion-header ${activeFaq === 1 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(1)}
                                    >
                                        <h3>How long does it take to implement a BI solution?</h3>
                                        <i className={`bx ${activeFaq === 1 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 1 ? 'active' : ''}`}>
                                        <p>Implementation timelines vary based on complexity and scope. A basic dashboard might take 4-6 weeks, while a comprehensive enterprise BI solution could take 3-6 months. We provide detailed project timelines and milestones during our initial consultation.</p>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div
                                        className={`accordion-header ${activeFaq === 2 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(2)}
                                    >
                                        <h3>Do you provide training for our team?</h3>
                                        <i className={`bx ${activeFaq === 2 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 2 ? 'active' : ''}`}>
                                        <p>Yes, comprehensive training is included in all our BI implementations. We provide hands-on training sessions, documentation, and ongoing support to ensure your team can effectively use and maintain the BI system. Training can be customized based on user roles and technical expertise.</p>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div
                                        className={`accordion-header ${activeFaq === 3 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(3)}
                                    >
                                        <h3>What are the costs associated with BI implementation?</h3>
                                        <i className={`bx ${activeFaq === 3 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 3 ? 'active' : ''}`}>
                                        <p>Costs vary depending on the scope and complexity of your requirements. Basic dashboards start from $5,000, while comprehensive enterprise solutions range from $25,000 to $150,000+. We provide detailed quotes based on your specific needs and can work within various budget constraints.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="quick-contact-section">
                            <h2>Get Your BI Quote</h2>
                            <p>Ready to unlock the power of your data? Let's discuss your business intelligence needs.</p>
                            <form className="quick-contact-form">
                                <div className="form-group">
                                    <input type="text" id="bi-name" placeholder="Full Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="bi-email" placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" id="bi-phone" placeholder="Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <select id="bi-service" required>
                                        <option value="">Select BI Service</option>
                                        <option value="analytics">Data Analytics</option>
                                        <option value="dashboards">Interactive Dashboards</option>
                                        <option value="warehousing">Data Warehousing</option>
                                        <option value="reporting">Automated Reporting</option>
                                        <option value="predictive">Predictive Analytics</option>
                                        <option value="consulting">BI Consulting</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea id="bi-message" placeholder="Tell us about your data needs" rows={3} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Get Free Consultation</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BI;
                  