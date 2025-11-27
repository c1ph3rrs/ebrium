import React, { useState } from 'react';
import './aiml.css';
import mainLogo from '../../assets/main_logo.png';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

const AIML: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState('genai');
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

      {/* Hero Section */}
      <section className="ebrium-aiml-hero">
        <div className="ebrium-aiml-hero-bg"></div>
        <div className="ebrium-aiml-hero-overlay"></div>
        <div className="container">
          <div className="ebrium-aiml-hero-content">
            <div className="ebrium-aiml-hero-text">
              <span className="ebrium-aiml-hero-badge">AI & Machine Learning</span>
              <h1 className="ebrium-aiml-hero-title">Transform Your Business with <span className="ebrium-aiml-highlight">AI</span> Solutions</h1>
              <p className="ebrium-aiml-hero-description">
                From generative AI to predictive analytics, our expert team delivers custom solutions that drive innovation, efficiency, and competitive advantage.
              </p>
              <div className="ebrium-aiml-hero-buttons">
                <a href="#get-quote" className="ebrium-aiml-primary-btn">
                  Get a Quote
                  <i className='bx bx-right-arrow-alt'></i>
                </a>
                <a href="#ai-services" className="ebrium-aiml-secondary-btn">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="ebrium-aiml-hero-visual">
              <div className="ebrium-aiml-hero-shapes">
                <div className="ebrium-aiml-shape ebrium-aiml-shape-1"></div>
                <div className="ebrium-aiml-shape ebrium-aiml-shape-2"></div>
                <div className="ebrium-aiml-shape ebrium-aiml-shape-3"></div>
              </div>
              <div className="ebrium-aiml-hero-cards">
                <div className="ebrium-aiml-hero-card">
                  <div className="ebrium-aiml-hero-card-icon">
                    <i className='bx bx-brain'></i>
                  </div>
                  <h3>Generative AI</h3>
                </div>
                <div className="ebrium-aiml-hero-card">
                  <div className="ebrium-aiml-hero-card-icon">
                    <i className='bx bx-bot'></i>
                  </div>
                  <h3>AI Agents</h3>
                </div>
                <div className="ebrium-aiml-hero-card">
                  <div className="ebrium-aiml-hero-card-icon">
                    <i className='bx bx-message-rounded-dots'></i>
                  </div>
                  <h3>Chatbots</h3>
                </div>
                <div className="ebrium-aiml-hero-card">
                  <div className="ebrium-aiml-hero-card-icon">
                    <i className='bx bx-line-chart'></i>
                  </div>
                  <h3>Machine Learning</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Trusted Partners</h2>
            <p className="section-subtitle">Leading AI Technology Providers</p>
          </div>
          
          <div className="marquee-container">
            <div className="marquee-content">
              {/* AI partners */}
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="OpenAI" />
                <p>OpenAI</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" />
                <p>TensorFlow</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="AWS" />
                <p>AWS</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Google_AI_Logo.svg" alt="Google AI" />
                <p>Google AI</p>
              </div>
              
              {/* Duplicate for seamless scrolling */}
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="OpenAI" />
                <p>OpenAI</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" />
                <p>TensorFlow</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="AWS" />
                <p>AWS</p>
              </div>
              <div className="partner-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Google_AI_Logo.svg" alt="Google AI" />
                <p>Google AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI ML Solutions Section */}
      <section id="ai-services" className="ai-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our AI & ML Solutions</h2>
            <p className="section-subtitle">Cutting-Edge Technologies For Tomorrow's Challenges</p>
          </div>

          <div className="tabs-container">
            <div className="tabs-header">
              <button 
                className={`tab-button ${activeTab === 'genai' ? 'active' : ''}`}
                onClick={() => setActiveTab('genai')}
              >
                <i className='bx bx-brain'></i> Generative AI
              </button>
              <button 
                className={`tab-button ${activeTab === 'ml' ? 'active' : ''}`}
                onClick={() => setActiveTab('ml')}
              >
                <i className='bx bx-line-chart'></i> Machine Learning
              </button>
              <button 
                className={`tab-button ${activeTab === 'prompt' ? 'active' : ''}`}
                onClick={() => setActiveTab('prompt')}
              >
                <i className='bx bx-edit-alt'></i> Prompt Engineering
              </button>
              <button 
                className={`tab-button ${activeTab === 'agents' ? 'active' : ''}`}
                onClick={() => setActiveTab('agents')}
              >
                <i className='bx bx-bot'></i> AI Agents
              </button>
              <button 
                className={`tab-button ${activeTab === 'chatbots' ? 'active' : ''}`}
                onClick={() => setActiveTab('chatbots')}
              >
                <i className='bx bx-message-rounded-dots'></i> Chatbots
              </button>
              <button 
                className={`tab-button ${activeTab === 'cv' ? 'active' : ''}`}
                onClick={() => setActiveTab('cv')}
              >
                <i className='bx bx-camera'></i> Computer Vision
              </button>
              <button 
                className={`tab-button ${activeTab === 'nlp' ? 'active' : ''}`}
                onClick={() => setActiveTab('nlp')}
              >
                <i className='bx bx-message-dots'></i> NLP Solutions
              </button>
            </div>

            <div className="tabs-content">
              <div className={`tab-panel ${activeTab === 'genai' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>Generative AI</h3>
                  <p>Harness the power of generative AI to create new content, designs, and solutions that transform your business. Our custom generative AI solutions leverage the latest models to automate content creation, enhance creativity, and deliver personalized experiences.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Custom GPT and large language model integration</li>
                    <li><i className='bx bx-check'></i> AI-powered content generation</li>
                    <li><i className='bx bx-check'></i> Image and video synthesis</li>
                    <li><i className='bx bx-check'></i> Voice and music generation</li>
                    <li><i className='bx bx-check'></i> Personalized recommendation engines</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={mainLogo} alt="Generative AI" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'ml' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>Machine Learning</h3>
                  <p>Our Machine Learning solutions transform your data into actionable insights and predictions. We develop custom ML models that solve complex business problems, automate decisions, and uncover hidden patterns in your data for competitive advantage.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Predictive analytics and forecasting</li>
                    <li><i className='bx bx-check'></i> Anomaly detection systems</li>
                    <li><i className='bx bx-check'></i> Customer segmentation and behavior analysis</li>
                    <li><i className='bx bx-check'></i> Demand forecasting and inventory optimization</li>
                    <li><i className='bx bx-check'></i> Fraud detection and risk assessment</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={mainLogo} alt="Machine Learning" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'prompt' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>Prompt Engineering</h3>
                  <p>Our expert prompt engineers craft precise instructions that unlock the full potential of large language models. We design custom prompts that produce consistent, high-quality outputs tailored to your specific business needs and use cases.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Systematic prompt testing and optimization</li>
                    <li><i className='bx bx-check'></i> Custom prompt templates for different use cases</li>
                    <li><i className='bx bx-check'></i> Chain-of-thought and few-shot learning techniques</li>
                    <li><i className='bx bx-check'></i> Guardrails for ethical and safe AI outputs</li>
                    <li><i className='bx bx-check'></i> Prompt management systems and version control</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={mainLogo} alt="Prompt Engineering" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'agents' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>AI Agents</h3>
                  <p>We design and develop autonomous AI agents that can reason, plan, and execute complex tasks on your behalf. Our agents combine multiple AI capabilities to solve problems, make decisions, and perform actions with minimal human supervision.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Multi-agent systems that collaborate to solve complex problems</li>
                    <li><i className='bx bx-check'></i> Tool-using agents with API and system integrations</li>
                    <li><i className='bx bx-check'></i> Reasoning frameworks for improved decision-making</li>
                    <li><i className='bx bx-check'></i> Memory systems for contextual awareness</li>
                    <li><i className='bx bx-check'></i> Human-in-the-loop oversight and feedback mechanisms</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={mainLogo} alt="AI Agents" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'chatbots' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>Conversational AI & Chatbots</h3>
                  <p>Our intelligent chatbots and conversational AI solutions deliver personalized, engaging user experiences across multiple channels. We build sophisticated virtual assistants that understand natural language, maintain context, and provide helpful responses.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Customer service automation with 24/7 support</li>
                    <li><i className='bx bx-check'></i> Domain-specific knowledge integration</li>
                    <li><i className='bx bx-check'></i> Multi-channel deployment (web, mobile, messaging platforms)</li>
                    <li><i className='bx bx-check'></i> Sentiment analysis and emotional intelligence</li>
                    <li><i className='bx bx-check'></i> Seamless human handoff capabilities</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={mainLogo} alt="Conversational AI & Chatbots" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'cv' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>Computer Vision</h3>
                  <p>Our Computer Vision solutions enable machines to see and understand visual information like humans. From quality control to security systems, we develop custom CV applications that automate visual inspections, recognize objects, and interpret complex scenes.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Object detection and recognition</li>
                    <li><i className='bx bx-check'></i> Image classification and segmentation</li>
                    <li><i className='bx bx-check'></i> Facial recognition systems</li>
                    <li><i className='bx bx-check'></i> Quality control and defect detection</li>
                    <li><i className='bx bx-check'></i> Video analytics and surveillance</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={mainLogo} alt="Computer Vision" />
                </div>
              </div>

              <div className={`tab-panel ${activeTab === 'nlp' ? 'active' : ''}`}>
                <div className="tab-content">
                  <h3>NLP Solutions</h3>
                  <p>Our Natural Language Processing solutions bridge the gap between human communication and computer understanding. We create intelligent systems that understand, interpret, and generate human language for enhanced customer experiences and business efficiency.</p>
                  <ul className="features-list">
                    <li><i className='bx bx-check'></i> Conversational AI and chatbots</li>
                    <li><i className='bx bx-check'></i> Sentiment analysis and opinion mining</li>
                    <li><i className='bx bx-check'></i> Text classification and summarization</li>
                    <li><i className='bx bx-check'></i> Language translation and localization</li>
                    <li><i className='bx bx-check'></i> Voice assistants and speech recognition</li>
                  </ul>
                </div>
                <div className="tab-image">
                  <img src={mainLogo} alt="NLP Solutions" />
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
            <h2 className="section-title">AI & ML Technologies</h2>
            <p className="section-subtitle">Cutting-Edge Tools and Frameworks We Leverage</p>
          </div>
          
          <div className="technologies-grid">
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bxl-python'></i>
              </div>
              <h3>Python</h3>
              <p>Industry standard for data science and ML development.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-brain'></i>
              </div>
              <h3>TensorFlow</h3>
              <p>Open-source library for deep learning applications.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-code-alt'></i>
              </div>
              <h3>PyTorch</h3>
              <p>Flexible deep learning framework for research and production.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-network-chart'></i>
              </div>
              <h3>Scikit-learn</h3>
              <p>Essential ML library for classical algorithms.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bxl-kubernetes'></i>
              </div>
              <h3>Kubeflow</h3>
              <p>ML toolkit for Kubernetes to build ML pipelines.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-data'></i>
              </div>
              <h3>Apache Spark</h3>
              <p>Engine for large-scale data processing and ML.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-message-square-dots'></i>
              </div>
              <h3>BERT</h3>
              <p>Advanced language model for NLP applications.</p>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">
                <i className='bx bx-analyse'></i>
              </div>
              <h3>OpenCV</h3>
              <p>Open-source computer vision and ML library.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced AI Technologies Section */}
      <section className="advanced-ai-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced AI Technologies</h2>
            <p className="section-subtitle">Cutting-Edge Solutions for Next-Generation Applications</p>
          </div>
          
          <div className="advanced-tech-grid">
            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bx-link-alt'></i>
              </div>
              <h3>LangChain</h3>
              <p>Framework for developing applications powered by language models, enabling seamless connection between LLMs and external data sources.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Document analysis</li>
                  <li>Conversational agents</li>
                  <li>Knowledge management</li>
                </ul>
              </div>
            </div>
            
            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bx-search-alt-2'></i>
              </div>
              <h3>RAG Applications</h3>
              <p>Retrieval Augmented Generation combines powerful language models with external knowledge bases to provide accurate, contextual, and up-to-date responses.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Enterprise search</li>
                  <li>Knowledge assistants</li>
                  <li>Research tools</li>
                </ul>
              </div>
            </div>
            
            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bx-microchip'></i>
              </div>
              <h3>Groq</h3>
              <p>Ultra-fast LLM inference platform delivering near-instant response times for real-time AI applications and services.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Real-time content generation</li>
                  <li>Live customer support</li>
                  <li>Interactive applications</li>
                </ul>
              </div>
            </div>
            
            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bx-bot'></i>
              </div>
              <h3>Grok</h3>
              <p>Conversational AI model focused on providing real-time information with a touch of humor and personality for more engaging interactions.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Personal assistants</li>
                  <li>Information retrieval</li>
                  <li>Creative content generation</li>
                </ul>
              </div>
            </div>
            
            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bx-dive'></i>
              </div>
              <h3>DeepSeek</h3>
              <p>Open-source language models optimized for technical applications, including code generation and complex reasoning tasks.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Code assistance</li>
                  <li>Technical documentation</li>
                  <li>Scientific applications</li>
                </ul>
              </div>
            </div>
            
            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bx-server'></i>
              </div>
              <h3>Ollama</h3>
              <p>Framework for running large language models locally, enabling private, secure AI capabilities without relying on cloud services.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Private AI deployments</li>
                  <li>Offline applications</li>
                  <li>Edge computing</li>
                </ul>
              </div>
            </div>
            
            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bxl-openai'></i>
              </div>
              <h3>OpenAI</h3>
              <p>Leading AI research lab providing state-of-the-art models like GPT-4 and DALL-E for text, image, and multimodal applications.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Content creation</li>
                  <li>Virtual assistants</li>
                  <li>Data analysis</li>
                </ul>
              </div>
            </div>
            
            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bx-wind'></i>
              </div>
              <h3>Mistral</h3>
              <p>Efficient language models delivering high performance with smaller resource requirements, ideal for specialized and embedded applications.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Specialized assistants</li>
                  <li>Resource-constrained environments</li>
                  <li>Multi-language applications</li>
                </ul>
              </div>
            </div>

            <div className="advanced-tech-card">
              <div className="advanced-tech-icon">
                <i className='bx bx-server'></i>
              </div>
              <h3>MCP Server</h3>
              <p>High-performance computing infrastructure optimized for AI workloads, enabling scalable model training and inference with dedicated resources.</p>
              <div className="tech-use-cases">
                <span>Use Cases:</span>
                <ul>
                  <li>Large-scale model training</li>
                  <li>Real-time inference services</li>
                  <li>Enterprise AI deployments</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="tech-integration-cta">
            <h3>Looking to integrate these technologies into your business?</h3>
            <p>Our experts can help you select and implement the right AI solutions for your specific needs.</p>
            <a href="#get-quote" className="ml-btn">Get Expert Advice</a>
          </div>
        </div>
      </section>

      {/* AI Ethics & Governance Section */}
      <section className="ai-ethics-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">AI Ethics & Governance</h2>
            <p className="section-subtitle">Responsible AI Development for a Better Future</p>
          </div>
          
          <div className="ethics-content">
            <div className="ethics-info">
              <p className="ethics-intro">We are committed to developing AI solutions that are ethical, fair, transparent, and accountable. Our approach to AI ethics ensures that your intelligent systems are built with human values at their core.</p>
              
              <div className="ethics-principles">
                <div className="principle-item">
                  <div className="principle-icon">
                    <i className='bx bx-check-shield'></i>
                  </div>
                  <div className="principle-content">
                    <h3>Fairness & Bias Mitigation</h3>
                    <p>We implement rigorous testing to identify and address biases in data and models, ensuring equitable outcomes across diverse user groups.</p>
                  </div>
                </div>
                
                <div className="principle-item">
                  <div className="principle-icon">
                    <i className='bx bx-bulb'></i>
                  </div>
                  <div className="principle-content">
                    <h3>Transparency & Explainability</h3>
                    <p>Our AI solutions provide clear explanations of how decisions are made, building trust with end-users and stakeholders.</p>
                  </div>
                </div>
                
                <div className="principle-item">
                  <div className="principle-icon">
                    <i className='bx bx-shield-quarter'></i>
                  </div>
                  <div className="principle-content">
                    <h3>Privacy & Data Protection</h3>
                    <p>We prioritize user privacy with privacy-by-design principles, data minimization, and robust security practices.</p>
                  </div>
                </div>
                
                <div className="principle-item">
                  <div className="principle-icon">
                    <i className='bx bx-user-check'></i>
                  </div>
                  <div className="principle-content">
                    <h3>Human-Centered Development</h3>
                    <p>We design AI systems that augment human capabilities rather than replace them, keeping humans in the loop for critical decisions.</p>
                  </div>
                </div>
                
                <div className="principle-item">
                  <div className="principle-icon">
                    <i className='bx bx-compass'></i>
                  </div>
                  <div className="principle-content">
                    <h3>Governance Frameworks</h3>
                    <p>We establish clear guidelines, monitoring systems, and accountable practices for responsible AI deployment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ethics-cta">
              <div className="ethics-cta-content">
                <h3>Let's Build Responsible AI Together</h3>
                <p>Our team of AI ethics specialists can help you navigate complex ethical considerations and implement governance frameworks that align with your organizational values.</p>
                <a href="#get-quote" className="btn btn-primary">Consult Our Ethics Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Benefits of AI & ML Solutions</h2>
            <p className="section-subtitle">How Intelligent Technologies Transform Your Business</p>
          </div>
          
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-line-chart'></i>
              </div>
              <h3>Enhanced Efficiency</h3>
              <p>Automate routine tasks and processes, freeing up human resources for strategic activities and reducing operational costs.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-bulb'></i>
              </div>
              <h3>Data-Driven Insights</h3>
              <p>Extract actionable intelligence from complex data sets to inform better business decisions and strategy.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-target-lock'></i>
              </div>
              <h3>Personalization</h3>
              <p>Deliver tailored experiences and recommendations to customers, increasing engagement and conversion rates.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-shield'></i>
              </div>
              <h3>Improved Security</h3>
              <p>Detect anomalies, identify potential threats, and enhance fraud prevention with advanced pattern recognition.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-trending-up'></i>
              </div>
              <h3>Competitive Edge</h3>
              <p>Stay ahead of the market with innovative AI-powered products and services that meet evolving customer needs.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-search-alt'></i>
              </div>
              <h3>Predictive Capabilities</h3>
              <p>Anticipate market trends, customer behavior, and business challenges before they occur to proactively respond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section aiml-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our AI Implementation Process</h2>
            <p className="section-subtitle">A Systematic Approach to AI & ML Development</p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>Discovery & Data Assessment</h3>
                <p>We analyze your business needs and existing data to identify opportunities where AI can create the most value.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>Solution Design</h3>
                <p>Our team designs a customized AI solution architecture, selecting the appropriate models and algorithms for your specific requirements.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Development & Training</h3>
                <p>We develop and train AI models using your data, fine-tuning them for optimal performance and accuracy in your specific context.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3>Deployment & Continuous Improvement</h3>
                <p>We integrate the solution into your systems and establish monitoring processes for ongoing refinement and performance enhancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our AI & ML Services</h2>
            <p className="section-subtitle">What Sets Our AI Solutions Apart</p>
          </div>
          
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-user-check'></i>
              </div>
              <h3>Expert Team</h3>
              <p>Our team includes PhD-level data scientists and ML engineers with extensive industry experience.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-customize'></i>
              </div>
              <h3>Tailored Solutions</h3>
              <p>We build custom AI solutions that address your specific business challenges, not one-size-fits-all approaches.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-certification'></i>
              </div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and validation ensure our AI models meet the highest standards of accuracy and reliability.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-code-block'></i>
              </div>
              <h3>Ethical AI</h3>
              <p>We develop AI with transparency, fairness, and responsible use as core principles, ensuring ethical implementation.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-wrench'></i>
              </div>
              <h3>End-to-End Support</h3>
              <p>From initial concept to deployment and maintenance, we provide comprehensive support throughout your AI journey.</p>
            </div>
            
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <i className='bx bx-transfer-alt'></i>
              </div>
              <h3>Seamless Integration</h3>
              <p>Our solutions integrate smoothly with your existing systems and workflows, minimizing disruption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="quote-container">
            <div className="quote-form-container">
              <h2>Unlock the Power of AI for Your Business</h2>
              <p>Discover how AI and Machine Learning can transform your operations, enhance customer experiences, and drive growth with our free consultation. Our experts will assess your needs and provide a strategic roadmap for AI adoption.</p>
              <a href="#get-quote" className="btn btn-primary">Schedule Your Free Consultation</a>
            </div>
            <div className="quote-image">
              <img src={mainLogo} alt="AI & ML Solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ and Contact Form */}
      <section id="get-quote" className="faq-contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">AI & ML FAQs</h2>
          </div>
          <div className="faq-contact-container">
            <div className="faq-section">
              <div className="accordion">
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 0 ? 'active' : ''}`}
                    onClick={() => toggleFaq(0)}
                  >
                    <h3>How can AI benefit my specific industry?</h3>
                    <i className={`bx ${activeFaq === 0 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 0 ? 'active' : ''}`}>
                    <p>AI can benefit virtually every industry through process automation, data analysis, customer insights, and predictive capabilities. Our team analyzes your specific industry challenges to identify high-impact AI opportunities that deliver measurable ROI.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 1 ? 'active' : ''}`}
                    onClick={() => toggleFaq(1)}
                  >
                    <h3>What kind of data do I need for an AI project?</h3>
                    <i className={`bx ${activeFaq === 1 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 1 ? 'active' : ''}`}>
                    <p>The type and amount of data required depends on your specific project goals. Generally, you need relevant, clean, and diverse data that represents the problem you're trying to solve. Our data scientists can evaluate your existing data and advise on collection strategies if needed.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 2 ? 'active' : ''}`}
                    onClick={() => toggleFaq(2)}
                  >
                    <h3>How long does it take to implement an AI solution?</h3>
                    <i className={`bx ${activeFaq === 2 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 2 ? 'active' : ''}`}>
                    <p>Implementation timelines vary based on project complexity, data readiness, and integration requirements. Simple projects might take 2-3 months, while more complex enterprise solutions could require 6-12 months. We provide detailed timelines during the planning phase.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 3 ? 'active' : ''}`}
                    onClick={() => toggleFaq(3)}
                  >
                    <h3>How do you ensure AI model accuracy and reliability?</h3>
                    <i className={`bx ${activeFaq === 3 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 3 ? 'active' : ''}`}>
                    <p>We implement rigorous testing, validation, and monitoring protocols throughout the development lifecycle. This includes cross-validation, A/B testing, performance metrics tracking, and regular retraining schedules to maintain accuracy as data patterns evolve.</p>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <div 
                    className={`accordion-header ${activeFaq === 4 ? 'active' : ''}`}
                    onClick={() => toggleFaq(4)}
                  >
                    <h3>What's the difference between AI, ML, and Deep Learning?</h3>
                    <i className={`bx ${activeFaq === 4 ? 'bx-minus' : 'bx-plus'}`}></i>
                  </div>
                  <div className={`accordion-content ${activeFaq === 4 ? 'active' : ''}`}>
                    <p>AI is the broadest concept, referring to machines that can perform tasks that typically require human intelligence. Machine Learning is a subset of AI where systems learn from data without explicit programming. Deep Learning is a specialized ML technique using neural networks with many layers to process complex patterns.</p>
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
                    <option value="">Select a Service</option>
                    <option value="genai">Generative AI Solutions</option>
                    <option value="ml">Machine Learning Development</option>
                    <option value="cv">Computer Vision Applications</option>
                    <option value="nlp">NLP & Conversational AI</option>
                    <option value="consulting">AI Strategy Consulting</option>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AIML;