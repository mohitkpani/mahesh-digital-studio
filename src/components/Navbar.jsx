
import { useState } from 'react';
import {
    Menu,
    X,
    ArrowUpRight,
    MessageCircle
} from 'lucide-react';

import '../styles/navbar.css';

const WHATSAPP_NUMBER = '918327768671';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        'Hello Mahesh Digital Studio, I want to enquire about your services.'
    )}`;

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Brand */}
                <a href="#home" className="navbar-brand" onClick={closeMenu}>
                    <img
                        src="/logo.png"
                        alt="Mahesh Digital Studio Logo"
                        className="brand-logo-image"
                    />

                    <span className="brand-text">
                        <strong>Mahesh Digital</strong>
                        <small>STUDIO ✳ DIGITAL SERVICES</small>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#about">About us</a>
                    <a href="#contact">Contact</a>
                </nav>

                {/* Contact Button */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="navbar-contact"
                >
                    <MessageCircle size={17} />
                    <span>Let's Talk</span>
                    <ArrowUpRight size={16} />
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Navigation */}
            <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#services" onClick={closeMenu}>Services</a>
                <a href="#gallery" onClick={closeMenu}>Gallery</a>
                <a href="#about" onClick={closeMenu}>About us</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-whatsapp"
                >
                    <MessageCircle size={18} />
                    Contact on WhatsApp
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
