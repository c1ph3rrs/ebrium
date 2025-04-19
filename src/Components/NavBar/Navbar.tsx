import { useState, useEffect } from 'react'
import mainLogo from '../../assets/main_logo.png';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <>
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
                                        <Link to="/ai">AI & Machine Learning</Link>
                                    </li>
                                    <li className="nav__dropdown-item">
                                        <Link to="/cloud">Cloud Solutions</Link>
                                    </li>
                                    <li className="nav__dropdown-item">
                                        <Link to="/bi">Business Intelligence</Link>
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
        </>
    )
}


export default Navbar;