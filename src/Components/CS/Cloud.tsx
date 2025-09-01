import React, { useState } from 'react';
import './cloud-services.css';



import  cloudMigration  from '../../assets/cloud-migrations.svg';  


import cloudImage1 from '../../assets/main_logo.png'; // Add these images to your assets
import cloudImage2 from '../../assets/main_logo.png'; // Add these images to your assets


import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCloud, 
  faServer, 
  faDatabase, 
  faNetworkWired, 
  faArrowRight, 
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Cloud: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState('aws');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  

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
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="ebrium-cloud-hero">
        <div className="ebrium-cloud-hero-bg"></div>
        <div className="ebrium-cloud-hero-overlay"></div>
        <div className="container">
          <div className="ebrium-cloud-hero-content">
            <div className="ebrium-cloud-hero-text">
              <span className="ebrium-cloud-hero-badge">Cloud Solutions</span>
              <h1 className="ebrium-cloud-hero-title">Enterprise <span className="ebrium-cloud-highlight">Cloud</span> Services</h1>
              <p className="ebrium-cloud-hero-description">
                Unlock the potential of cloud computing with our expert solutions. From seamless migrations to robust cloud management, we empower your business with cutting-edge solutions from top platforms. Enhance scalability, improve security, and drive innovation—all while reducing costs.
              </p>
              <div className="ebrium-cloud-hero-buttons">
                <a href="#get-quote" className="ebrium-cloud-primary-btn">
                  Get a Quote
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
                <a href="#cloud-services" className="ebrium-cloud-secondary-btn">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="ebrium-cloud-hero-visual">
              <div className="ebrium-cloud-hero-shapes">
                <div className="ebrium-cloud-shape ebrium-cloud-shape-1"></div>
                <div className="ebrium-cloud-shape ebrium-cloud-shape-2"></div>
                <div className="ebrium-cloud-shape ebrium-cloud-shape-3"></div>
              </div>
              <div className="ebrium-cloud-hero-cards">
                <div className="ebrium-cloud-hero-card">
                  <div className="ebrium-cloud-hero-card-icon">
                    <FontAwesomeIcon icon={faNetworkWired} />
                  </div>
                  <h3>AWS</h3>
                </div>
                <div className="ebrium-cloud-hero-card">
                  <div className="ebrium-cloud-hero-card-icon">
                    <FontAwesomeIcon icon={faDatabase} />
                  </div>
                  <h3>Azure</h3>
                </div>
                <div className="ebrium-cloud-hero-card">
                  <div className="ebrium-cloud-hero-card-icon">
                    <FontAwesomeIcon icon={faServer} />
                  </div>
                  <h3>Google Cloud</h3>
                </div>
                <div className="ebrium-cloud-hero-card">
                  <div className="ebrium-cloud-hero-card-icon">
                    <FontAwesomeIcon icon={faCloud} />
                  </div>
                  <h3>IBM Cloud</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="ebrium-cloud-scroll-indicator">
            <span>Scroll to explore</span>
            <FontAwesomeIcon icon={faChevronDown} bounce />
          </div>
        </div>
      </section>

      {/* Partners Section - similar to marquee-container in MOB */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Trusted Partners</h2>
            <p className="section-subtitle">Leading Cloud Technology Providers</p>
          </div>
          
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Cloud partners */}
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                <p>Amazon Web Services</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" />
                <p>Microsoft Azure</p>
              </div>
              <div className="partner-logo">
                <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" alt="Google Cloud" />
                <p>Google Cloud</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Cloud" />
                <p>IBM Cloud</p>
              </div>
              
              {/* Duplicate for seamless scrolling */}
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                <p>Amazon Web Services</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" />
                <p>Microsoft Azure</p>
              </div>
              <div className="partner-logo">
                <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" alt="Google Cloud" />
                <p>Google Cloud</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Cloud" />
                <p>IBM Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions Section - with tabs like MOB.tsx */}
      <section id="cloud-services" className="cloud-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Cloud Solutions</h2>
            <p className="section-subtitle">Comprehensive Cloud Services For Your Business Needs</p>
          </div>

          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-button ${activeTab === 'aws' ? 'active' : ''}`}
                onClick={() => setActiveTab('aws')}
              >
                <i className='bx bxl-aws'></i> Cloud Migration
              </button>
              <button 
                className={`tab-button ${activeTab === 'azure' ? 'active' : ''}`}
                onClick={() => setActiveTab('azure')}
              >
                <i className='bx bx-cloud'></i> Hybrid & Multi-Cloud
              </button>
              <button 
                className={`tab-button ${activeTab === 'manage' ? 'active' : ''}`}
                onClick={() => setActiveTab('manage')}
              >
                <i className='bx bx-cog'></i> Cloud Management
              </button>
              <button 
                className={`tab-button ${activeTab === 'devops' ? 'active' : ''}`}
                onClick={() => setActiveTab('devops')}
              >
                <i className='bx bx-code-alt'></i> DevOps Services
              </button>
            </div>

            <div className="tabs-content">
              <div className={`tab-panel ${activeTab === 'aws' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>Cloud Migration</h3>
                  <p>We provide comprehensive cloud migration services to help businesses move their applications, data, and infrastructure from on-premises environments or other cloud platforms to modern cloud solutions. Our expert team ensures smooth transitions with minimal disruption to your operations.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Assessment and planning of migration strategy</li>
                    <li><i className='bx bx-check'></i> Data migration with zero loss guarantee</li>
                    <li><i className='bx bx-check'></i> Application modernization during migration</li>
                    <li><i className='bx bx-check'></i> Post-migration testing and validation</li>
                    <li><i className='bx bx-check'></i> Phased implementation with minimal downtime</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={cloudMigration} alt="Cloud Migration" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'azure' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>Hybrid & Multi-Cloud Solutions</h3>
                  <p>Our hybrid and multi-cloud strategies give you the flexibility to operate seamlessly across different cloud platforms and on-premises infrastructure. This approach optimizes performance, cost, and compliance while avoiding vendor lock-in and maximizing existing investments.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Integration between on-premises and cloud resources</li>
                    <li><i className='bx bx-check'></i> Workload distribution across multiple clouds</li>
                    <li><i className='bx bx-check'></i> Consistent security and governance policies</li>
                    <li><i className='bx bx-check'></i> Cost optimization across platforms</li>
                    <li><i className='bx bx-check'></i> Disaster recovery between environments</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={cloudImage2} alt="Hybrid & Multi-Cloud Solutions" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'manage' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>Cloud Management</h3>
                  <p>Our comprehensive cloud management services ensure your cloud environment operates at peak performance and efficiency. We provide ongoing monitoring, optimization, and support to maximize your return on cloud investments while minimizing operational overhead.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> 24/7 infrastructure monitoring and alerts</li>
                    <li><i className='bx bx-check'></i> Performance optimization and scaling</li>
                    <li><i className='bx bx-check'></i> Security posture management</li>
                    <li><i className='bx bx-check'></i> Cost tracking and optimization</li>
                    <li><i className='bx bx-check'></i> Regular maintenance and updates</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={cloudImage1} alt="Cloud Management" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'devops' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>DevOps Services</h3>
                  <p>Our DevOps services combine development and operations to create a culture of collaboration and automation. We implement best practices, tools, and processes that accelerate software delivery while maintaining reliability and security in cloud environments.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> CI/CD pipeline implementation</li>
                    <li><i className='bx bx-check'></i> Infrastructure as Code (IaC)</li>
                    <li><i className='bx bx-check'></i> Containerization with Docker and Kubernetes</li>
                    <li><i className='bx bx-check'></i> Automated testing and deployment</li>
                    <li><i className='bx bx-check'></i> Monitoring and observability solutions</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={cloudImage2} alt="DevOps Services" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Cloud Platforms - using tech-section from MOB.tsx */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Key Cloud Platforms & Products</h2>
            <p className="section-subtitle">Industry-Leading Cloud Technologies We Specialize In</p>
          </div>
          
          <div className="technologies-grid">
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bxl-aws'></i>
              </div>
              <h3>Amazon EC2</h3>
              <p>Elastic compute resources to scale applications on demand.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-data'></i>
              </div>
              <h3>Amazon S3</h3>
              <p>Secure and durable storage for any type of data.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-server'></i>
              </div>
              <h3>Amazon RDS</h3>
              <p>Managed relational database service for high-performance applications.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-globe'></i>
              </div>
              <h3>CloudFront</h3>
              <p>Global content delivery network for faster data access.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bxl-microsoft'></i>
              </div>
              <h3>Microsoft Azure</h3>
              <p>Scalable infrastructure, AI solutions, and analytics tools.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-group'></i>
              </div>
              <h3>Microsoft Teams</h3>
              <p>Cloud-based communication and collaboration for modern businesses.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-cloud-upload'></i>
              </div>
              <h3>OneDrive</h3>
              <p>Secure cloud storage for seamless file sharing and backups.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-bar-chart-alt-2'></i>
              </div>
              <h3>Power BI</h3>
              <p>Cloud-powered business intelligence for actionable insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - using why-choose-us grid from MOB.tsx */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Benefits of Cloud Solutions</h2>
            <p className="section-subtitle">Advantages of Moving Your Business to the Cloud</p>
          </div>
          
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-dollar-circle'></i>
              </div>
              <h3>Cost Savings</h3>
              <p>Reduce IT expenses significantly with flexible pay-as-you-go models, eliminating the need for costly hardware and maintenance.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-expand-alt'></i>
              </div>
              <h3>Flexibility</h3>
              <p>Scale resources up or down instantly based on your business needs and demand fluctuations.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-group'></i>
              </div>
              <h3>Collaboration</h3>
              <p>Enable seamless teamwork with real-time document sharing and editing across locations.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-shield-quarter'></i>
              </div>
              <h3>Data Security</h3>
              <p>Protect your critical business information with advanced encryption and security protocols.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-revision'></i>
              </div>
              <h3>Disaster Recovery</h3>
              <p>Ensure business continuity with automated backups and rapid recovery solutions.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-world'></i>
              </div>
              <h3>Global Access</h3>
              <p>Access your applications and data from anywhere in the world with an internet connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - using process-timeline from MOB.tsx */}
      <section className="process-section cloud-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Cloud Implementation Process</h2>
            <p className="section-subtitle">A Structured Approach to Cloud Adoption</p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>Assessment</h3>
                <p>We begin by evaluating your current systems, infrastructure, and business requirements to identify the best cloud opportunities and develop a strategic roadmap.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>Planning</h3>
                <p>Our team designs tailored cloud solutions aligned with your business goals, including architecture planning, security considerations, and migration strategies.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Migration</h3>
                <p>We execute a seamless migration of your data, applications, and workflows to the cloud environment with minimal disruption to your operations.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3>Optimization</h3>
                <p>After deployment, we continuously monitor and optimize your cloud infrastructure for performance, cost efficiency, and security compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - using why-choose-us grid from MOB.tsx */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Cloud Solutions</h2>
            <p className="section-subtitle">What Sets Our Cloud Services Apart</p>
          </div>
          
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-badge-check'></i>
              </div>
              <h3>Certified Expertise</h3>
              <p>Our team includes AWS and Microsoft-certified cloud specialists with deep technical knowledge.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-package'></i>
              </div>
              <h3>End-to-End Solutions</h3>
              <p>We handle every aspect of cloud adoption from planning to ongoing management.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-bulb'></i>
              </div>
              <h3>Cutting-Edge Technology</h3>
              <p>We leverage the latest innovations from Amazon, Microsoft, and other cloud leaders.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-expand'></i>
              </div>
              <h3>Scalable Solutions</h3>
              <p>Our services are tailored for businesses of all sizes, from startups to large enterprises.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-lock-alt'></i>
              </div>
              <h3>Security First</h3>
              <p>We implement robust security measures and disaster recovery solutions for all cloud deployments.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-money'></i>
              </div>
              <h3>Cost Efficiency</h3>
              <p>We optimize your cloud spending with transparent pricing and measurable ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="quote-container">
            <div className="quote-form-container">
              <h2>Personalized Cloud Solutions at No Cost</h2>
              <p>Discover how cloud solutions can transform your business with our free consultation. Our experts will assess your requirements and provide tailored strategies to optimize your operations.</p>
              <a href="#get-quote" className="btn btn-primary">Schedule Your Free Consultation</a>
              {/* <div className="cta-highlight">
                <h3>Top Microsoft Products</h3>
              </div> */}
            </div>
            <div className="quote-image">
              <img src={cloudImage1} alt="Cloud Solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* Hire Me Section - Fiverr & Upwork */}
      <section className="hire-me-section">
        <div className="container">
          <div className="hire-me-content">
            <h2>Ready to Migrate to the Cloud?</h2>
            <p>Get expert cloud solutions from a trusted professional. Available on leading freelance platforms.</p>

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
            <img src={cloudImage1} alt="Cloud Solutions" />
          </div>
        </div>
      </section>

      {/* FAQ and Contact Form */}
      <section id="get-quote" className="faq-contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cloud Solutions FAQs</h2>
          </div>
          <div className="faq-contact-container">
            <div className="faq-section">
              <div className="accordion">
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 0 ? 'active' : ''}`}
                    onClick={() => toggleFaq(0)}
                  >
                    <h3>What is the difference between AWS and Microsoft Azure?</h3>
                    <i className={`bx ${activeFaq === 0 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 0 ? 'active' : ''}`}>
                    <p>AWS and Microsoft Azure are leading cloud platforms with distinct features. AWS offers a broader range of services and is known for scalability, while Azure integrates seamlessly with Microsoft products and is ideal for businesses already using Windows-based tools.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 1 ? 'active' : ''}`}
                    onClick={() => toggleFaq(1)}
                  >
                    <h3>How secure is cloud storage for sensitive data?</h3>
                    <i className={`bx ${activeFaq === 1 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 1 ? 'active' : ''}`}>
                    <p>Cloud storage employs advanced encryption, access controls, and compliance certifications to protect sensitive data. Our solutions implement industry best practices and regular security audits to ensure your information remains secure.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 2 ? 'active' : ''}`}
                    onClick={() => toggleFaq(2)}
                  >
                    <h3>Can you integrate cloud solutions with our existing IT setup?</h3>
                    <i className={`bx ${activeFaq === 2 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 2 ? 'active' : ''}`}>
                    <p>Yes, we specialize in hybrid cloud solutions that seamlessly integrate with your existing infrastructure. Our experts will design a transition plan that ensures compatibility and minimal disruption to your operations.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 3 ? 'active' : ''}`}
                    onClick={() => toggleFaq(3)}
                  >
                    <h3>How long does a typical cloud migration take?</h3>
                    <i className={`bx ${activeFaq === 3 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 3 ? 'active' : ''}`}>
                    <p>Migration timelines vary based on complexity and scope. Small projects may take a few weeks, while enterprise-level migrations might require 3-6 months. We provide detailed timelines during the assessment phase.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 4 ? 'active' : ''}`}
                    onClick={() => toggleFaq(4)}
                  >
                    <h3>What support do you offer post-migration?</h3>
                    <i className={`bx ${activeFaq === 4 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 4 ? 'active' : ''}`}>
                    <p>We provide comprehensive post-migration support including 24/7 monitoring, regular maintenance, optimization services, and technical assistance. Our team ensures your cloud environment operates at peak performance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="quick-contact-section">
              <h2>Get in Touch</h2>
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
                    <option value="basic">Basic Cloud Migration</option>
                    <option value="standard">Standard Cloud Management</option>
                    <option value="premium">Premium Hybrid Cloud</option>
                    <option value="enterprise">Enterprise Solutions</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea id="quick-message" placeholder="Tell us about your project" rows={3} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer will be rendered from a different component */}
      <Footer />
    </div>
  );
};

export default Cloud;
