import aboutImage from '../../assets/about_us.jpeg';
import avatar from '../../assets/avatar.jpg';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCode, 
    faCloudArrowUp, 
    faMobile, 
    faBrain,
    faChevronDown,
    faArrowRight,
    faCheck,
    faRocket,
    faUsers,
    faAward,
    faStar,
    faQuoteRight
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './home.css'

const Home = () => {
    

    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }
    
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className="ebrium-home-page-wrapper">
            <Navbar />

            {/* Enhanced Hero Section */}
            <section className="ebrium-home-hero-section">
                <div className="ebrium-home-hero-bg"></div>
                <div className="ebrium-home-hero-overlay"></div>
                <div className="container">
                    <div className="ebrium-home-hero-content">
                        <div className="ebrium-home-hero-text">
                            <div className="ebrium-home-hero-badge">
                                <FontAwesomeIcon icon={faRocket} />
                                <span>Leading Digital Innovation</span>
                            </div>
                            <h1 className="ebrium-home-hero-title">
                                Transforming Ideas Into 
                                <span className="ebrium-home-highlight"> Digital Excellence</span>
                            </h1>
                            <p className="ebrium-home-hero-description">
                                We deliver cutting-edge software solutions that drive business growth and innovation. 
                                Partner with us to build scalable, secure, and user-centric applications.
                            </p>
                            <div className="ebrium-home-typewriter-container">
                                <span className="ebrium-home-typewriter-label">Specializing in:</span>
                                <Typewriter
                                    words={[
                                        'Enterprise Software Development',
                                        'Mobile App Solutions',
                                        'AI & Machine Learning',
                                        'Cloud Infrastructure',
                                        'E-commerce Platforms',
                                        'Business Intelligence'
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={3000}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                />
                            </div>
                            <div className="ebrium-home-hero-stats">
                                <div className="ebrium-home-hero-stat">
                                    <span className="ebrium-home-stat-number">100+</span>
                                    <span className="ebrium-home-stat-label">Projects Delivered</span>
                                </div>
                                <div className="ebrium-home-hero-stat">
                                    <span className="ebrium-home-stat-number">50+</span>
                                    <span className="ebrium-home-stat-label">Happy Clients</span>
                                </div>
                                <div className="ebrium-home-hero-stat">
                                    <span className="ebrium-home-stat-number">99%</span>
                                    <span className="ebrium-home-stat-label">Success Rate</span>
                                </div>
                            </div>
                            <div className="ebrium-home-hero-buttons">
                                <a href="#services" className="ebrium-home-primary-btn">
                                    <FontAwesomeIcon icon={faRocket} />
                                    Start Your Project
                                </a>
                                <a href="https://wa.me/971563271660" target="_blank" rel="noopener noreferrer" className="ebrium-home-whatsapp-btn">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="ebrium-home-hero-visual">
                            <div className="ebrium-home-hero-shapes">
                                <div className="ebrium-home-shape ebrium-home-shape-1"></div>
                                <div className="ebrium-home-shape ebrium-home-shape-2"></div>
                                <div className="ebrium-home-shape ebrium-home-shape-3"></div>
                            </div>
                            <div className="ebrium-home-hero-cards">
                                <Link to="/mob" className="ebrium-home-hero-card">
                                    <div className="ebrium-home-hero-card-icon">
                                        <FontAwesomeIcon icon={faMobile} />
                                    </div>
                                    <h3>Mobile Development</h3>
                                    <p>iOS & Android Apps</p>
                                </Link>
                                <Link to="/web" className="ebrium-home-hero-card">
                                    <div className="ebrium-home-hero-card-icon">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                    <h3>Web Solutions</h3>
                                    <p>Modern Web Apps</p>
                                </Link>
                                <Link to="/ai" className="ebrium-home-hero-card">
                                    <div className="ebrium-home-hero-card-icon">
                                        <FontAwesomeIcon icon={faBrain} />
                                    </div>
                                    <h3>AI & ML</h3>
                                    <p>Intelligent Solutions</p>
                                </Link>
                                <Link to="/cloud" className="ebrium-home-hero-card">
                                    <div className="ebrium-home-hero-card-icon">
                                        <FontAwesomeIcon icon={faCloudArrowUp} />
                                    </div>
                                    <h3>Cloud Services</h3>
                                    <p>Scalable Infrastructure</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="ebrium-home-scroll-indicator">
                        <span>Discover Our Solutions</span>
                        <FontAwesomeIcon icon={faChevronDown} bounce />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="ebrium-home-services-section">
                <div className="container">
                    <div className="ebrium-home-section-header">
                        <h2 className="ebrium-home-section-title">Our Services</h2>
                        <p className="ebrium-home-section-subtitle">Comprehensive Solutions For Your Digital Needs</p>
                    </div>

                    <div className="ebrium-home-services-grid">
                        <div className="ebrium-home-service-card">
                            <div className="ebrium-home-service-icon">
                            <i className='bx bx-devices' ></i>
                            </div>
                            <h3>Mobile App Development</h3>
                            <p>Native and cross-platform solutions that provide seamless experiences across devices.</p>
                            <Link to="/mob" className='ebrium-home-service-link'>
                                Learn More
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>

                        <div className="ebrium-home-service-card">
                            <div className="ebrium-home-service-icon">
                                <i className='bx bx-globe'></i>
                            </div>
                            <h3>Web Development</h3>
                            <p>Responsive, fast, and user-friendly websites and web applications tailored for your needs.</p>
                            <Link to="/web" className='ebrium-home-service-link'>
                                Learn More
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>

                        <div className="ebrium-home-service-card">
                            <div className="ebrium-home-service-icon">
                                <i className='bx bx-brain'></i>
                            </div>
                            <h3>AI & Machine Learning</h3>
                            <p>Intelligent solutions that analyze data, learn patterns, and make smart decisions.</p>
                            <Link to="/ai" className='ebrium-home-service-link'>
                                Learn More
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>

                        <div className="ebrium-home-service-card">
                            <div className="ebrium-home-service-icon">
                                <i className='bx bx-cloud'></i>
                            </div>
                            <h3>Cloud Solutions</h3>
                            <p>Scalable cloud infrastructure and migration services to optimize your operations.</p>
                            <Link to="/cloud" className='ebrium-home-service-link'>
                                Learn More
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>

                        <div className="ebrium-home-service-card">
                            <div className="ebrium-home-service-icon">
                                <i className='bx bx-chart'></i>
                            </div>
                            <h3>Business Intelligence</h3>
                            <p>Data analytics solutions that provide actionable insights for informed decision-making.</p>
                            <Link to="/bi" className='ebrium-home-service-link'>
                                Learn More
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>

                        <div className="ebrium-home-service-card">
                            <div className="ebrium-home-service-icon">
                                <i className='bx bx-shield-alt'></i>
                            </div>
                            <h3>Cybersecurity Services</h3>
                            <p>Protect your digital assets with comprehensive security solutions and best practices.</p>
                            <Link to="/cybersecurity" className='ebrium-home-service-link'>
                                Learn More
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partners Section */}
            <section className="ebrium-home-partners-section">
                <div className="container">
                    <div className="ebrium-home-section-header">
                        <h2 className="ebrium-home-section-title">Trusted by Industry Leaders</h2>
                        <p className="ebrium-home-section-subtitle">Empowering forward-thinking companies worldwide with cutting-edge digital solutions that drive real business growth</p>
                    </div>

                    <div className="ebrium-home-partners-grid">
                        <div className="ebrium-home-partner-card">
                            <div className="ebrium-home-partner-logo">
                                <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station" />
                            </div>
                            <div className="ebrium-home-partner-info">
                                <h4>Aqua Station</h4>
                                <p>Water Technology Solutions</p>
                                <span className="ebrium-home-partner-category">Cloud Infrastructure</span>
                            </div>
                        </div>
                        
                        <div className="ebrium-home-partner-card">
                            <div className="ebrium-home-partner-logo">
                                <img src="https://i0.wp.com/elite-soft.io/website_e32d1e8d/wp-content/uploads/2024/03/Untitled-design-41.png" alt="Elite Soft" />
                            </div>
                            <div className="ebrium-home-partner-info">
                                <h4>Elite Soft</h4>
                                <p>Software Development</p>
                                <span className="ebrium-home-partner-category">Enterprise Solutions</span>
                            </div>
                        </div>
                        
                        <div className="ebrium-home-partner-card">
                            <div className="ebrium-home-partner-logo">
                                <img src="https://i0.wp.com/elite-soft.io/website_e32d1e8d/wp-content/uploads/2024/03/logo.png" alt="Whisper" />
                            </div>
                            <div className="ebrium-home-partner-info">
                                <h4>Whisper</h4>
                                <p>Communication Platform</p>
                                <span className="ebrium-home-partner-category">Mobile Apps</span>
                            </div>
                        </div>

                        <div className="ebrium-home-partner-card">
                            <div className="ebrium-home-partner-logo">
                                <div className="ebrium-home-partner-placeholder">
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                            </div>
                            <div className="ebrium-home-partner-info">
                                <h4>Timeer Work Orders</h4>
                                <p>Project Management</p>
                                <span className="ebrium-home-partner-category">AI & Analytics</span>
                            </div>
                        </div>
                    </div>

                    <div className="ebrium-home-partners-stats">
                        <div className="ebrium-home-partners-stat">
                            <FontAwesomeIcon icon={faAward} />
                            <span>15+ Countries Served</span>
                        </div>
                        <div className="ebrium-home-partners-stat">
                            <FontAwesomeIcon icon={faRocket} />
                            <span>100% Project Success Rate</span>
                        </div>
                        <div className="ebrium-home-partners-stat">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Long-term Partnerships</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="ebrium-home-about-section">
                <div className="container">
                    <div className="ebrium-home-section-header">
                        <h2 className="ebrium-home-section-title">Who We Are</h2>
                        <p className="ebrium-home-section-subtitle">Your strategic partner in digital transformation, driving innovation and sustainable business growth through technology excellence</p>
                    </div>

                    <div className="ebrium-home-about-content">
                        <div className="ebrium-home-about-visual">
                            <div className="ebrium-home-about-image">
                                <img src={aboutImage} alt="Ebrium Team - Digital Innovation Experts" />
                                <div className="ebrium-home-about-overlay">
                                    <div className="ebrium-home-about-badge">
                                        <FontAwesomeIcon icon={faAward} />
                                        <span>Industry Leaders</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ebrium-home-about-features">
                                <div className="ebrium-home-about-feature">
                                    <FontAwesomeIcon icon={faRocket} />
                                    <div>
                                        <h4>Innovation First</h4>
                                        <p>Cutting-edge solutions</p>
                                    </div>
                                </div>
                                <div className="ebrium-home-about-feature">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <div>
                                        <h4>Expert Team</h4>
                                        <p>Skilled professionals</p>
                                    </div>
                                </div>
                                <div className="ebrium-home-about-feature">
                                    <FontAwesomeIcon icon={faCheck} />
                                    <div>
                                        <h4>Proven Results</h4>
                                        <p>Successful delivery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ebrium-home-about-text">
                            <div className="ebrium-home-about-intro">
                                <h3>Pioneering Digital Excellence Since Day One</h3>
                                <p className="ebrium-home-about-lead">
                                    We are a dynamic team of software architects, innovative developers, and digital strategists 
                                    committed to transforming your vision into powerful digital realities.
                                </p>
                            </div>

                            <div className="ebrium-home-about-points">
                                <div className="ebrium-home-about-point">
                                    <FontAwesomeIcon icon={faCheck} />
                                    <div>
                                        <h4>Technical Excellence</h4>
                                        <p>Master latest technologies and frameworks to deliver robust, scalable solutions</p>
                                    </div>
                                </div>
                                <div className="ebrium-home-about-point">
                                    <FontAwesomeIcon icon={faCheck} />
                                    <div>
                                        <h4>Client-Centric Approach</h4>
                                        <p>Your success is our mission - we listen, understand, and deliver beyond expectations</p>
                                    </div>
                                </div>
                                <div className="ebrium-home-about-point">
                                    <FontAwesomeIcon icon={faCheck} />
                                    <div>
                                        <h4>Continuous Innovation</h4>
                                        <p>Stay ahead with emerging trends and technologies to future-proof your business</p>
                                    </div>
                                </div>
                            </div>

                            <div className="ebrium-home-about-actions">
                                <Link to="/aboutus" className="ebrium-home-about-btn">
                                    <FontAwesomeIcon icon={faUsers} />
                                    Meet Our Team
                                </Link>
                                <a href="https://wa.me/971563271660" target="_blank" rel="noopener noreferrer" className="ebrium-home-about-contact">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    Let's Talk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Deliver Section */}
            <section className="ebrium-home-process-section">
                <div className="container">
                    <div className="ebrium-home-section-header">
                        <h2 className="ebrium-home-section-title">How We Deliver Results</h2>
                        <p className="ebrium-home-section-subtitle">Our Proven Development Process</p>
                    </div>

                    <div className="ebrium-home-process-timeline">
                        <div className="ebrium-home-process-step">
                            <div className="ebrium-home-process-number">1</div>
                            <div className="ebrium-home-process-content">
                                <h3>
                                    <Link to="/consultation">Consultation</Link>
                                </h3>
                                <p>We start by understanding your business needs, goals, and challenges to develop a tailored approach.</p>
                            </div>
                        </div>

                        <div className="ebrium-home-process-step">
                            <div className="ebrium-home-process-number">2</div>
                            <div className="ebrium-home-process-content">
                                <h3>Development</h3>
                                <p>Our expert team designs and develops your solution using agile methodologies and best practices.</p>
                            </div>
                        </div>

                        <div className="ebrium-home-process-step">
                            <div className="ebrium-home-process-number">3</div>
                            <div className="ebrium-home-process-content">
                                <h3>Testing</h3>
                                <p>Rigorous quality assurance ensures your solution works flawlessly across all platforms and scenarios.</p>
                            </div>
                        </div>

                        <div className="ebrium-home-process-step">
                            <div className="ebrium-home-process-number">4</div>
                            <div className="ebrium-home-process-content">
                                <h3>Launch</h3>
                                <p>We help you deploy your solution and provide ongoing support to ensure continuous performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="ebrium-home-why-choose-section">
                <div className="container">
                    <div className="ebrium-home-section-header">
                        <h2 className="ebrium-home-section-title">Why Choose Ebrium</h2>
                        <p className="ebrium-home-section-subtitle">Delivering excellence through cutting-edge expertise, relentless innovation, and an unwavering commitment to your success</p>
                    </div>

                    <div className="ebrium-home-why-choose-content">
                        <div className="ebrium-home-why-choose-reasons">
                            <div className="ebrium-home-reason-card">
                                <div className="ebrium-home-reason-icon">
                                    <FontAwesomeIcon icon={faRocket} />
                                </div>
                                <h4>Cutting-Edge Technology</h4>
                                <p>We leverage the latest technologies and frameworks to build future-ready solutions that scale with your business growth.</p>
                                <ul>
                                    <li>Modern tech stack</li>
                                    <li>Scalable architecture</li>
                                    <li>Performance optimized</li>
                                </ul>
                            </div>

                            <div className="ebrium-home-reason-card">
                                <div className="ebrium-home-reason-icon">
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                                <h4>Expert Team</h4>
                                <p>Our seasoned developers and architects bring years of experience across diverse industries and complex projects.</p>
                                <ul>
                                    <li>Senior developers</li>
                                    <li>Industry expertise</li>
                                    <li>Proven track record</li>
                                </ul>
                            </div>

                            <div className="ebrium-home-reason-card">
                                <div className="ebrium-home-reason-icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <h4>Quality Assurance</h4>
                                <p>Rigorous testing and quality control processes ensure your solution works flawlessly across all platforms and scenarios.</p>
                                <ul>
                                    <li>Comprehensive testing</li>
                                    <li>Code quality reviews</li>
                                    <li>Performance monitoring</li>
                                </ul>
                            </div>

                            <div className="ebrium-home-reason-card">
                                <div className="ebrium-home-reason-icon">
                                    <FontAwesomeIcon icon={faAward} />
                                </div>
                                <h4>24/7 Support</h4>
                                <p>Round-the-clock support and maintenance to ensure your applications run smoothly and efficiently at all times.</p>
                                <ul>
                                    <li>Continuous monitoring</li>
                                    <li>Quick response times</li>
                                    <li>Proactive maintenance</li>
                                </ul>
                            </div>
                        </div>

                        <div className="ebrium-home-stats-showcase">
                            <h3>Our Track Record</h3>
                            <div className="ebrium-home-stats-grid">
                                <div className="ebrium-home-stat-item">
                                    <div className="ebrium-home-stat-number">100+</div>
                                    <div className="ebrium-home-stat-label">Projects Delivered</div>
                                </div>
                                <div className="ebrium-home-stat-item">
                                    <div className="ebrium-home-stat-number">50+</div>
                                    <div className="ebrium-home-stat-label">Happy Clients</div>
                                </div>
                                <div className="ebrium-home-stat-item">
                                    <div className="ebrium-home-stat-number">99%</div>
                                    <div className="ebrium-home-stat-label">Success Rate</div>
                                </div>
                                <div className="ebrium-home-stat-item">
                                    <div className="ebrium-home-stat-number">15+</div>
                                    <div className="ebrium-home-stat-label">Countries Served</div>
                                </div>
                            </div>
                            <div className="ebrium-home-stats-cta">
                                <p>Ready to join our success stories?</p>
                                <a href="https://wa.me/971563271660" target="_blank" rel="noopener noreferrer" className="ebrium-home-stats-btn">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    Start Your Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Success Stories Section */}
            <section className="ebrium-home-success-stories-section">
                <div className="container">
                    <div className="ebrium-home-section-header">
                        <h2 className="ebrium-home-section-title">Client Success Ratio</h2>
                        <p className="ebrium-home-section-subtitle">Proven track record of success - Discover how we've transformed businesses and delivered measurable results that exceed expectations</p>
                    </div>

                    <div className="ebrium-home-stories-showcase">
                        <div className="ebrium-home-featured-story">
                            <div className="ebrium-home-story-content">
                                <div className="ebrium-home-story-header">
                                    <div className="ebrium-home-story-company">
                                        <img src="https://static.tildacdn.one/tild3030-3264-4364-b039-313263313133/aquastation-logo-hea.svg" alt="Aqua Station Logo" />
                                        <div className="ebrium-home-company-info">
                                            <h3>Aqua Station</h3>
                                            <p>Water Technology Solutions</p>
                                        </div>
                                    </div>
                                    <div className="ebrium-home-story-metrics">
                                        <div className="ebrium-home-metric">
                                            <span className="ebrium-home-metric-number">300%</span>
                                            <span className="ebrium-home-metric-label">Performance Boost</span>
                                        </div>
                                        <div className="ebrium-home-metric">
                                            <span className="ebrium-home-metric-number">99.9%</span>
                                            <span className="ebrium-home-metric-label">Uptime</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ebrium-home-story-quote">
                                    <FontAwesomeIcon icon={faQuoteRight} className="ebrium-home-large-quote" />
                                    <p>"Ebrium has truly excelled in cloud computing solutions, showing exemplary attention to detail in their delivery. Their team's responsiveness and professionalism ensured everything was completed on time, exceeding our expectations."</p>
                                    <div className="ebrium-home-story-author">
                                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/e10ef734fc09e853740b3e7b880f3e45-1627975564724/00662766-0750-4f3d-9e98-bc68c2657fb5.jpg" alt="Bakhtiyar Linove" />
                                        <div>
                                            <h4>Bakhtiyar Linove</h4>
                                            <p>CEO & Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ebrium-home-stories-grid">
                            <div className="ebrium-home-story-card">
                                <div className="ebrium-home-story-card-header">
                                    <div className="ebrium-home-story-rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <span>5.0</span>
                                    </div>
                                    <span className="ebrium-home-story-category">Mobile Development</span>
                                </div>
                                <p className="ebrium-home-story-text">"The mobile application developed by Ebrium has received overwhelmingly positive feedback from our users. It's intuitive, fast, and exceeded our expectations in every aspect."</p>
                                <div className="ebrium-home-story-author-mini">
                                    <img src={avatar} alt="Muhsn" />
                                    <div>
                                        <h5>Muhsn</h5>
                                        <span>Project Manager - Austria</span>
                                    </div>
                                </div>
                                <div className="ebrium-home-story-result">
                                    <FontAwesomeIcon icon={faRocket} />
                                    <span>40% increase in user engagement</span>
                                </div>
                            </div>

                            <div className="ebrium-home-story-card">
                                <div className="ebrium-home-story-card-header">
                                    <div className="ebrium-home-story-rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <span>5.0</span>
                                    </div>
                                    <span className="ebrium-home-story-category">AI & ML</span>
                                </div>
                                <p className="ebrium-home-story-text">"Ebrium demonstrated exceptional expertise in AI and machine learning, delivering a sophisticated recommendation engine with remarkable attention to detail."</p>
                                <div className="ebrium-home-story-author-mini">
                                    <img src={avatar} alt="Daniel Amirit" />
                                    <div>
                                        <h5>Daniel Amirit</h5>
                                        <span>PMO - Timeer Work Orders</span>
                                    </div>
                                </div>
                                <div className="ebrium-home-story-result">
                                    <FontAwesomeIcon icon={faBrain} />
                                    <span>85% prediction accuracy achieved</span>
                                </div>
                            </div>

                            <div className="ebrium-home-story-card">
                                <div className="ebrium-home-story-card-header">
                                    <div className="ebrium-home-story-rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <span>5.0</span>
                                    </div>
                                    <span className="ebrium-home-story-category">Enterprise Solution</span>
                                </div>
                                <p className="ebrium-home-story-text">"Working with Ebrium was transformative for our business. Their enterprise solution streamlined our operations and significantly improved our efficiency."</p>
                                <div className="ebrium-home-story-author-mini">
                                    <img src={avatar} alt="Sarah Johnson" />
                                    <div>
                                        <h5>Sarah Johnson</h5>
                                        <span>CTO - TechFlow Inc</span>
                                    </div>
                                </div>
                                <div className="ebrium-home-story-result">
                                    <FontAwesomeIcon icon={faAward} />
                                    <span>60% operational efficiency gain</span>
                                </div>
                            </div>
                        </div>

                        <div className="ebrium-home-stories-cta">
                            <div className="ebrium-home-stories-cta-content">
                                <h3>Ready to Write Your Success Story?</h3>
                                <p>Join hundreds of satisfied clients who have transformed their business with our solutions</p>
                                <div className="ebrium-home-stories-cta-buttons">
                                    <a href="https://wa.me/971563271660" target="_blank" rel="noopener noreferrer" className="ebrium-home-stories-primary-btn">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                        Start Your Project
                                    </a>
                                    <Link to="/testimonials" className="ebrium-home-stories-secondary-btn">
                                        View All Stories
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <a 
                href="https://wa.me/971563271660?text=Hi! I'm interested in discussing a project with Ebrium." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ebrium-home-whatsapp-float"
                title="Chat with us on WhatsApp"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            {/* Footer */}
            <Footer />
            </div>
    )
}

export default Home;