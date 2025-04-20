import './home.css'
import aboutImage from '../../assets/about_us.jpeg';
import avatar from '../../assets/avatar.jpg';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';


const Home = () => {
    

    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }
    
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    

    return (
        <div className="page-wrapper">
            <section className="home main__container">
                {/* Navbar */}
                
                <Navbar />

                {/* Hero Section */}
                <div className="main__text">
                    <h1 className="animated-text">Transform Your Ideas Into Digital Reality</h1>
                    <p className="subtitle">
                        Delivering Innovative, Scalable & Future-Ready Solutions
                    </p>
                </div>
                <div className='what__we__offer'>
                    <span>Our Expertise</span>
                    <div className="hero-text">
                        <h1>
                            <Typewriter
                                words={[
                                    'Custom Software Development ✨',
                                    'Mobile App Development 📱',
                                    'Advanced Data Analytics 📊',
                                    'Enterprise Cloud Solutions ☁️',
                                    'AI & Machine Learning 🤖',
                                    'Modern Web Development 💻'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={40}
                                delaySpeed={2500}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </h1>
                        <p className="hero-description">
                            Partner with us to build cutting-edge digital solutions that drive your business forward
                        </p>
                        <div className="cta-buttons">
                            <a href="#services" className="btn btn-primary">Explore Services</a>
                            <a href="#contact" className="btn btn-secondary">Contact Us</a>
                        </div>
                    </div>
                </div>
                
                {/* Animated background shapes */}
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">Comprehensive Solutions For Your Digital Needs</p>
                    </div>
                    
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                            <i className='bx bx-devices' ></i>
                            </div>
                            <h3>Mobile App Development</h3>
                            <p>Native and cross-platform solutions that provide seamless experiences across devices.</p>
                            <Link to="/mob" className='service-link'>Learn More <span>→</span></Link>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-globe'></i>
                            </div>
                            <h3>Web Development</h3>
                            <p>Responsive, fast, and user-friendly websites and web applications tailored for your needs.</p>
                            <a href="#web-dev" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-brain'></i>
                            </div>
                            <h3>AI & Machine Learning</h3>
                            <p>Intelligent solutions that analyze data, learn patterns, and make smart decisions.</p>
                            <a href="#ai-ml" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-cloud'></i>
                            </div>
                            <h3>Cloud Solutions</h3>
                            <p>Scalable cloud infrastructure and migration services to optimize your operations.</p>
                            <a href="#cloud" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-chart'></i>
                            </div>
                            <h3>Business Intelligence</h3>
                            <p>Data analytics solutions that provide actionable insights for informed decision-making.</p>
                            <a href="#bi" className="service-link">Learn More <span>→</span></a>
                        </div>
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <i className='bx bx-shield-alt'></i>
                            </div>
                            <h3>Cybersecurity Services</h3>
                            <p>Protect your digital assets with comprehensive security solutions and best practices.</p>
                            <a href="#security" className="service-link">Learn More <span>→</span></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partners Section */}
            <section className="partners-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Trusted By</h2>
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
                                <img src="https://i0.wp.com/elite-soft.io/website_e32d1e8d/wp-content/uploads/2024/03/Untitled-design-41.png" alt="Elite-soft" />
                                <p>Elite Soft</p>
                            </div>
                            <div className="partner-logo">
                                <img src="https://i0.wp.com/elite-soft.io/website_e32d1e8d/wp-content/uploads/2024/03/logo.png" alt="whisper" />
                                <p>Whisper</p>
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
                                <h3>Development</h3>
                                <p>Our expert team designs and develops your solution using agile methodologies and best practices.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">3</div>
                            <div className="process-content">
                                <h3>Testing</h3>
                                <p>Rigorous quality assurance ensures your solution works flawlessly across all platforms and scenarios.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="process-number">4</div>
                            <div className="process-content">
                                <h3>Launch</h3>
                                <p>We help you deploy your solution and provide ongoing support to ensure continuous performance.</p>
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
                        <p className="section-subtitle">Our Success by the Numbers</p>
                    </div>
                    
                    <div className="stats-container">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-smile'></i>
                            </div>
                            <div className="stat-number">30+</div>
                            <div className="stat-title">Happy Clients</div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-briefcase-alt'></i>
                            </div>
                            <div className="stat-number">50+</div>
                            <div className="stat-title">Projects Completed</div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-coffee'></i>
                            </div>
                            <div className="stat-number">2000+</div>
                            <div className="stat-title">Cups of Coffee</div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className='bx bx-user-check'></i>
                            </div>
                            <div className="stat-number">99%</div>
                            <div className="stat-title">Client Retention</div>
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
                                <p>"The mobile app developed by Ebrium has received overwhelmingly positive feedback from our users. It's intuitive, fast, and exactly what we needed."</p>
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
    )
}

export default Home;