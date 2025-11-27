import './mob.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCode, 
    faCodeBranch, 
    faArrowRight, 
    faChevronDown,
    faMobileAlt,
    faTabletAlt
} from '@fortawesome/free-solid-svg-icons';

// Import images (you'll need to add these to your assets folder)
import androidEmulator from '../../assets/app1.jpg';
import iosEmulator from '../../assets/app2.jpg';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

// Add module declaration for react-router-dom
declare module 'react-router';

const MOB = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('android');
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
            {/* Navbar - Same as Home.tsx */}
            <Navbar />

            {/* Enhanced Hero Section */}
            <section className="ebrium-mob-hero">
                <div className="ebrium-mob-hero-bg"></div>
                <div className="ebrium-mob-hero-overlay"></div>
                <div className="container">
                    <div className="ebrium-mob-hero-content">
                        <div className="ebrium-mob-hero-text">
                            <span className="ebrium-mob-hero-badge">Mobile Development</span>
                            <h1 className="ebrium-mob-hero-title">Mobile App <span className="ebrium-mob-highlight">Development</span> Services</h1>
                            <p className="ebrium-mob-hero-description">
                                Transform your ideas into powerful, user-friendly mobile applications. We build high-performance apps for Android, iOS, and cross-platform that engage users and drive business growth.
                            </p>
                            <div className="ebrium-mob-hero-buttons">
                                <a href="#get-quote" className="ebrium-mob-primary-btn">
                                    Get a Quote
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                                <a href="#services" className="ebrium-mob-secondary-btn">
                                    Explore Services
                                </a>
                            </div>
                        </div>
                        <div className="ebrium-mob-hero-visual">
                            <div className="ebrium-mob-hero-shapes">
                                <div className="ebrium-mob-shape ebrium-mob-shape-1"></div>
                                <div className="ebrium-mob-shape ebrium-mob-shape-2"></div>
                                <div className="ebrium-mob-shape ebrium-mob-shape-3"></div>
                            </div>
                            <div className="ebrium-mob-hero-cards">
                                <div className="ebrium-mob-hero-card">
                                    <div className="ebrium-mob-hero-card-icon">
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                    </div>
                                    <h3>Android</h3>
                                </div>
                                <div className="ebrium-mob-hero-card">
                                    <div className="ebrium-mob-hero-card-icon">
                                        <FontAwesomeIcon icon={faTabletAlt} />
                                    </div>
                                    <h3>iOS</h3>
                                </div>
                                <div className="ebrium-mob-hero-card">
                                    <div className="ebrium-mob-hero-card-icon">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                    <h3>Flutter</h3>
                                </div>
                                <div className="ebrium-mob-hero-card">
                                    <div className="ebrium-mob-hero-card-icon">
                                        <FontAwesomeIcon icon={faCodeBranch} />
                                    </div>
                                    <h3>Kotlin/Java</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="mob-services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Mobile Development Services</h2>
                        <p className="section-subtitle">Comprehensive Solutions For Your Mobile App Needs</p>
                    </div>

                    <div className="tabs-container">
                        <div className="tabs-header">
                            <button 
                                className={`tab-button ${activeTab === 'android' ? 'active' : ''}`}
                                onClick={() => setActiveTab('android')}
                            >
                                <i className='bx bxl-android'></i> Android
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'ios' ? 'active' : ''}`}
                                onClick={() => setActiveTab('ios')}
                            >
                                <i className='bx bxl-apple'></i> iOS
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'flutter' ? 'active' : ''}`}
                                onClick={() => setActiveTab('flutter')}
                            >
                                <i className='bx bx-code-alt'></i> Flutter
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'cross' ? 'active' : ''}`}
                                onClick={() => setActiveTab('cross')}
                            >
                                <i className='bx bx-devices'></i> Cross Platform
                            </button>
                        </div>

                        <div className="tabs-content">
                            <div className={`tab-panel ${activeTab === 'android' ? 'active' : ''}`}>
                                <div className="tab-content">
                                    <h3>Android App Development</h3>
                                    <p>We develop high-performance Android applications with rich features, seamless user experience, and robust backend integration. Our Android apps are built with the latest technologies to ensure they work flawlessly across a wide range of Android devices.</p>
                                    <ul className="features-list">
                                        <li><i className='bx bx-check'></i> Native Android development with Java & Kotlin</li>
                                        <li><i className='bx bx-check'></i> Material Design implementation</li>
                                        <li><i className='bx bx-check'></i> Integration with Google Play Services</li>
                                        <li><i className='bx bx-check'></i> Support for various screen sizes and resolutions</li>
                                        <li><i className='bx bx-check'></i> Performance optimization for different Android versions</li>
                                    </ul>
                                </div>
                                <div className="tab-image">
                                    <img src={androidEmulator} alt="Android App Development" />
                                </div>
                            </div>

                            <div className={`tab-panel ${activeTab === 'ios' ? 'active' : ''}`}>
                                <div className="tab-content">
                                    <h3>iOS App Development</h3>
                                    <p>Our iOS app development services deliver elegant, powerful applications with intuitive interfaces and smooth performance. We create apps that adhere to Apple's design guidelines while providing unique, engaging experiences for iPhone and iPad users.</p>
                                    <ul className="features-list">
                                        <li><i className='bx bx-check'></i> Native iOS development with Swift & Objective-C</li>
                                        <li><i className='bx bx-check'></i> Human Interface Guidelines implementation</li>
                                        <li><i className='bx bx-check'></i> Integration with Apple services (Apple Pay, iCloud, etc.)</li>
                                        <li><i className='bx bx-check'></i> Support for latest iOS versions and devices</li>
                                        <li><i className='bx bx-check'></i> App Store submission and optimization</li>
                                    </ul>
                                </div>
                                <div className="tab-image">
                                    <img src={iosEmulator} alt="iOS App Development" />
                                </div>
                            </div>

                            <div className={`tab-panel ${activeTab === 'flutter' ? 'active' : ''}`}>
                                <div className="tab-content">
                                    <h3>Flutter App Development</h3>
                                    <p>Using Google's Flutter framework, we build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter allows us to deliver feature-rich apps with expressive UI, fast development cycles, and excellent performance.</p>
                                    <ul className="features-list">
                                        <li><i className='bx bx-check'></i> Cross-platform development with a single codebase</li>
                                        <li><i className='bx bx-check'></i> Custom, animated UI with Flutter widgets</li>
                                        <li><i className='bx bx-check'></i> Fast development and hot reload</li>
                                        <li><i className='bx bx-check'></i> Native performance on multiple platforms</li>
                                        <li><i className='bx bx-check'></i> Integration with native features and APIs</li>
                                    </ul>
                                </div>
                                <div className="tab-image">
                                    <img src={androidEmulator} alt="Flutter App Development" />
                                </div>
                            </div>

                            <div className={`tab-panel ${activeTab === 'cross' ? 'active' : ''}`}>
                                <div className="tab-content">
                                    <h3>Cross-Platform App Development</h3>
                                    <p>Our cross-platform app development services help you reach users on multiple platforms with a single codebase. We use frameworks like React Native and Xamarin to build cost-effective applications that maintain native-like performance and look-and-feel.</p>
                                    <ul className="features-list">
                                        <li><i className='bx bx-check'></i> Code reusability across multiple platforms</li>
                                        <li><i className='bx bx-check'></i> Faster development and time-to-market</li>
                                        <li><i className='bx bx-check'></i> Consistent user experience across devices</li>
                                        <li><i className='bx bx-check'></i> Lower development and maintenance costs</li>
                                        <li><i className='bx bx-check'></i> Easier updates and feature additions</li>
                                    </ul>
                                </div>
                                <div className="tab-image">
                                    <img src={iosEmulator} alt="Cross-Platform App Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get a Quote Section */}
            <section id="get-quote" className="quote-section">
                <div className="container">
                    <div className="quote-container">
                        <div className="quote-form-container">
                            <h2>Get a Free Quote</h2>
                            <p>Tell us about your project and we'll get back to you with a custom quote.</p>
                            <form className="quote-form">
                                <div className="form-group">
                                    <input type="text" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" id="phone" placeholder="Your Phone Number" />
                                </div>
                                <div className="form-group">
                                    <select id="app-type" required>
                                        <option value="">Select App Type</option>
                                        <option value="android">Android App</option>
                                        <option value="ios">iOS App</option>
                                        <option value="flutter">Flutter App</option>
                                        <option value="cross">Cross-Platform App</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea id="project-details" placeholder="Tell us about your project" rows={4} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit Request</button>
                            </form>
                        </div>
                        <div className="quote-image">
                            <img src={iosEmulator} alt="Mobile App Development" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="tech-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Technologies We Use</h2>
                        <p className="section-subtitle">Cutting-Edge Technologies for Modern Mobile Applications</p>
                    </div>
                    
                    <div className="technologies-grid">
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-flutter' ></i>
                            </div>
                            <h3>Flutter</h3>
                            <p>Google's UI toolkit for building beautiful, natively compiled applications from a single codebase.</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className="fa-brands fa-java"></i>
                            </div>
                            <h3>Java</h3>
                            <p>Industry-standard programming language for Android app development with proven reliability.</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className="fa-brands fa-swift"></i>
                            </div>
                            <h3>Swift</h3>
                            <p>Apple's powerful and intuitive programming language for iOS, macOS, and watchOS.</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3>Kotlin</h3>
                            <p>Modern, concise language for Android development that enhances productivity and safety.</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className="fa-brands fa-node-js"></i>
                            </div>
                            <h3>Node.js</h3>
                            <p>JavaScript runtime for building fast, scalable backend services for mobile applications.</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className="fa-brands fa-python"></i>
                            </div>
                            <h3>Python</h3>
                            <p>Versatile language used for backend development, data processing, and machine learning.</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className="fa-brands fa-aws"></i>
                            </div>
                            <h3>AWS</h3>
                            <p>Comprehensive cloud platform for hosting, storing, and scaling mobile app infrastructure.</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-mongodb'></i>
                            </div>
                            <h3>MongoDB</h3>
                            <p>NoSQL database used for storing and retrieving data in a flexible and scalable manner.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process Section */}
            <section className="ebrium-mob-process-section">
                <div className="container">
                    <div className="ebrium-mob-section-header">
                        <h2 className="ebrium-mob-section-title">Our App Development Process</h2>
                        <p className="ebrium-mob-section-subtitle">A Structured Approach to Deliver Quality Mobile Applications</p>
                    </div>
                    
                    <div className="ebrium-mob-process-timeline">
                        <div className="ebrium-mob-process-step">
                            <div className="ebrium-mob-process-number">1</div>
                            <div className="ebrium-mob-process-content">
                                <h3>Consultation</h3>
                                <p>We begin by understanding your business needs, target audience, and project requirements to establish a clear roadmap for your mobile app.</p>
                            </div>
                        </div>
                        
                        <div className="ebrium-mob-process-step">
                            <div className="ebrium-mob-process-number">2</div>
                            <div className="ebrium-mob-process-content">
                                <h3>Design</h3>
                                <p>Our design team creates intuitive, engaging UI/UX designs that align with your brand and provide seamless user experiences.</p>
                            </div>
                        </div>
                        
                        <div className="ebrium-mob-process-step">
                            <div className="ebrium-mob-process-number">3</div>
                            <div className="ebrium-mob-process-content">
                                <h3>Build</h3>
                                <p>Our developers bring the designs to life using clean, efficient code and the most appropriate technologies for your specific requirements.</p>
                            </div>
                        </div>
                        
                        <div className="ebrium-mob-process-step">
                            <div className="ebrium-mob-process-number">4</div>
                            <div className="ebrium-mob-process-content">
                                <h3>Launch</h3>
                                <p>After thorough testing and quality assurance, we deploy your app to the relevant app stores and provide ongoing support and maintenance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-subtitle">Benefits of Working With Our Mobile App Development Team</p>
                    </div>
                    
                    <div className="why-choose-grid">
                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-badge-check'></i>
                            </div>
                            <h3>Expertise</h3>
                            <p>Our team consists of experienced developers with deep knowledge in mobile technologies and frameworks.</p>
                        </div>
                        
                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-bulb'></i>
                            </div>
                            <h3>Innovation</h3>
                            <p>We leverage the latest technologies and trends to create forward-thinking, future-proof applications.</p>
                        </div>
                        
                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-user-check'></i>
                            </div>
                            <h3>Usability</h3>
                            <p>We focus on creating intuitive, user-friendly interfaces that enhance the overall user experience.</p>
                        </div>
                        
                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-run'></i>
                            </div>
                            <h3>Agility</h3>
                            <p>Our agile development approach ensures flexibility, faster delivery, and continuous improvement.</p>
                        </div>
                        
                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-dollar-circle'></i>
                            </div>
                            <h3>Affordability</h3>
                            <p>We offer competitive pricing without compromising on quality, providing excellent value for your investment.</p>
                        </div>
                        
                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-support'></i>
                            </div>
                            <h3>Support</h3>
                            <p>We provide comprehensive post-launch support and maintenance to ensure your app continues to perform at its best.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Pricing Plans</h2>
                        <p className="section-subtitle">Flexible Options to Fit Your Budget and Requirements</p>
                    </div>
                    
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Basic</h3>
                                <div className="price">$1,999</div>
                                <p>Perfect for startups and MVPs</p>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li><i className='bx bx-check'></i> Both platforms (Android & iOS)</li>
                                    <li><i className='bx bx-check'></i> Up to 5 core features</li>
                                    <li><i className='bx bx-check'></i> Basic UI/UX design</li>
                                    <li><i className='bx bx-check'></i> Standard authentication</li>
                                    <li><i className='bx bx-check'></i> 1 month of post-launch support</li>
                                </ul>
                            </div>
                            <a href="#get-quote" className="btn btn-outline">Get Started</a>
                        </div>
                        
                        <div className="pricing-card featured">
                            <div className="popular-tag">Most Popular</div>
                            <div className="pricing-header">
                                <h3>Professional</h3>
                                <div className="price">$4,999</div>
                                <p>For growing businesses</p>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li><i className='bx bx-check'></i> Both Android and iOS platforms</li>
                                    <li><i className='bx bx-check'></i> Up to 10 features</li>
                                    <li><i className='bx bx-check'></i> Advanced UI/UX design</li>
                                    <li><i className='bx bx-check'></i> Custom authentication</li>
                                    <li><i className='bx bx-check'></i> API integration</li>
                                    <li><i className='bx bx-check'></i> 3 months of post-launch support</li>
                                </ul>
                            </div>
                            <a href="#get-quote" className="btn btn-primary">Get Started</a>
                        </div>
                        
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Enterprise</h3>
                                <div className="price">Custom</div>
                                <p>For large-scale applications</p>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    <li><i className='bx bx-check'></i> Multi-platform support</li>
                                    <li><i className='bx bx-check'></i> Unlimited features</li>
                                    <li><i className='bx bx-check'></i> Premium UI/UX design</li>
                                    <li><i className='bx bx-check'></i> Advanced security measures</li>
                                    <li><i className='bx bx-check'></i> Complex integrations</li>
                                    <li><i className='bx bx-check'></i> Dedicated support team</li>
                                    <li><i className='bx bx-check'></i> 6 months of post-launch support</li>
                                </ul>
                            </div>
                            <a href="#get-quote" className="btn btn-outline">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ and Contact Section */}
            <section className="faq-contact-section">
                <div className="container">
                    <div className="faq-contact-container">
                        <div className="faq-section">
                            <h2>App Development FAQs</h2>
                            <div className="accordion">
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 0 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(0)}
                                    >
                                        <h3>How long does it take to develop an app?</h3>
                                        <i className={`bx ${activeFaq === 0 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 0 ? 'active' : ''}`}>
                                        <p>The development timeline varies based on complexity, features, and platforms. Typically, a basic app takes 2-3 months, while complex applications can take 4-6 months or more. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.</p>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 1 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(1)}
                                    >
                                        <h3>Can you develop apps for both iOS and Android?</h3>
                                        <i className={`bx ${activeFaq === 1 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 1 ? 'active' : ''}`}>
                                        <p>Yes, we develop apps for both iOS and Android platforms. We can create native apps specifically for each platform or use cross-platform frameworks like Flutter or React Native to build a single app that works on both platforms, depending on your requirements and budget.</p>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 2 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(2)}
                                    >
                                        <h3>Do you provide post-launch support?</h3>
                                        <i className={`bx ${activeFaq === 2 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 2 ? 'active' : ''}`}>
                                        <p>Absolutely! We offer comprehensive post-launch support and maintenance packages to ensure your app continues to run smoothly. This includes bug fixes, compatibility updates, performance optimization, and technical support. The duration of support varies based on your chosen package.</p>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 3 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(3)}
                                    >
                                        <h3>Can I update my app in the future?</h3>
                                        <i className={`bx ${activeFaq === 3 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 3 ? 'active' : ''}`}>
                                        <p>Yes, we design our apps with future updates in mind. We can help you implement new features, design changes, or performance improvements as your business grows and user needs evolve. Our ongoing support plans include options for regular updates and enhancements.</p>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 4 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(4)}
                                    >
                                        <h3>What makes your app development services unique?</h3>
                                        <i className={`bx ${activeFaq === 4 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 4 ? 'active' : ''}`}>
                                        <p>Our approach combines technical expertise with strategic business thinking. We don't just build apps; we create solutions that drive real business value. Our focus on user experience, quality code, transparent communication, and ongoing support sets us apart from other development teams.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="quick-contact-section">
                            <h2>Instant Access to Expert Service</h2>
                            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                            <form className="quick-contact-form">
                                <div className="form-group">
                                    <input type="text" id="quick-name" placeholder="Full Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="quick-email" placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" id="quick-phone" placeholder="Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <select id="quick-plan" required>
                                        <option value="">Select a Plan</option>
                                        <option value="basic">Basic Plan</option>
                                        <option value="professional">Professional Plan</option>
                                        <option value="enterprise">Enterprise Plan</option>
                                        <option value="custom">Custom Solution</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea id="quick-message" placeholder="Tell us about your project" rows={3} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Place Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default MOB;
