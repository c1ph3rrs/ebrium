import './cloud.css';
import mainLogo from '../../assets/main_logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cloud = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('aws');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const toggleFaq = (index: number) => {
        if (activeFaq === index) {
            setActiveFaq(null);
        } else {
            setActiveFaq(index);
        }
    }

    return (
        <div className="page-wrapper">
            {/* Navbar */}
            <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
                <a href="/" className="nav__logo">
                    <img src={mainLogo} alt="Ebrium Logo" />
                </a>
                
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div className={`nav__menu ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                    <ul className="nav__menu-list grid">
                        <li className="nav__menu-item">
                            <div className="nav__menu-link">
                                <a href="/#services">Services</a>
                            </div>
                            <ul className="nav__dropdown">
                                <li className="nav__dropdown-item">
                                    <Link to="/mobile-app-development">Mobile App Development</Link>
                                </li>
                                <li className="nav__dropdown-item">
                                    <Link to="/web">Web Development</Link>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="/#ai-ml">AI & Machine Learning</a>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="/#cloud">Cloud Solutions</a>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="/#bi">Business Intelligence</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__menu-item">
                            <a href="/#solutions">Solutions</a>
                        </li>
                        <li className="nav__menu-item">
                            <a href="/#about">About Us</a>
                        </li>
                        <li className="nav__menu-item">
                            <a href="/#contact">Contact</a>
                        </li>
                        <li className="nav__menu-item consultation">
                            <a href="#get-quote">Get Free Consultation</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="cloud-hero">
                <div className="container">
                    <div className="cloud-hero-content">
                        <h1>Cloud Computing Services</h1>
                        <p>Transform your business with scalable, secure, and cost-effective cloud solutions</p>
                        <div className="cta-buttons">
                            <a href="#get-quote" className="btn btn-primary">Get a Quote</a>
                            <a href="#services" className="btn btn-secondary">Explore Services</a>
                        </div>
                    </div>
                </div>
                <div className="cloud-particles">
                    <div className="particle particle1"></div>
                    <div className="particle particle2"></div>
                    <div className="particle particle3"></div>
                    <div className="particle particle4"></div>
                </div>
            </section>

            {/* Our Cloud Solutions Section */}
            <section id="services" className="cloud-solutions">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Cloud Solutions</h2>
                        <p className="section-subtitle">Comprehensive services for every stage of your cloud journey</p>
                    </div>

                    <div className="solutions-grid">
                        <div className="solution-card">
                            <div className="solution-icon">
                                <i className='bx bx-cloud-upload'></i>
                            </div>
                            <h3>Cloud Migration</h3>
                            <p>Seamlessly transition your infrastructure, applications, and data to the cloud with minimal disruption to your operations.</p>
                            <ul className="solution-features">
                                <li>Assessment and planning</li>
                                <li>Data migration strategies</li>
                                <li>Application modernization</li>
                                <li>Post-migration optimization</li>
                            </ul>
                        </div>

                        <div className="solution-card">
                            <div className="solution-icon">
                                <i className='bx bx-network-chart'></i>
                            </div>
                            <h3>Hybrid & Multi-Cloud Solutions</h3>
                            <p>Build flexible environments that leverage the best of on-premises, private cloud, and public cloud infrastructures.</p>
                            <ul className="solution-features">
                                <li>Cross-platform integration</li>
                                <li>Workload distribution</li>
                                <li>Unified management</li>
                                <li>Cost optimization</li>
                            </ul>
                        </div>

                        <div className="solution-card">
                            <div className="solution-icon">
                                <i className='bx bx-cog'></i>
                            </div>
                            <h3>Cloud Management</h3>
                            <p>Proactively monitor, maintain, and optimize your cloud resources to ensure peak performance and cost efficiency.</p>
                            <ul className="solution-features">
                                <li>Performance monitoring</li>
                                <li>Security management</li>
                                <li>Cost control and analysis</li>
                                <li>Continuous optimization</li>
                            </ul>
                        </div>

                        <div className="solution-card">
                            <div className="solution-icon">
                                <i className='bx bx-code-block'></i>
                            </div>
                            <h3>DevOps Solutions</h3>
                            <p>Implement CI/CD pipelines and automation to streamline development, testing, and deployment processes.</p>
                            <ul className="solution-features">
                                <li>CI/CD implementation</li>
                                <li>Infrastructure as Code</li>
                                <li>Containerization</li>
                                <li>Automation frameworks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Platforms Section */}
            <section className="platforms-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Key Platforms</h2>
                        <p className="section-subtitle">We specialize in leading cloud platforms to deliver optimal solutions</p>
                    </div>

                    <div className="platforms-tabs">
                        <div className="tabs-nav">
                            <button 
                                className={`tab-btn ${activeTab === 'aws' ? 'active' : ''}`}
                                onClick={() => setActiveTab('aws')}
                            >
                                <i className='bx bxl-aws'></i> Amazon Web Services
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'azure' ? 'active' : ''}`}
                                onClick={() => setActiveTab('azure')}
                            >
                                <i className='bx bxl-microsoft'></i> Microsoft Azure
                            </button>
                        </div>

                        <div className="tabs-content">
                            <div className={`tab-pane ${activeTab === 'aws' ? 'active' : ''}`}>
                                <div className="platform-services">
                                    <div className="platform-service">
                                        <div className="service-icon">
                                            <i className='bx bx-server'></i>
                                        </div>
                                        <h3>Amazon EC2</h3>
                                        <p>Elastic compute resources to scale applications on demand.</p>
                                    </div>
                                    <div className="platform-service">
                                        <div className="service-icon">
                                            <i className='bx bx-data'></i>
                                        </div>
                                        <h3>Amazon S3</h3>
                                        <p>Secure and durable storage for any type of data.</p>
                                    </div>
                                    <div className="platform-service">
                                        <div className="service-icon">
                                            <i className='bx bx-database'></i>
                                        </div>
                                        <h3>Amazon RDS</h3>
                                        <p>Managed relational database service for high-performance applications.</p>
                                    </div>
                                    <div className="platform-service">
                                        <div className="service-icon">
                                            <i className='bx bx-globe'></i>
                                        </div>
                                        <h3>CloudFront</h3>
                                        <p>Global content delivery network for faster data access.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane ${activeTab === 'azure' ? 'active' : ''}`}>
                                <div className="platform-services">
                                    <div className="platform-service">
                                        <div className="service-icon">
                                            <i className='bx bx-cloud'></i>
                                        </div>
                                        <h3>Microsoft Azure</h3>
                                        <p>Scalable infrastructure, AI solutions, and analytics tools.</p>
                                    </div>
                                    <div className="platform-service">
                                        <div className="service-icon">
                                            <i className='bx bx-group'></i>
                                        </div>
                                        <h3>Microsoft Teams</h3>
                                        <p>Cloud-based communication and collaboration for modern businesses.</p>
                                    </div>
                                    <div className="platform-service">
                                        <div className="service-icon">
                                            <i className='bx bx-cloud-upload'></i>
                                        </div>
                                        <h3>OneDrive</h3>
                                        <p>Secure cloud storage for seamless file sharing and backups.</p>
                                    </div>
                                    <div className="platform-service">
                                        <div className="service-icon">
                                            <i className='bx bx-pie-chart-alt-2'></i>
                                        </div>
                                        <h3>Power BI</h3>
                                        <p>Cloud-powered business intelligence for actionable insights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Benefits of Cloud Solutions</h2>
                        <p className="section-subtitle">Powerful advantages that drive business growth and innovation</p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className='bx bx-dollar-circle'></i>
                            </div>
                            <h3>Cost Savings</h3>
                            <p>Reduce IT expenses significantly with flexible pay-as-you-go models, eliminating the need for costly hardware and maintenance.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className='bx bx-expand-horizontal'></i>
                            </div>
                            <h3>Flexibility</h3>
                            <p>Scale resources up or down based on demand, ensuring optimal performance without over-provisioning.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className='bx bx-group'></i>
                            </div>
                            <h3>Collaboration</h3>
                            <p>Enable seamless teamwork with cloud-based tools that allow real-time document sharing and editing from anywhere.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className='bx bx-shield-quarter'></i>
                            </div>
                            <h3>Data Security</h3>
                            <p>Implement advanced security measures and compliance controls to protect your sensitive information.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className='bx bx-revision'></i>
                            </div>
                            <h3>Disaster Recovery</h3>
                            <p>Ensure business continuity with automated backup solutions and rapid recovery capabilities.</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className='bx bx-globe'></i>
                            </div>
                            <h3>Global Access</h3>
                            <p>Access your data and applications from anywhere in the world with an internet connection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Deliver Results */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">How We Deliver Results</h2>
                        <p className="section-subtitle">Our proven process for successful cloud transformation</p>
                    </div>
                    
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <div className="process-content">
                                <h3>Assessment</h3>
                                <p>Evaluate current systems and identify cloud opportunities.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <div className="process-content">
                                <h3>Planning</h3>
                                <p>Design tailored solutions for optimal cloud adoption.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <div className="process-content">
                                <h3>Migration</h3>
                                <p>Move data and applications with minimal disruption.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <div className="process-content">
                                <h3>Optimization</h3>
                                <p>Ensure peak performance with continuous monitoring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-subtitle">What sets our cloud services apart</p>
                    </div>
                    
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className='bx bx-badge-check'></i>
                            </div>
                            <h3>Certified Expertise</h3>
                            <p>AWS and Microsoft-certified cloud specialists.</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className='bx bx-package'></i>
                            </div>
                            <h3>End-to-End</h3>
                            <p>We handle every aspect of cloud adoption.</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className='bx bx-chip'></i>
                            </div>
                            <h3>Cutting-Edge Tech</h3>
                            <p>Expertise with Amazon & Microsoft products.</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className='bx bx-expand-alt'></i>
                            </div>
                            <h3>Scalable Solutions</h3>
                            <p>Tailored solutions for startups, & enterprises.</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className='bx bx-lock-alt'></i>
                            </div>
                            <h3>Security First</h3>
                            <p>Cloud security and disaster recovery solutions.</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className='bx bx-line-chart'></i>
                            </div>
                            <h3>Cost Efficiency</h3>
                            <p>Transparent pricing with measurable ROI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Cloud Solutions FAQs</h2>
                        <p className="section-subtitle">Answers to commonly asked questions</p>
                    </div>
                    
                    <div className="faq-container">
                        <div className="faq-list">
                            <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                                <div className="faq-question">
                                    <h3>What is the difference between AWS and Microsoft Azure?</h3>
                                    <div className="faq-icon">
                                        <i className={`bx ${activeFaq === 0 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                </div>
                                <div className={`faq-answer ${activeFaq === 0 ? 'active' : ''}`}>
                                    <p>AWS and Microsoft Azure are leading cloud platforms with distinct features. AWS offers a broader range of services and is known for scalability, while Azure integrates seamlessly with Microsoft products and is ideal for businesses already using Windows-based tools.</p>
                                </div>
                            </div>
                            
                            <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                                <div className="faq-question">
                                    <h3>How secure is cloud storage for sensitive data?</h3>
                                    <div className="faq-icon">
                                        <i className={`bx ${activeFaq === 1 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                </div>
                                <div className={`faq-answer ${activeFaq === 1 ? 'active' : ''}`}>
                                    <p>Cloud platforms offer robust security features including encryption, access controls, and compliance certifications. When properly configured, cloud storage is often more secure than on-premises solutions as providers invest heavily in security infrastructure and regular updates.</p>
                                </div>
                            </div>
                            
                            <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                                <div className="faq-question">
                                    <h3>Can you integrate cloud solutions with our existing IT setup?</h3>
                                    <div className="faq-icon">
                                        <i className={`bx ${activeFaq === 2 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                </div>
                                <div className={`faq-answer ${activeFaq === 2 ? 'active' : ''}`}>
                                    <p>Yes, we specialize in hybrid solutions that integrate cloud services with your existing infrastructure. We'll assess your current environment and create a seamless integration plan that allows you to leverage cloud benefits while maintaining your current investments.</p>
                                </div>
                            </div>
                            
                            <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                                <div className="faq-question">
                                    <h3>How long does a typical cloud migration take?</h3>
                                    <div className="faq-icon">
                                        <i className={`bx ${activeFaq === 3 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                </div>
                                <div className={`faq-answer ${activeFaq === 3 ? 'active' : ''}`}>
                                    <p>The timeline varies based on your infrastructure's complexity, data volume, and specific requirements. Small to medium migrations typically take 1-3 months, while enterprise-level migrations might take 6-12 months. We provide detailed timeline estimates after our initial assessment.</p>
                                </div>
                            </div>
                            
                            <div className={`faq-item ${activeFaq === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
                                <div className="faq-question">
                                    <h3>What support do you offer post-migration?</h3>
                                    <div className="faq-icon">
                                        <i className={`bx ${activeFaq === 4 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                </div>
                                <div className={`faq-answer ${activeFaq === 4 ? 'active' : ''}`}>
                                    <p>We provide comprehensive post-migration support including monitoring, optimization, troubleshooting, and regular maintenance. Our managed cloud services ensure your environment remains secure, performant, and cost-efficient long after the initial migration.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-form-wrapper">
                            <h3>Have more questions?</h3>
                            <p>Contact our cloud experts for personalized assistance</p>
                            <form className="contact-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Question" rows={4} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <div className="footer-logo">
                                <img src={mainLogo} alt="Ebrium Logo" />
                            </div>
                            <p className="footer-description">
                                Delivering innovative cloud solutions that help businesses thrive in the digital era.
                            </p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/engr-ibrahim-akram-6819081a2/" className="social-link"><i className='bx bxl-linkedin'></i></a>
                                <a href="https://x.com/ib__mughal" className="social-link"><i className='bx bxl-twitter'></i></a>
                                <a href="https://www.facebook.com/profile.php?id=61571213197093" className="social-link"><i className='bx bxl-facebook'></i></a>
                                <a href="https://www.instagram.com/ebriumcoders/" className="social-link"><i className='bx bxl-instagram'></i></a>
                            </div>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Services</h3>
                            <ul className="footer-links">
                                <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                                <li><Link to="/web">Web Development</Link></li>
                                <li><a href="/#ai-ml">AI & Machine Learning</a></li>
                                <li><a href="/#cloud">Cloud Solutions</a></li>
                                <li><a href="/#bi">Business Intelligence</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="/#about">About Us</a></li>
                                <li><a href="/#services">Services</a></li>
                                <li><a href="/#process">Our Process</a></li>
                                <li><a href="/#testimonials">Testimonials</a></li>
                                <li><a href="/#contact">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul className="footer-links">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Case Studies</a></li>
                                <li><a href="#">White Papers</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Contact Us</h3>
                            <address className="footer-address">
                                <p><i className='bx bx-map'></i> Gujrat, Punjab, Pakistan</p>
                                <p><i className='bx bx-phone'></i> +971 56 327 1660</p>
                                <p><i className='bx bx-envelope'></i> hello@ebrium.code</p>
                            </address>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <p>&copy; 2025 Ebrium. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Cloud;