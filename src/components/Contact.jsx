import {
    MapPin,
    Phone,
    MessageCircle,
    ArrowUpRight,
    Clock,
    Navigation
} from 'lucide-react';

import '../styles/contact.css';

const PHONE_NUMBER = '+91 8327768671';
const WHATSAPP_NUMBER = '918327768671';

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Mahesh Digital Studio, I want to enquire about your services.'
)}`;

const mapLink =
    'https://www.google.com/maps/search/?api=1&query=Mahesh+Digital+Anla+Urban+Patch+Totapada+Odisha+757056';

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="container">

                <div className="contact-heading">
                    <span>LET'S CONNECT ✳</span>

                    <h2>
                        Have something
                        <span> to get done?</span>
                    </h2>

                    <p>
                        Have a question or need help with a digital service?
                        We're just a message away.
                    </p>
                </div>

                <div className="contact-layout">

                    <div className="contact-main">
                        <div className="contact-main-top">
                            <span>01 / QUICK ENQUIRY</span>
                            <MessageCircle size={27} />
                        </div>

                        <div>
                            <h3>Let's talk about it.</h3>

                            <p>
                                Send us a WhatsApp message and tell us what
                                service you need. We'll help you with the next steps.
                            </p>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-whatsapp-btn"
                            >
                                <MessageCircle size={19} />
                                Chat on WhatsApp
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        <div className="contact-main-decoration">HELLO!</div>
                    </div>

                    <div className="contact-details">

                        <div className="contact-detail-card contact-phone">
                            <div className="contact-detail-icon">
                                <Phone size={22} />
                            </div>

                            <div>
                                <span>GIVE US A CALL</span>
                                <h3>{PHONE_NUMBER}</h3>
                                <a href="tel:+918327768671">
                                    Call now <ArrowUpRight size={15} />
                                </a>
                            </div>
                        </div>

                        <div className="contact-detail-card contact-address">
                            <div className="contact-detail-icon">
                                <MapPin size={22} />
                            </div>

                            <div>
                                <span>FIND OUR SHOP</span>
                                <h3>Mahesh Digital Studio</h3>
                                <p>Anla Urban Patch, Totapada, Odisha 757056</p>

                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Navigation size={15} />
                                    Find us on Google Maps
                                </a>
                            </div>
                        </div>

                        <div className="contact-detail-card contact-hours">
                            <div className="contact-detail-icon">
                                <Clock size={22} />
                            </div>

                            <div>
                                <span>VISIT US</span>
                                <h3>Come say hello!</h3>
                                <p>Visit our shop for assistance with digital services.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;