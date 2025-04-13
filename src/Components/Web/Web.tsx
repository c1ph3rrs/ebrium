import './web.css';
import mainLogo from '../../assets/main_logo.png';
import webHeroImage from '../../assets/web_hero.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Web = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('custom');
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
        setActiveFaq(activeFaq === index ? null : index);
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
                                <a href="#services">Services</a>
                            </div>
                            <ul className="nav__dropdown">
                                <li className="nav__dropdown-item">
                                    <Link to="/mob">Mobile App Development</Link>
                                </li>
                                <li className="nav__dropdown-item">
                                    <Link to="/web">Web Development</Link>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="#ai-ml">AI & Machine Learning</a>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="#cloud">Cloud Solutions</a>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="#bi">Business Intelligence</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#solutions">Solutions</a>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#about">About Us</a>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#contact">Contact</a>
                        </li>
                        <li className="nav__menu-item consultation">
                            <a href="#consultation">Get Free Consultation</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="web-hero main__container">
                <div className="web-hero-content">
                    <h1 className="animated-text">Modern & Scalable Web Development</h1>
                    <p className="subtitle">
                        Building high-performance websites and web applications that grow with your business
                    </p>
                </div>
                <div className="what__we__offer">
                    <span>Our Expertise</span>
                    <div className="hero-text">
                        <h1>
                            <Typewriter
                                words={[
                                    'Custom Websites ✨',
                                    'E-commerce Platforms 🛒',
                                    'Content Management Systems 📝',
                                    'Progressive Web Apps 📱',
                                    'Admin Dashboards 📊'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={40}
                                delaySpeed={2000}
                            />
                        </h1>
                        <p className="hero-description">
                            Partner with us to build cutting-edge web solutions that elevate your online presence
                        </p>
                        <div className="cta-buttons">
                            <a href="#quote" className="btn btn-primary">Request a Quote</a>
                            <a href="#solutions" className="btn btn-secondary">Our Solutions</a>
                        </div>
                    </div>
                </div>
                
                {/* Animated background shapes */}
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
            </section>

            {/* Trusted Partners Section */}
            <section className="partners-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Trusted Partners</h2>
                        <p className="section-subtitle">Businesses That Rely on Our Web Expertise</p>
                    </div>
                    
                    <div className="marquee-container">
                        <div className="marquee-content">
                            {/* Partners logos */}
                            <div className="partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                                <p>Aqua Station</p>
                            </div>
                            <div className="partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                                <p>Aqua Station</p>
                            </div>
                            <div className="partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                                <p>Aqua Station</p>
                            </div>
                            <div className="partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                                <p>Aqua Station</p>
                            </div>
                            
                            {/* Duplicate for seamless scrolling */}
                            <div className="partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                                <p>Aqua Station</p>
                            </div>
                            <div className="partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                                <p>Aqua Station</p>
                            </div>
                            <div className="partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                                <p>Aqua Station</p>
                            </div>
                            <div className="partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                                <p>Aqua Station</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Web Solutions Section */}
            <section id="solutions" className="solutions-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Web Solutions</h2>
                        <p className="section-subtitle">Comprehensive Web Development Services for Every Need</p>
                    </div>
                    
                    <div className="solutions-tabs">
                        <div className="tabs-nav">
                            <button 
                                className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} 
                                onClick={() => setActiveTab('custom')}
                            >
                                Custom Websites
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'cms' ? 'active' : ''}`} 
                                onClick={() => setActiveTab('cms')}
                            >
                                CMS Solutions
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'ecommerce' ? 'active' : ''}`} 
                                onClick={() => setActiveTab('ecommerce')}
                            >
                                E-commerce
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'pwa' ? 'active' : ''}`} 
                                onClick={() => setActiveTab('pwa')}
                            >
                                PWAs
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'admin' ? 'active' : ''}`} 
                                onClick={() => setActiveTab('admin')}
                            >
                                Admin Panels
                            </button>
                        </div>
                        
                        <div className="tabs-content">
                            <div className={`tab-pane ${activeTab === 'custom' ? 'active' : ''}`}>
                                <div className="solution-content">
                                    <div className="solution-image">
                                        <img src="https://placehold.co/600x400" alt="Custom Websites" />
                                    </div>
                                    <div className="solution-details">
                                        <h3>Custom Website Development</h3>
                                        <p>Tailored web solutions designed specifically for your business needs. We create unique, branded experiences that set you apart from the competition.</p>
                                        <ul className="solution-features">
                                            <li>Responsive design for all devices</li>
                                            <li>SEO-optimized structure</li>
                                            <li>Custom functionality</li>
                                            <li>Performance optimization</li>
                                            <li>Brand-aligned user experience</li>
                                        </ul>
                                        <a href="#quote" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`tab-pane ${activeTab === 'cms' ? 'active' : ''}`}>
                                <div className="solution-content">
                                    <div className="solution-image">
                                        <img src="https://placehold.co/600x400" alt="CMS Solutions" />
                                    </div>
                                    <div className="solution-details">
                                        <h3>Content Management Systems</h3>
                                        <p>Powerful CMS solutions that give you complete control over your website content. Easy to use interfaces that allow non-technical users to update and manage content.</p>
                                        <ul className="solution-features">
                                            <li>WordPress, Drupal, or custom CMS</li>
                                            <li>User-friendly admin interface</li>
                                            <li>Content workflow management</li>
                                            <li>Multi-user access controls</li>
                                            <li>Scalable content architecture</li>
                                        </ul>
                                        <a href="#quote" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`tab-pane ${activeTab === 'ecommerce' ? 'active' : ''}`}>
                                <div className="solution-content">
                                    <div className="solution-image">
                                        <img src="https://placehold.co/600x400" alt="E-commerce Solutions" />
                                    </div>
                                    <div className="solution-details">
                                        <h3>E-commerce Solutions</h3>
                                        <p>Comprehensive online store solutions that drive sales and provide exceptional shopping experiences. From small boutiques to large enterprises, we build scalable e-commerce platforms.</p>
                                        <ul className="solution-features">
                                            <li>Secure payment processing</li>
                                            <li>Inventory management</li>
                                            <li>Customer account portals</li>
                                            <li>Order tracking and fulfillment</li>
                                            <li>Marketing and promotion tools</li>
                                        </ul>
                                        <a href="#quote" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`tab-pane ${activeTab === 'pwa' ? 'active' : ''}`}>
                                <div className="solution-content">
                                    <div className="solution-image">
                                        <img src="https://placehold.co/600x400" alt="Progressive Web Apps" />
                                    </div>
                                    <div className="solution-details">
                                        <h3>Progressive Web Apps</h3>
                                        <p>The best of both worlds – web and mobile. PWAs offer app-like experiences with the reach of the web, working across all devices with reliable performance even in poor network conditions.</p>
                                        <ul className="solution-features">
                                            <li>Offline functionality</li>
                                            <li>Fast loading times</li>
                                            <li>Home screen installation</li>
                                            <li>Push notifications</li>
                                            <li>Native-like interactions</li>
                                        </ul>
                                        <a href="#quote" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`tab-pane ${activeTab === 'admin' ? 'active' : ''}`}>
                                <div className="solution-content">
                                    <div className="solution-image">
                                        <img src="https://placehold.co/600x400" alt="Admin Panels" />
                                    </div>
                                    <div className="solution-details">
                                        <h3>Admin Dashboards & Panels</h3>
                                        <p>Powerful backend systems that give you complete control over your business operations. Custom dashboards with intuitive interfaces that streamline workflows and provide valuable insights.</p>
                                        <ul className="solution-features">
                                            <li>User management systems</li>
                                            <li>Data visualization</li>
                                            <li>Reporting tools</li>
                                            <li>Business process automation</li>
                                            <li>Role-based access control</li>
                                        </ul>
                                        <a href="#quote" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="tech-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Technologies We Use</h2>
                        <p className="section-subtitle">Modern Stack for Modern Web Solutions</p>
                    </div>
                    
                    <div className="tech-grid">
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-html5'></i>
                            </div>
                            <h3>HTML5</h3>
                            <p>Modern, semantic markup for structured content</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-css3'></i>
                            </div>
                            <h3>CSS</h3>
                            <p>Responsive styling with CSS3, Sass, and CSS-in-JS</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-react'></i>
                            </div>
                            <h3>React JS</h3>
                            <p>Component-based UI development for interactive web apps</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-nodejs'></i>
                            </div>
                            <h3>Node JS</h3>
                            <p>Server-side JavaScript for scalable backend solutions</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-typescript'></i>
                            </div>
                            <h3>TypeScript</h3>
                            <p>Type-safe JavaScript for robust application development</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-angular'></i>
                            </div>
                            <h3>Angular</h3>
                            <p>Comprehensive framework for enterprise applications</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-vuejs'></i>
                            </div>
                            <h3>Vue.js</h3>
                            <p>Progressive framework for building user interfaces</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-mongodb'></i>
                            </div>
                            <h3>MongoDB</h3>
                            <p>NoSQL database for flexible data storage</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Development Process</h2>
                        <p className="section-subtitle">From Consultation to Launch</p>
                    </div>
                    
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <div className="process-content">
                                <h3>Consultation</h3>
                                <p>We start by understanding your business goals, target audience, and specific requirements to create a tailored web solution strategy.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <div className="process-content">
                                <h3>Design</h3>
                                <p>Our designers create wireframes and visual designs that align with your brand and provide optimal user experience across all devices.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <div className="process-content">
                                <h3>Build</h3>
                                <p>Our development team brings the designs to life, writing clean, efficient code and implementing all required functionality.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <div className="process-content">
                                <h3>Launch</h3>
                                <p>After thorough testing and quality assurance, we deploy your web solution and provide training and documentation for smooth operation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-subtitle">Benefits of Our Web Development Services</p>
                    </div>
                    
                    <div className="stats-container">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-expand'></i>
                            </div>
                            <div className="stat-title">Scalability</div>
                            <p>Solutions that grow with your business, handling increased traffic and expanding functionality without performance issues.</p>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-shield-quarter'></i>
                            </div>
                            <div className="stat-title">Security</div>
                            <p>Robust security measures to protect your data and your users, with regular updates and best practices implementation.</p>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-timer'></i>
                            </div>
                            <div className="stat-title">Speed</div>
                            <p>Lightning-fast loading times and optimized performance for improved user experience and better search engine rankings.</p>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-customize'></i>
                            </div>
                            <div className="stat-title">Customization</div>
                            <p>Tailor-made solutions designed specifically for your business needs, not generic templates that limit your potential.</p>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-bulb'></i>
                            </div>
                            <div className="stat-title">Innovation</div>
                            <p>Stay ahead with the latest web technologies and trends, ensuring your digital presence remains competitive and effective.</p>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-support'></i>
                            </div>
                            <div className="stat-title">Support</div>
                            <p>Ongoing maintenance and support to ensure your web solution continues to perform optimally and evolve with your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section id="pricing" className="pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Affordable Pricing Plans</h2>
                        <p className="section-subtitle">Solutions for Every Budget</p>
                    </div>
                    
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Basic</h3>
                                <div className="price">
                                    <span className="currency">$</span>
                                    <span className="amount">999</span>
                                </div>
                                <p className="pricing-description">Perfect for small businesses just getting started</p>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li>Responsive website (up to 5 pages)</li>
                                    <li>Basic SEO setup</li>
                                    <li>Contact form</li>
                                    <li>Mobile-friendly design</li>
                                    <li>Social media integration</li>
                                    <li className="not-included">Content management system</li>
                                    <li className="not-included">E-commerce functionality</li>
                                    <li className="not-included">Custom animations</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="#quote" className="btn btn-primary">Get Started</a>
                            </div>
                        </div>
                        
                        <div className="pricing-card featured">
                            <div className="pricing-badge">Most Popular</div>
                            <div className="pricing-header">
                                <h3>Professional</h3>
                                <div className="price">
                                    <span className="currency">$</span>
                                    <span className="amount">2,499</span>
                                </div>
                                <p className="pricing-description">Ideal for growing businesses with specific needs</p>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li>Responsive website (up to 10 pages)</li>
                                    <li>Advanced SEO optimization</li>
                                    <li>Content management system</li>
                                    <li>Custom contact forms</li>
                                    <li>Blog functionality</li>
                                    <li>Performance optimization</li>
                                    <li>Basic analytics setup</li>
                                    <li className="not-included">E-commerce functionality</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="#quote" className="btn btn-primary">Get Started</a>
                            </div>
                        </div>
                        
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Enterprise</h3>
                                <div className="price">
                                    <span className="currency">$</span>
                                    <span className="amount">4,999</span>
                                    <span className="period">+</span>
                                </div>
                                <p className="pricing-description">Full-featured solution for established businesses</p>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li>Custom website development</li>
                                    <li>Advanced CMS integration</li>
                                    <li>E-commerce functionality</li>
                                    <li>Custom database integration</li>
                                    <li>User authentication system</li>
                                    <li>Advanced security measures</li>
                                    <li>Performance optimization</li>
                                    <li>Comprehensive analytics</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="#quote" className="btn btn-primary">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ & Contact Section */}
            <section id="quote" className="faq-contact-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Web Development FAQs</h2>
                        <p className="section-subtitle">Get Answers & Request a Quote</p>
                    </div>
                    
                    <div className="faq-contact-container">
                        <div className="faq-column">
                            <div className="accordion">
                                <div className={`accordion-item ${activeFaq === 0 ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleFaq(0)}>
                                        <h3>How long does it take to build a website?</h3>
                                        <span className="accordion-icon"></span>
                                    </div>
                                    <div className="accordion-content">
                                        <p>The timeline for website development varies based on complexity. A basic website might take 2-4 weeks, while more complex projects with custom functionality can take 2-3 months. During our initial consultation, we'll provide a more specific timeline based on your requirements.</p>
                                    </div>
                                </div>
                                
                                <div className={`accordion-item ${activeFaq === 1 ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleFaq(1)}>
                                        <h3>Do you offer maintenance after the website is live?</h3>
                                        <span className="accordion-icon"></span>
                                    </div>
                                    <div className="accordion-content">
                                        <p>Yes, we offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and performs optimally. Our maintenance services include regular updates, security monitoring, performance optimization, and content updates as needed.</p>
                                    </div>
                                </div>
                                
                                <div className={`accordion-item ${activeFaq === 2 ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleFaq(2)}>
                                        <h3>What industries do you serve?</h3>
                                        <span className="accordion-icon"></span>
                                    </div>
                                    <div className="accordion-content">
                                        <p>We work with clients across various industries including e-commerce, healthcare, education, finance, hospitality, real estate, manufacturing, and professional services. Our diverse experience allows us to understand the unique needs and challenges of different sectors.</p>
                                    </div>
                                </div>
                                
                                <div className={`accordion-item ${activeFaq === 3 ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleFaq(3)}>
                                        <h3>Can you improve my existing website?</h3>
                                        <span className="accordion-icon"></span>
                                    </div>
                                    <div className="accordion-content">
                                        <p>Absolutely! We offer website redesign and optimization services to improve your existing website's design, functionality, and performance. We can enhance user experience, optimize for better search engine rankings, improve loading speeds, and add new features to your current site.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-column">
                            <div className="contact-form">
                                <h3>Request a Quote</h3>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" name="name" placeholder="Your full name" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" placeholder="Your email address" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="plan">Interested Plan</label>
                                        <select id="plan" name="plan">
                                            <option value="">Select a plan</option>
                                            <option value="basic">Basic</option>
                                            <option value="professional">Professional</option>
                                            <option value="enterprise">Enterprise</option>
                                            <option value="custom">Custom Solution</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="message">Project Details</label>
                                        <textarea id="message" name="message" placeholder="Tell us about your project requirements" rows={5}></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary submit-btn">Send Request</button>
                                </form>
                            </div>
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
                                Delivering innovative web solutions that help businesses thrive in the digital era.
                            </p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/engr-ibrahim-akram-6819081a2/" target="_blank" rel="noopener noreferrer" className="social-link"><i className='bx bxl-linkedin' ></i></a>
                                <a href="https://x.com/ib__mughal" target="_blank" rel="noopener noreferrer" className="social-link"><i className='bx bxl-twitter' ></i></a>
                                <a href="https://www.facebook.com/profile.php?id=61571213197093" target="_blank" rel="noopener noreferrer" className="social-link"><i className='bx bxl-facebook' ></i></a>
                                <a href="https://www.instagram.com/ebriumcoders/" target="_blank" rel="noopener noreferrer" className="social-link"><i className='bx bxl-instagram' ></i></a>
                            </div>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Services</h3>
                            <ul className="footer-links">
                                <li><Link to="/mob">Mobile App Development</Link></li>
                                <li><Link to="/web">Web Development</Link></li>
                                <li><a href="#ai-ml">AI & Machine Learning</a></li>
                                <li><a href="#cloud">Cloud Solutions</a></li>
                                <li><a href="#bi">Business Intelligence</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="#solutions">Our Solutions</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#quote">Get a Quote</a></li>
                                <li><a href="/">Home</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Contact Us</h3>
                            <address className="footer-address">
                                <p><i className='bx bx-map' ></i> Gujrat, Punjab, Pakistan</p>
                                <p><i className='bx bx-phone' ></i> +971 56 327 1660</p>
                                <p><i className='bx bx-envelope' ></i> hello@ebrium.code</p>
                            </address>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <p>&copy; 2025 Ebrium. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Web;
