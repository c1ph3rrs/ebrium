import React, { useState } from 'react';
import './solutions.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';

// Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobile, faGlobe, faCloud, faBrain, 
  faCheck, faAngleRight, faArrowRight, 
  faLaptopCode, faServer, faShieldAlt, 
  faRocket, faCog, faCode, faHeadset, faChartLine,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake';

const Solutions: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="solutions-page-wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="ebrium-solutions-hero">
        <div className="ebrium-solutions-hero-bg"></div>
        <div className="ebrium-solutions-hero-overlay"></div>
        <div className="container">
          <div className="ebrium-solutions-hero-content">
            <div className="ebrium-solutions-hero-text">
              <span className="ebrium-solutions-hero-badge">Tech Solutions</span>
              <h1 className="ebrium-solutions-hero-title">Innovative Tech <span className="ebrium-solutions-highlight">Solutions</span></h1>
              <p className="ebrium-solutions-hero-description">
                We deliver cutting-edge technology solutions that help businesses transform, innovate, and grow. Our expertise spans mobile, web, cloud, and AI to address your unique challenges.
              </p>
              <div className="ebrium-solutions-hero-buttons">
                <Link to="/contact" className="ebrium-solutions-primary-btn">
                  Get Started
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link to="/about" className="ebrium-solutions-secondary-btn">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="ebrium-solutions-hero-visual">
              <div className="ebrium-solutions-hero-shapes">
                <div className="ebrium-solutions-shape ebrium-solutions-shape-1"></div>
                <div className="ebrium-solutions-shape ebrium-solutions-shape-2"></div>
                <div className="ebrium-solutions-shape ebrium-solutions-shape-3"></div>
              </div>
              <div className="ebrium-solutions-hero-cards">
                <div className="ebrium-solutions-hero-card">
                  <div className="ebrium-solutions-hero-card-icon">
                    <FontAwesomeIcon icon={faMobile} />
                  </div>
                  <h3>Mobile Apps</h3>
                </div>
                <div className="ebrium-solutions-hero-card">
                  <div className="ebrium-solutions-hero-card-icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <h3>Web Apps</h3>
                </div>
                <div className="ebrium-solutions-hero-card">
                  <div className="ebrium-solutions-hero-card-icon">
                    <FontAwesomeIcon icon={faCloud} />
                  </div>
                  <h3>Cloud Services</h3>
                </div>
                <div className="ebrium-solutions-hero-card">
                  <div className="ebrium-solutions-hero-card-icon">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <h3>AI & ML</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="ebrium-solutions-scroll-indicator">
            <span>Scroll to explore</span>
            <FontAwesomeIcon icon={faChevronDown} bounce />
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="ebrium-solutions-overview">
        <div className="container">
          <div className="ebrium-solutions-section-header">
            <h2 className="ebrium-solutions-section-title">Our Technology Solutions</h2>
            <p className="ebrium-solutions-section-subtitle">Comprehensive suite of digital solutions tailored to meet the evolving needs of modern businesses. From mobile applications to artificial intelligence, we've got you covered.</p>
          </div>

          <div className="ebrium-solutions-overview-grid">
            <div className="ebrium-solutions-overview-card">
              <div className="ebrium-solutions-overview-card-icon">
                <FontAwesomeIcon icon={faMobile} />
              </div>
              <h3>Mobile App Development</h3>
              <p>Create stunning, high-performance mobile applications for Android and iOS platforms to engage your customers.</p>
              <Link to="/mobile" className="ebrium-solutions-overview-link">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className="ebrium-solutions-overview-card">
              <div className="ebrium-solutions-overview-card-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3>Web Applications</h3>
              <p>Build modern, responsive web applications and websites that provide seamless user experiences across devices.</p>
              <Link to="/web" className="ebrium-solutions-overview-link">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className="ebrium-solutions-overview-card">
              <div className="ebrium-solutions-overview-card-icon">
                <FontAwesomeIcon icon={faCloud} />
              </div>
              <h3>Cloud Services</h3>
              <p>Harness the power of cloud computing with our scalable, secure, and efficient cloud infrastructure solutions.</p>
              <Link to="/cloud" className="ebrium-solutions-overview-link">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className="ebrium-solutions-overview-card">
              <div className="ebrium-solutions-overview-card-icon">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h3>AI & Machine Learning</h3>
              <p>Leverage the power of artificial intelligence and machine learning to gain insights and automate processes.</p>
              <Link to="/aiml" className="ebrium-solutions-overview-link">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section className="ebrium-solutions-service-section ebrium-solutions-mobile-section">
        <div className="container">
          <div className="ebrium-solutions-service-content">
            <div className="ebrium-solutions-service-info">
              <span className="ebrium-solutions-service-category">Mobile Development</span>
              <h2 className="ebrium-solutions-service-title">Mobile App Development</h2>
              <p className="ebrium-solutions-service-description">Create powerful, intuitive mobile applications that engage users and drive business growth. Our mobile development team specializes in building native and cross-platform solutions that deliver exceptional performance and user experience.</p>

              <div className="ebrium-solutions-service-features">
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Native Android Apps</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Native iOS Apps</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cross-Platform Solutions</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Flutter Development</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>React Native Apps</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>App Store Optimization</span>
                </div>
              </div>

              <div className="ebrium-solutions-service-benefits">
                <h3>Why Choose Our Mobile Development</h3>
                <ul className="ebrium-solutions-service-benefits-list">
                  <li>
                    <FontAwesomeIcon icon={faRocket} />
                    <span>High-performance applications optimized for speed</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faUsers} />
                    <span>User-centric design approach for maximum engagement</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Secure development practices protecting user data</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHeadset} />
                    <span>Ongoing support and maintenance services</span>
                  </li>
                </ul>
              </div>

              <Link to="/mobile" className="ebrium-solutions-service-btn">
                Get Mobile Development Service
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>

            <div className="ebrium-solutions-service-image">
              <div className="ebrium-solutions-service-image-overlay"></div>
              <img src="../../assets/mobile_development.jpg" alt="Mobile App Development" />
            </div>
          </div>
        </div>
      </section>

      {/* Web Application Section */}
      <section className="ebrium-solutions-service-section ebrium-solutions-web-section">
        <div className="container">
          <div className="ebrium-solutions-service-content ebrium-solutions-reverse">
            <div className="ebrium-solutions-service-info">
              <span className="ebrium-solutions-service-category">Web Development</span>
              <h2 className="ebrium-solutions-service-title">Web Applications</h2>
              <p className="ebrium-solutions-service-description">Build modern, scalable web applications that provide seamless user experiences across all devices. Our web development team creates custom solutions tailored to your specific business needs, from corporate websites to complex web platforms.</p>

              <div className="ebrium-solutions-service-features">
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Custom Website Development</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Responsive Web Design</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>CMS Development</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>E-commerce Solutions</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Progressive Web Apps</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Admin Dashboards</span>
                </div>
              </div>

              <div className="ebrium-solutions-service-benefits">
                <h3>Why Choose Our Web Development</h3>
                <ul className="ebrium-solutions-service-benefits-list">
                  <li>
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <span>Modern technologies and frameworks for optimal performance</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCode} />
                    <span>Clean, maintainable code following best practices</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faRocket} />
                    <span>SEO-friendly development improving visibility</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHandshake} />
                    <span>Collaborative approach ensuring client satisfaction</span>
                  </li>
                </ul>
              </div>

              <Link to="/web" className="ebrium-solutions-service-btn">
                Get Web Development Service
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>

            <div className="ebrium-solutions-service-image">
              <div className="ebrium-solutions-service-image-overlay"></div>
              <img src="../../assets/web_development.jpg" alt="Web Application Development" />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="ebrium-solutions-service-section ebrium-solutions-cloud-section">
        <div className="container">
          <div className="ebrium-solutions-service-content">
            <div className="ebrium-solutions-service-info">
              <span className="ebrium-solutions-service-category">Cloud Computing</span>
              <h2 className="ebrium-solutions-service-title">Cloud Services</h2>
              <p className="ebrium-solutions-service-description">Harness the power of cloud computing with our comprehensive cloud services. We help businesses migrate to the cloud, optimize their infrastructure, and implement secure, scalable solutions that drive efficiency and reduce costs.</p>

              <div className="ebrium-solutions-service-features">
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cloud Migration</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Hybrid & Multi-Cloud</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cloud Infrastructure</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>DevOps Solutions</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cloud Security</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Serverless Architecture</span>
                </div>
              </div>

              <div className="ebrium-solutions-service-benefits">
                <h3>Why Choose Our Cloud Services</h3>
                <ul className="ebrium-solutions-service-benefits-list">
                  <li>
                    <FontAwesomeIcon icon={faServer} />
                    <span>Expertise across major cloud platforms (AWS, Azure, GCP)</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Robust security practices protecting your data</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCog} />
                    <span>Optimized configurations for cost-efficiency</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHeadset} />
                    <span>24/7 monitoring and support services</span>
                  </li>
                </ul>
              </div>

              <Link to="/cloud" className="ebrium-solutions-service-btn">
                Get Cloud Service
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>

            <div className="ebrium-solutions-service-image">
              <div className="ebrium-solutions-service-image-overlay"></div>
              <img src="../../assets/cloud_services.jpg" alt="Cloud Services" />
            </div>
          </div>
        </div>
      </section>

      {/* AI & Machine Learning Section */}
      <section className="ebrium-solutions-service-section ebrium-solutions-aiml-section">
        <div className="container">
          <div className="ebrium-solutions-service-content ebrium-solutions-reverse">
            <div className="ebrium-solutions-service-info">
              <span className="ebrium-solutions-service-category">AI & ML</span>
              <h2 className="ebrium-solutions-service-title">AI & Machine Learning</h2>
              <p className="ebrium-solutions-service-description">Leverage the power of artificial intelligence and machine learning to gain valuable insights, automate processes, and create intelligent applications. Our AI experts develop cutting-edge solutions that help businesses make data-driven decisions and stay ahead of the competition.</p>

              <div className="ebrium-solutions-service-features">
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Predictive Analytics</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Natural Language Processing</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Computer Vision</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Recommendation Systems</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Chatbots & Virtual Assistants</span>
                </div>
                <div className="ebrium-solutions-service-feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>AI Integration Services</span>
                </div>
              </div>

              <div className="ebrium-solutions-service-benefits">
                <h3>Why Choose Our AI & ML Services</h3>
                <ul className="ebrium-solutions-service-benefits-list">
                  <li>
                    <FontAwesomeIcon icon={faBrain} />
                    <span>Specialized expertise in advanced AI technologies</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChartLine} />
                    <span>Data-driven approach delivering actionable insights</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faRocket} />
                    <span>Scalable solutions growing with your business</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHandshake} />
                    <span>Ethical AI development respecting privacy and fairness</span>
                  </li>
                </ul>
              </div>

              <Link to="/aiml" className="ebrium-solutions-service-btn">
                Get AI & ML Service
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>

            <div className="ebrium-solutions-service-image">
              <div className="ebrium-solutions-service-image-overlay"></div>
              <img src="../../assets/aiml_services.jpg" alt="AI & Machine Learning" />
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

      {/* CTA Section */}
      <section className="ebrium-solutions-cta">
        <div className="container">
          <div className="ebrium-solutions-cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Get in touch with our team to discuss how our technology solutions can help address your business challenges and drive growth.</p>
            <Link to="/contact" className="ebrium-solutions-cta-btn">
              Contact Us Today
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;
