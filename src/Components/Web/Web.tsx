
import aboutImage from '../../assets/about_us.jpeg';
import avatar from '../../assets/avatar.jpg';
import { useState } from 'react'
import androidEmulator from '../../assets/app1.jpg';
import iosEmulator from '../../assets/app2.jpg';

import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

// import './web.css';


const Web = () => {

    
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    
    
    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    }

    return (
        <div className="page-wrapper">
            <Navbar />

                {/* Hero Section */}
            <section className="mob-hero">
                <div className="container">
                    <div className="mob-hero-content">
                        <div className="mob-hero-text">
                            <h1 className="animated-title">Web App Development Services</h1>
                            <p className="hero-subtitle">Transform Your Ideas Into Powerful, User-Friendly Web Applications</p>
                            <div className="cta-buttons">
                                <a href="#get-quote" className="btn btn-primary">Get a Quote</a>
                                <a href="#services" className="btn btn-secondary">Explore Services</a>
                            </div>
                        </div>
                        <div className="mob-hero-image">
                            <div className="emulator android-emulator">
                                <img src={androidEmulator} alt="Android App" />
                            </div>
                            <div className="emulator ios-emulator">
                                <img src={iosEmulator} alt="iOS App" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Animated background shapes */}
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
            </section>


            <section id="services" className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Web Solutions</h2>
                        <p className="section-subtitle">Modern, Scalable Websites & Admin Panels</p>
                    </div>
                    
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-code-block'></i>
                            </div>
                            <h3>Custom Websites</h3>
                            <p>Tailor-made websites designed to meet your specific business needs and objectives.</p>
                            <a href="#custom-web" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-edit'></i>
                            </div>
                            <h3>CMS Development</h3>
                            <p>Content management systems that make updating your website simple and efficient.</p>
                            <a href="#cms-dev" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-cart'></i>
                            </div>
                            <h3>E-commerce Solutions</h3>
                            <p>Powerful online stores with seamless payment processing and inventory management.</p>
                            <a href="#ecommerce" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-mobile-alt'></i>
                            </div>
                            <h3>Progressive Web Apps</h3>
                            <p>Fast, reliable, and engaging web applications that work offline and feel like native apps.</p>
                            <a href="#pwa" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-server'></i>
                            </div>
                            <h3>Admin Panels</h3>
                            <p>Intuitive dashboards and control panels to manage your business operations efficiently.</p>
                            <a href="#admin-panels" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-analyse'></i>
                            </div>
                            <h3>Web Optimization</h3>
                            <p>Performance tuning and SEO enhancements to improve your website's visibility and speed.</p>
                            <a href="#optimization" className="service-link">Learn More <span>→</span></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Technologies We Use</h2>
                        <p className="section-subtitle">Cutting-Edge Tools for Modern Web Development</p>
                    </div>
                    
                    <div className="technologies-grid">
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-html5'></i>
                            </div>
                            <h3>HTML5</h3>
                            <p>Modern markup language for structuring web content</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-css3'></i>
                            </div>
                            <h3>CSS</h3>
                            <p>Styling language for creating beautiful interfaces</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-react'></i>
                            </div>
                            <h3>React.js</h3>
                            <p>JavaScript library for building interactive UIs</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-nodejs'></i>
                            </div>
                            <h3>Node.js</h3>
                            <p>JavaScript runtime for server-side applications</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-typescript'></i>
                            </div>
                            <h3>TypeScript</h3>
                            <p>Typed superset of JavaScript for robust applications</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-angular'></i>
                            </div>
                            <h3>Angular</h3>
                            <p>Platform for building web applications</p>
                        </div>
                        
                        <div className="tech-card">
                            <div className="tech-icon">
                                <i className='bx bxl-vuejs'></i>
                            </div>
                            <h3>Vue.js</h3>
                            <p>Progressive framework for building user interfaces</p>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className="partners-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Trusted Partners</h2>
                        <p className="section-subtitle">Companies That Rely On Our Expertise</p>
                    </div>
                    
                    <div className="marquee-container">
                        <div className="marquee-content">
                            {/* Repeat these for continuous animation */}
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

            {/* About Us Section */}
            <section id="about" className="about-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Who We Are</h2>
                        <p className="section-subtitle">Innovation-Driven Digital Solutions Provider</p>
                    </div>
                    
                    <div className="about-content">
                        <div className="about-image">
                            <img src={aboutImage} alt="About Us" />
                        </div>
                        <div className="about-text">
                            <h3>Driving Digital Transformation</h3>
                            <p>
                                At Ebrium, we combine technical expertise with creative problem-solving to deliver digital solutions that help businesses thrive in today's competitive landscape.
                            </p>
                            <p>
                                Our team of experienced developers, designers, and strategists work together to create customized solutions that address your unique challenges and help you achieve your business goals.
                            </p>
                            <p>
                                With a focus on innovation, quality, and client satisfaction, we've helped businesses of all sizes across various industries transform their digital presence and operations.
                            </p>
                            <a href="#contact" className="btn btn-primary">Get to know us</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Deliver Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">How We Deliver Results</h2>
                        <p className="section-subtitle">Our Proven Development Process</p>
                    </div>
                    
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <div className="process-content">
                                <h3>Consultation</h3>
                                <p>We start by understanding your business needs, goals, and challenges to develop a tailored approach.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">2</div>
                            <div className="process-content">
                                <h3>Design</h3>
                                <p>Our designers create intuitive, engaging interfaces that align with your brand and user expectations.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <div className="process-content">
                                <h3>Build</h3>
                                <p>Our development team brings designs to life using modern technologies and best practices.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <div className="process-content">
                                <h3>Launch</h3>
                                <p>We deploy your solution and provide ongoing support to ensure continuous performance.</p>
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
                        <p className="section-subtitle">Benefits of Working With Our Web App Development Team</p>
                    </div>
                    
                    <div className="why-choose-grid">
                        <div className="why-choose-card">
                            <div className="why-choose-icon">
                                <i className='bx bx-badge-check'></i>
                            </div>
                            <h3>Expertise</h3>
                            <p>Our team consists of experienced developers with deep knowledge in web technologies and frameworks.</p>
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
                                <div className="price">$1,499</div>
                                <p>Perfect for startups and MVPs</p>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                <li><i className='bx bx-check'></i> Responsive Website Design</li>
                                <li><i className='bx bx-check'></i> Up to 5 Pages</li>
                                <li><i className='bx bx-check'></i> Contact Form</li>
                                <li><i className='bx bx-check'></i> Web Optimization</li>
                                <li><i className='bx bx-check'></i> Basic SEO Setup</li>
                                <li><i className='bx bx-x'></i> Content Management System</li>
                                <li><i className='bx bx-x'></i> E-commerce Functionality</li>
                                </ul>
                            </div>
                            <a href="#get-quote" className="btn btn-outline">Get Started</a>
                        </div>
                        
                        <div className="pricing-card featured">
                            <div className="popular-tag">Most Popular</div>
                            <div className="pricing-header">
                                <h3>Professional</h3>
                                <div className="price">$3,999</div>
                                <p>For growing businesses</p>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                <li><i className='bx bx-check'></i> Responsive Website Design</li>
                                <li><i className='bx bx-check'></i> Up to 10 Pages</li>
                                <li><i className='bx bx-check'></i> Advanced Contact Forms</li>
                                <li><i className='bx bx-check'></i> Web Optimization</li>
                                <li><i className='bx bx-check'></i> Comprehensive SEO Setup</li>
                                <li><i className='bx bx-check'></i> Content Management System</li>
                                <li><i className='bx bx-check'></i> Basic Analytics Integration</li>
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
                                <li><i className='bx bx-check'></i> Custom Website Design</li>
                                <li><i className='bx bx-check'></i> Unlimited Pages</li>
                                <li><i className='bx bx-check'></i> Advanced Functionality</li>
                                <li><i className='bx bx-check'></i> E-commerce Integration</li>
                                <li><i className='bx bx-check'></i> Advanced SEO Strategy</li>
                                <li><i className='bx bx-check'></i> Custom Admin Dashboard</li>
                                <li><i className='bx bx-check'></i> Advanced Analytics & Reporting</li>
                                </ul>
                            </div>
                            <a href="#get-quote" className="btn btn-outline">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}

            <section className="faq-contact-section">
                <div className="container">
                    <div className="faq-contact-container">
                        <div className="faq-section">
                            <h2>Web Development FAQs</h2>
                            <div className="accordion">
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 0 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(0)}
                                    >
                                        <h3>How long does it take to build a website?</h3>
                                        <i className={`bx ${activeFaq === 0 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 0 ? 'active' : ''}`}>
                                        <p>The timeline varies depending on the complexity of your project. A simple website might take 2-4 weeks, while more complex projects with custom functionality can take 2-3 months. We'll provide a detailed timeline during our initial consultation.</p>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 1 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(1)}
                                    >
                                        <h3>Do you offer maintenance after the website is live?</h3>
                                        <i className={`bx ${activeFaq === 1 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 1 ? 'active' : ''}`}>
                                        <p>Yes, we offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security monitoring, performance optimization, and technical support.</p>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 2 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(2)}
                                    >
                                        <h3>What industries do you serve?</h3>
                                        <i className={`bx ${activeFaq === 2 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 2 ? 'active' : ''}`}>
                                        <p>We work with clients across various industries including healthcare, education, e-commerce, finance, real estate, hospitality, and technology. Our diverse experience allows us to understand the unique requirements of different sectors.</p>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <div 
                                        className={`accordion-header ${activeFaq === 3 ? 'active' : ''}`}
                                        onClick={() => toggleFaq(3)}
                                    >
                                        <h3>Can you improve my existing website?</h3>
                                        <i className={`bx ${activeFaq === 3 ? 'bx-minus' : 'bx-plus'}`}></i>
                                    </div>
                                    <div className={`accordion-content ${activeFaq === 3 ? 'active' : ''}`}>
                                        <p>Absolutely! We offer website redesign and optimization services to enhance the performance, appearance, and functionality of your existing website. We can work with your current platform or migrate to a more suitable solution if needed.</p>
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


            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Testimonials</h2>
                        <p className="section-subtitle">What Our Clients Say About Us</p>
                    </div>
                    
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Ebrium Coders has truly EXCELLED in the cloud computing sphere, showing exemplary attention to details in his delivery. Working with him was a pleasure, marked by remarkable responsiveness and politeness, ensuring everything was completed on time. 😊"</p>
                            </div>
                            <div className="testimonial-author">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/e10ef734fc09e853740b3e7b880f3e45-1627975564724/00662766-0750-4f3d-9e98-bc68c2657fb5.jpg" alt="Client 1" />
                                <div className="author-details">
                                    <h4>Bakhtiyar Linove</h4>
                                    <p>CEO, Aqua Station.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"The Web app developed by Ebrium has received overwhelmingly positive feedback from our users. It's intuitive, fast, and exactly what we needed."</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={avatar} alt="Client 2" />
                                <div className="author-details">
                                    <h4>Muhsn</h4>
                                    <p>Austria </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Ebrium Coders has demonstrated exceptional expertise in AI and machine learning, delivering a sophisticated recommendation engine with remarkable attention to detail. Their responsiveness and professionalism made the entire process smooth and efficient."</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={avatar} alt="Client 3" />
                                <div className="author-details">
                                    <h4>Daniel Amirit</h4>
                                    <p>PMO Timeer Work Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Web;