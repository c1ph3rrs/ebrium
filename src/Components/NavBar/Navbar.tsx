import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import mainLogo from '../../assets/main_logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faBars,
    faTimes,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const location = useLocation();
    const navbarRef = useRef<HTMLElement>(null);

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

    useEffect(() => {
        // Close mobile menu when route changes
        setMobileMenuOpen(false);
        setDropdownOpen(null);
    }, [location]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleDropdown = (dropdownName: string) => {
        setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName);
    };

    const closeAllMenus = () => {
        setMobileMenuOpen(false);
        setDropdownOpen(null);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setDropdownOpen(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav
            ref={navbarRef}
            className={`ebrium-navbar ${isScrolled ? 'ebrium-navbar-scrolled' : ''} ${mobileMenuOpen ? 'ebrium-navbar-mobile-open' : ''}`}
        >
            <div className="ebrium-navbar-container">
                {/* Logo */}
                <Link to="/" className="ebrium-navbar-logo" onClick={closeAllMenus}>
                    <img src={mainLogo} alt="Ebrium Digital Solutions" />
                </Link>

                {/* Desktop Menu */}
                <div className="ebrium-navbar-menu">
                    <ul className="ebrium-navbar-list">
                        <li className="ebrium-navbar-item">
                            <Link
                                to="/"
                                className={`ebrium-navbar-link ${location.pathname === '/' ? 'active' : ''}`}
                            >
                                Home
                            </Link>
                        </li>

                        <li
                            className="ebrium-navbar-item ebrium-navbar-dropdown"
                            onMouseEnter={() => setDropdownOpen('services')}
                            onMouseLeave={() => setDropdownOpen(null)}
                        >
                            <button
                                className="ebrium-navbar-link ebrium-navbar-dropdown-toggle"
                                onClick={() => toggleDropdown('services')}
                            >
                                Services
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`ebrium-navbar-dropdown-icon ${dropdownOpen === 'services' ? 'rotated' : ''}`}
                                />
                            </button>
                            <ul className={`ebrium-navbar-dropdown-menu ${dropdownOpen === 'services' ? 'show' : ''}`}>
                                <li className="ebrium-navbar-dropdown-item">
                                    <Link to="/mob" className="ebrium-navbar-dropdown-link">
                                        Mobile App Development
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </li>
                                <li className="ebrium-navbar-dropdown-item">
                                    <Link to="/web" className="ebrium-navbar-dropdown-link">
                                        Web Development
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </li>
                                <li className="ebrium-navbar-dropdown-item">
                                    <Link to="/ai" className="ebrium-navbar-dropdown-link">
                                        AI & Machine Learning
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </li>
                                <li className="ebrium-navbar-dropdown-item">
                                    <Link to="/cloud" className="ebrium-navbar-dropdown-link">
                                        Cloud Solutions
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </li>
                                <li className="ebrium-navbar-dropdown-item">
                                    <Link to="/bi" className="ebrium-navbar-dropdown-link">
                                        Business Intelligence
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </li>
                                <li className="ebrium-navbar-dropdown-item">
                                    <Link to="/cybersecurity" className="ebrium-navbar-dropdown-link">
                                        Cybersecurity Services
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="ebrium-navbar-item">
                            <Link
                                to="/solutions"
                                className={`ebrium-navbar-link ${location.pathname === '/solutions' ? 'active' : ''}`}
                            >
                                Solutions
                            </Link>
                        </li>

                        <li className="ebrium-navbar-item">
                            <Link
                                to="/aboutus"
                                className={`ebrium-navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
                            >
                                About
                            </Link>
                        </li>

                        <li className="ebrium-navbar-item">
                            <Link
                                to="/testimonials"
                                className={`ebrium-navbar-link ${location.pathname === '/testimonials' ? 'active' : ''}`}
                            >
                                Testimonials
                            </Link>
                        </li>

                        <li className="ebrium-navbar-item">
                            <Link
                                to="/contact"
                                className={`ebrium-navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                        </div>

                {/* CTA Buttons */}
                <div className="ebrium-navbar-actions">
                    <div className="ebrium-navbar-platform-links">
                        <a
                            href="https://www.fiverr.com/dev__ib"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ebrium-navbar-platform-link ebrium-navbar-fiverr"
                            title="Hire on Fiverr"
                        >
                            <i className='bx bxl-fiverr'></i>
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/~dev__ib"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ebrium-navbar-platform-link ebrium-navbar-upwork"
                            title="Hire on Upwork"
                        >
                            <i className='bx bxl-upwork'></i>
                        </a>
                    </div>
                    
                    <Link to="/consultation" className="ebrium-navbar-cta">
                        Get Free Consultation
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="ebrium-navbar-mobile-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                </button>
                                </div>

            {/* Mobile Menu */}
            <div className={`ebrium-navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="ebrium-navbar-mobile-list">
                    <li className="ebrium-navbar-mobile-item">
                        <Link
                            to="/"
                            className={`ebrium-navbar-mobile-link ${location.pathname === '/' ? 'active' : ''}`}
                            onClick={closeAllMenus}
                        >
                            Home
                        </Link>
                                    </li>

                    <li className="ebrium-navbar-mobile-item">
                        <button
                            className="ebrium-navbar-mobile-link ebrium-navbar-mobile-dropdown-toggle"
                            onClick={() => toggleDropdown('mobile-services')}
                        >
                            Services
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`ebrium-navbar-mobile-dropdown-icon ${dropdownOpen === 'mobile-services' ? 'rotated' : ''}`}
                            />
                        </button>
                        <ul className={`ebrium-navbar-mobile-dropdown ${dropdownOpen === 'mobile-services' ? 'show' : ''}`}>
                            <li className="ebrium-navbar-mobile-dropdown-item">
                                <Link to="/mob" onClick={closeAllMenus}>Mobile App Development</Link>
                                    </li>
                            <li className="ebrium-navbar-mobile-dropdown-item">
                                <Link to="/web" onClick={closeAllMenus}>Web Development</Link>
                            </li>
                            <li className="ebrium-navbar-mobile-dropdown-item">
                                <Link to="/ai" onClick={closeAllMenus}>AI & Machine Learning</Link>
                            </li>
                            <li className="ebrium-navbar-mobile-dropdown-item">
                                <Link to="/cloud" onClick={closeAllMenus}>Cloud Solutions</Link>
                            </li>
                            <li className="ebrium-navbar-mobile-dropdown-item">
                                <Link to="/bi" onClick={closeAllMenus}>Business Intelligence</Link>
                            </li>
                            <li className="ebrium-navbar-mobile-dropdown-item">
                                <Link to="/cybersecurity" onClick={closeAllMenus}>Cybersecurity Services</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="ebrium-navbar-mobile-item">
                        <Link
                            to="/solutions"
                            className={`ebrium-navbar-mobile-link ${location.pathname === '/solutions' ? 'active' : ''}`}
                            onClick={closeAllMenus}
                        >
                            Solutions
                        </Link>
                    </li>

                    <li className="ebrium-navbar-mobile-item">
                        <Link
                            to="/aboutus"
                            className={`ebrium-navbar-mobile-link ${location.pathname === '/aboutus' ? 'active' : ''}`}
                            onClick={closeAllMenus}
                        >
                            About
                        </Link>
                    </li>

                    <li className="ebrium-navbar-mobile-item">
                        <Link
                            to="/testimonials"
                            className={`ebrium-navbar-mobile-link ${location.pathname === '/testimonials' ? 'active' : ''}`}
                            onClick={closeAllMenus}
                        >
                            Testimonials
                        </Link>
                    </li>

                    <li className="ebrium-navbar-mobile-item">
                        <Link
                            to="/contact"
                            className={`ebrium-navbar-mobile-link ${location.pathname === '/contact' ? 'active' : ''}`}
                            onClick={closeAllMenus}
                        >
                            Contact
                        </Link>
                    </li>

                    {/* Mobile Platform Links */}
                    <li className="ebrium-navbar-mobile-platforms">
                        <div className="ebrium-navbar-mobile-platform-title">Hire Me On:</div>
                        <div className="ebrium-navbar-mobile-platform-links">
                            <a
                                href="https://www.fiverr.com/dev__ib"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ebrium-navbar-mobile-platform-link"
                                onClick={closeAllMenus}
                            >
                                <i className='bx bxl-fiverr'></i>
                                Fiverr
                            </a>
                            <a
                                href="https://www.upwork.com/freelancers/~dev__ib"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ebrium-navbar-mobile-platform-link"
                                onClick={closeAllMenus}
                            >
                                <i className='bx bxl-upwork'></i>
                                Upwork
                            </a>
                        </div>
                    </li>

                    <li className="ebrium-navbar-mobile-cta">
                        <Link
                            to="/consultation"
                            className="ebrium-navbar-mobile-cta-btn"
                            onClick={closeAllMenus}
                        >
                            Get Free Consultation
                        </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
    );
};


export default Navbar;