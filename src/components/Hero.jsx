import {
    ArrowUpRight,
    MessageCircle,
    FileText,
    CreditCard,
    GraduationCap,
    Printer,
    Sparkles,
    ShieldCheck
} from 'lucide-react';

import '../styles/hero.css';

const WHATSAPP_NUMBER = '918327768671';

function Hero() {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        'Hello Mahesh Digital Studio, I want to enquire about your services.'
    )}`;

    return (
        <section className="hero-section" id="home">
            <div className="container hero-container">

                <div className="hero-content">
                    <div className="hero-tag">
                        <Sparkles size={15} />
                        YOUR LOCAL DIGITAL SERVICE PARTNER
                    </div>

                    <h1>
                        Your digital work,
                        <span> made wonderfully</span>
                        <span className="hero-highlight"> simple.</span>
                    </h1>

                    <p className="hero-description">
                        From online applications to everyday digital services,
                        get friendly assistance for your important work — all in one place.
                    </p>

                    <div className="hero-actions">
                        <a href="#services" className="hero-primary-btn">
                            Explore Services <ArrowUpRight size={18} />
                        </a>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="hero-secondary-btn"
                        >
                            <MessageCircle size={18} />
                            Chat with us
                        </a>
                    </div>

                    <div className="hero-trust">
                        <ShieldCheck size={19} />
                        <span>Personal assistance for your digital needs</span>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-visual-top">
                        <span className="visual-dot"></span>
                        <span>YOUR DIGITAL DESK</span>
                        <Sparkles size={17} />
                    </div>

                    <div className="hero-visual-heading">
                        <small>ONE PLACE, MANY SERVICES</small>
                        <h2>Let's get it<br />done!</h2>
                    </div>

                    <div className="hero-service-grid">
                        <div className="hero-service-item service-pink">
                            <FileText size={25} />
                            <span>PAN Services</span>
                        </div>

                        <div className="hero-service-item service-purple">
                            <CreditCard size={25} />
                            <span>Online Forms</span>
                        </div>

                        <div className="hero-service-item service-yellow">
                            <GraduationCap size={25} />
                            <span>Education</span>
                        </div>

                        <div className="hero-service-item service-mint">
                            <Printer size={25} />
                            <span>Print & Scan</span>
                        </div>
                    </div>

                    <div className="hero-visual-footer">
                        <span>MAHESH DIGITAL STUDIO</span>
                        <ArrowUpRight size={19} />
                    </div>

                    <div className="hero-floating-star">✳</div>
                    <div className="hero-floating-circle"></div>
                </div>

            </div>

            <div className="hero-bottom-label">
                <span>LOCAL SUPPORT</span>
                <span>✳</span>
                <span>DIGITAL CONVENIENCE</span>
                <span>✳</span>
                <span>HERE TO HELP</span>
            </div>
        </section>
    );
}

export default Hero;