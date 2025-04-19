
import mainLogo from '../../assets/main_logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <img src={mainLogo} alt="Ebrium Logo" />
                        </div>
                        <p className="footer-description">
                            Delivering innovative digital solutions that help businesses thrive in the digital era.
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
                            <li><a href="#">AI & Machine Learning</a></li>
                            <li><Link to="/cloud">Cloud Solutions</Link></li>
                            <li><a href="#">Business Intelligence</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Our Process</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Contact Us</a></li>
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
                            <p><i className='bx bx-map' ></i> Gujrat, Punjab, Pakistan</p>
                            <p><i className='bx bx-phone' ></i> +92 317 175 5276</p>
                            <p><i className='bx bx-envelope' ></i> hello@ebrium.code</p>
                        </address>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2025 Ebrium. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
