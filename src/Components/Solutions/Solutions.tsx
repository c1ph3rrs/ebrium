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
      <section className="solutions-overview">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Technology Solutions</h2>
            <p>Comprehensive suite of digital solutions tailored to meet the evolving needs of modern businesses. From mobile applications to artificial intelligence, we've got you covered.</p>
          </div>
          
          <div className="overview-grid">
            <div className="solution-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faMobile} />
              </div>
              <h3>Mobile App Development</h3>
              <p>Create stunning, high-performance mobile applications for Android and iOS platforms to engage your customers.</p>
              <Link to="/mobile" className="solution-link">Learn More</Link>
            </div>
            
            <div className="solution-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3>Web Applications</h3>
              <p>Build modern, responsive web applications and websites that provide seamless user experiences across devices.</p>
              <Link to="/web" className="solution-link">Learn More</Link>
            </div>
            
            <div className="solution-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faCloud} />
              </div>
              <h3>Cloud Services</h3>
              <p>Harness the power of cloud computing with our scalable, secure, and efficient cloud infrastructure solutions.</p>
              <Link to="/cloud" className="solution-link">Learn More</Link>
            </div>
            
            <div className="solution-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h3>AI & Machine Learning</h3>
              <p>Leverage the power of artificial intelligence and machine learning to gain insights and automate processes.</p>
              <Link to="/aiml" className="solution-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section className="solution-section mobile-section">
        <div className="container">
          <div className="solution-content">
            <div className="solution-info">
              <span className="solution-category">Mobile Development</span>
              <h2>Mobile App Development</h2>
              <p>Create powerful, intuitive mobile applications that engage users and drive business growth. Our mobile development team specializes in building native and cross-platform solutions that deliver exceptional performance and user experience.</p>
              
              <div className="solution-features">
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Native Android Apps</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Native iOS Apps</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cross-Platform Solutions</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Flutter Development</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>ReactNative Apps</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>App Store Optimization</span>
                </div>
              </div>
              
              <div className="why-choose-box">
                <h3>Why Choose Our Mobile Development</h3>
                <ul className="benefits-list">
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
              
              <Link to="/mobile" className="solution-btn">
                Get Mobile Development Service
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
            
            <div className="solution-image">
              <div className="image-overlay"></div>
              <img src="../../assets/mobile_development.jpg" alt="Mobile App Development" />
            </div>
          </div>
        </div>
      </section>

      {/* Web Application Section */}
      <section className="solution-section web-section">
        <div className="container">
          <div className="solution-content reverse">
            <div className="solution-info">
              <span className="solution-category">Web Development</span>
              <h2>Web Applications</h2>
              <p>Build modern, scalable web applications that provide seamless user experiences across all devices. Our web development team creates custom solutions tailored to your specific business needs, from corporate websites to complex web platforms.</p>
              
              <div className="solution-features">
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Custom Website Development</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Responsive Web Design</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>CMS Development</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>E-commerce Solutions</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Progressive Web Apps</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Admin Dashboards</span>
                </div>
              </div>
              
              <div className="why-choose-box">
                <h3>Why Choose Our Web Development</h3>
                <ul className="benefits-list">
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
              
              <Link to="/web" className="solution-btn">
                Get Web Development Service
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
            
            <div className="solution-image">
              <div className="image-overlay"></div>
              <img src="../../assets/web_development.jpg" alt="Web Application Development" />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="solution-section cloud-section">
        <div className="container">
          <div className="solution-content">
            <div className="solution-info">
              <span className="solution-category">Cloud Computing</span>
              <h2>Cloud Services</h2>
              <p>Harness the power of cloud computing with our comprehensive cloud services. We help businesses migrate to the cloud, optimize their infrastructure, and implement secure, scalable solutions that drive efficiency and reduce costs.</p>
              
              <div className="solution-features">
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cloud Migration</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Hybrid & Multi-Cloud</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cloud Infrastructure</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>DevOps Solutions</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cloud Security</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Serverless Architecture</span>
                </div>
              </div>
              
              <div className="why-choose-box">
                <h3>Why Choose Our Cloud Services</h3>
                <ul className="benefits-list">
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
              
              <Link to="/cloud" className="solution-btn">
                Get Cloud Service
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
            
            <div className="solution-image">
              <div className="image-overlay"></div>
              <img src="../../assets/cloud_services.jpg" alt="Cloud Services" />
            </div>
          </div>
        </div>
      </section>

      {/* AI & Machine Learning Section */}
      <section className="solution-section aiml-section">
        <div className="container">
          <div className="solution-content reverse">
            <div className="solution-info">
              <span className="solution-category">AI & ML</span>
              <h2>AI & Machine Learning</h2>
              <p>Leverage the power of artificial intelligence and machine learning to gain valuable insights, automate processes, and create intelligent applications. Our AI experts develop cutting-edge solutions that help businesses make data-driven decisions and stay ahead of the competition.</p>
              
              <div className="solution-features">
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Predictive Analytics</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Natural Language Processing</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Computer Vision</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Recommendation Systems</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Chatbots & Virtual Assistants</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>AI Integration Services</span>
                </div>
              </div>
              
              <div className="why-choose-box">
                <h3>Why Choose Our AI & ML Services</h3>
                <ul className="benefits-list">
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
              
              <Link to="/aiml" className="solution-btn">
                Get AI & ML Service
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
            
            <div className="solution-image">
              <div className="image-overlay"></div>
              <img src="../../assets/aiml_services.jpg" alt="AI & Machine Learning" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Get in touch with our team to discuss how our technology solutions can help address your business challenges and drive growth.</p>
            <Link to="/contact" className="cta-btn">Contact Us Today</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;
