
import {
    CreditCard,
    FileText,
    GraduationCap,
    Printer,
    Smartphone,
    Receipt,
    ArrowUpRight,
    Sparkles
} from 'lucide-react';

import '../styles/services.css';
import ServiceCard from './ServiceCard';

const WHATSAPP_NUMBER = '918327768671';

const services = [
    {
        icon: FileText,
        title: 'Online Applications',
        description: 'Assistance with online applications, registrations and corrections.',
        className: 'service-online'
    },
    {
        icon: GraduationCap,
        title: 'Education & Jobs',
        description: 'Exam forms, job applications and scholarship assistance.',
        className: 'service-education'
    },
    {
        icon: Smartphone,
        title: 'Mobile Recharge',
        description: 'Convenient mobile recharge services.',
        className: 'service-recharge'
    },
    {
        icon: Receipt,
        title: 'Bill Payments',
        description: 'Assistance with eligible utility bill payments.',
        className: 'service-bills'
    },
    {
        icon: Printer,
        title: 'Print & Scan',
        description: 'Printing, photocopying, scanning and document uploads.',
        className: 'service-print'
    }
];

function Services() {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        'Hello Mahesh Digital Studio, I want to know more about your services.'
    )}`;

    return (
        <section className="services-section" id="services">
            <div className="container">

                {/* Section Heading */}
                <div className="services-heading">
                    <div>
                        <span className="services-eyebrow">
                            <Sparkles size={15} />
                            WHAT WE CAN HELP WITH
                        </span>

                        <h2>
                            Little tasks.
                            <span> Big relief.</span>
                        </h2>
                    </div>

                    <p>
                        Your everyday digital needs, handled with friendly
                        assistance and care.
                    </p>
                </div>

                {/* Services Layout */}
                <div className="services-layout">

                    {/* Featured Service */}
                    <div className="service-feature">
                        <div className="feature-top">
                            <span>01 / FEATURED SERVICE</span>

                            <div className="feature-icon">
                                <CreditCard size={26} />
                            </div>
                        </div>

                        <div className="feature-content">
                            <small>DOCUMENT & ID ASSISTANCE</small>

                            <h3>
                                Important documents, made easier.
                            </h3>

                            <p>
                                Get assistance with PAN applications, corrections
                                and other eligible document-related online services.
                                Aadhaar-related assistance is subject to authorized
                                service availability.
                            </p>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="feature-link"
                            >
                                Enquire about this service
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        <div className="feature-decoration">
                            01
                        </div>
                    </div>

                    {/* Reusable Service Cards */}
                    <div className="services-list">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                service={service}
                                index={index}
                                whatsappLink={whatsappLink}
                            />
                        ))}
                    </div>

                </div>

                {/* Bottom Contact Strip */}
                <div className="services-bottom">
                    <span>NEED SOMETHING ELSE?</span>

                    <p>
                        Ask us. We'll help you find the right service.
                    </p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Talk to Mahesh
                        <ArrowUpRight size={17} />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Services;
