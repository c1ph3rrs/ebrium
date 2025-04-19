
import avatar from '../../assets/avatar.jpg';

const Testimonials = () => {
    return (
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
    )
}

export default Testimonials;