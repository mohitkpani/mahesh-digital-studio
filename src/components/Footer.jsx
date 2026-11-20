
import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    MessageCircle
} from 'lucide-react';

import '../styles/footer.css';

const PHONE = '8327768671';
const WHATSAPP = '918327768671';

const EMAIL = 'bhupeshdas05@gmail.com';
const EMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

const FACEBOOK_URL = 'https://www.facebook.com/prince.tutu.35762';
const INSTAGRAM_URL = 'https://www.instagram.com/prince.tutu.8371/';

const ADDRESS =
    'Mahesh Digital, Anla Urban Patch, Totapada, Hatasahi, Odisha 757056';

const MAP_URL =
    'https://www.google.com/maps?q=Mahesh+Digital+Studio,+Anla+Urban+Patch,+Totapada,+Hatasahi,+Odisha+757056&output=embed';

const DIRECTIONS_URL =
    'https://www.google.com/maps/search/?api=1&query=Mahesh+Digital+Studio,+Anla+Urban+Patch,+Totapada,+Hatasahi,+Odisha+757056';

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
            <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
}

function UserIcon() {
    return <span className="footer-user-symbol">B</span>;
}

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">

            <div className="container footer-container">

                {/* BRAND */}
                <div className="footer-brand">

                    <a href="#home" className="footer-logo">

                        <img
                            src="/logo.png"
                            alt="Mahesh Digital Studio Logo"
                            className="footer-logo-image"
                            width="44"
                            height="44"
                            style={{
                                width: '44px',
                                height: '44px',
                                minWidth: '44px',
                                maxWidth: '44px',
                                flex: '0 0 44px',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />

                        <span className="footer-brand-text">
                            <strong>Mahesh Digital</strong>
                            <small>STUDIO ✳ DIGITAL SERVICES</small>
                        </span>

                    </a>

                    <p className="footer-description">
                        Your neighbourhood digital service partner.
                        Making everyday online tasks easier with friendly
                        assistance and care.
                    </p>

                    <div className="footer-socials">

                        <a
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                        </a>

                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <InstagramIcon />
                        </a>

                        <a
                            href={EMAIL_LINK}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Email"
                        >
                            <Mail size={19} />
                        </a>

                        <a
                            href={`https://wa.me/${WHATSAPP}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle size={19} />
                        </a>

                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-links">
                    <h3>Explore</h3>

                    <a href="#home">Home</a>
                    <a href="#services">Our Services</a>
                    <a href="#gallery">Photo Gallery</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact Us</a>
                </div>

                {/* CONTACT DETAILS */}
                <div className="footer-info">
                    <h3>Get in Touch</h3>

                    <div className="footer-info-item">
                        <span className="footer-info-icon">
                            <UserIcon />
                        </span>
                        <div>
                            <small>SHOP OWNER</small>
                            <p>Bhupesh Kumar Das</p>
                        </div>
                    </div>

                    <a
                        href={`tel:+91${PHONE}`}
                        className="footer-info-item"
                    >
                        <span className="footer-info-icon">
                            <Phone size={18} />
                        </span>
                        <div>
                            <small>PHONE NUMBER</small>
                            <p>+91 {PHONE}</p>
                        </div>
                    </a>

                    <a
                        href={EMAIL_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-info-item"
                    >
                        <span className="footer-info-icon">
                            <Mail size={18} />
                        </span>
                        <div>
                            <small>EMAIL ADDRESS</small>
                            <p>{EMAIL}</p>
                        </div>
                    </a>

                    <div className="footer-info-item">
                        <span className="footer-info-icon">
                            <MapPin size={18} />
                        </span>
                        <div>
                            <small>SHOP ADDRESS</small>
                            <p>{ADDRESS}</p>
                        </div>
                    </div>
                </div>

                {/* LOCATION */}
                <div className="footer-location">

                    <div className="footer-location-heading">
                        <h3>Find Our Shop</h3>
                        <span>COME SAY HELLO ✳</span>
                    </div>

                    <div className="footer-map">
                        <iframe
                            title="Mahesh Digital Studio location"
                            src={MAP_URL}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>

                    <a
                        href={DIRECTIONS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="footer-directions"
                    >
                        Get Directions
                        <ArrowUpRight size={16} />
                    </a>

                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">

                    <p>
                        © {currentYear} <strong>Mahesh Digital Studio</strong>.
                        All Rights Reserved.
                    </p>

                    <a href="#home" className="footer-back-top">
                        Back to top ↑
                    </a>

                </div>
            </div>

        </footer>
    );
}

export default Footer;
