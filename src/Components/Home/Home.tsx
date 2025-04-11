import './home.css'
import mainLogo from '../../assets/main_logo.png';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }
    
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <section className="home main__container">
            <nav className="nav">
                <a href="#" className="nav__logo">
                    <img src={mainLogo} alt="Ebrium Logo" />
                </a>
                <div className="nav__menu">
                    <ul className="nav__menu-list grid">
                        <li className="nav__menu-item">
                            <div className="nav__menu-link">
                                <a href="#">Services</a>
                            </div>
                            <ul className="nav__dropdown">
                                <li className="nav__dropdown-item">
                                    <a href="#">Mobile App Development</a>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="#">Web Development</a>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="#">AI & Machine Learning</a>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="#">Cloud Solutions</a>
                                </li>
                                <li className="nav__dropdown-item">
                                    <a href="#">Business Intelligence</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#">Solutions</a>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#">About Us</a>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#">Contact</a>
                        </li>
                        <li className="nav__menu-item consultation">
                            <a href="#">Get Free Consultation</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main__text">
                <h1>Transform Your Ideas Into Digital Reality</h1>
                <p style={{fontSize: '1.5rem', marginTop: '1rem', color: 'var(--light-green)'}}>
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
                    <p style={{fontSize: '1.2rem', marginTop: '2rem', color: 'white', fontWeight: '300'}}>
                        Partner with us to build cutting-edge digital solutions that drive your business forward
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home;