import {
    HeartHandshake,
    MapPin,
    Clock,
    ShieldCheck,
    ArrowUpRight,
    Sparkles
} from 'lucide-react';

import '../styles/about.css';

function About() {
    return (
        <section className="about-section" id="about">
            <div className="container">

                <div className="about-top">
                    <span className="about-eyebrow">
                        <Sparkles size={15} /> A LITTLE ABOUT US
                    </span>

                    <h2>
                        Technology is easier
                        <span> when someone helps.</span>
                    </h2>
                </div>

                <div className="about-layout">

                    <div className="about-story">
                        <div className="about-story-number">01 — OUR STORY</div>

                        <h3>
                            Your neighbourhood
                            <span> digital partner.</span>
                        </h3>

                        <p>
                            Mahesh Digital Studio is a local digital service centre
                            in Anla Urban Patch, Totapada, Odisha. We help people
                            with everyday online tasks, applications and document
                            services.
                        </p>

                        <p>
                            Our aim is simple: make digital services easier to
                            access with friendly assistance and a convenient place
                            to get your work done.
                        </p>

                        <a href="#contact" className="about-contact-link">
                            Get in touch <ArrowUpRight size={18} />
                        </a>

                        <div className="about-story-decoration">M.</div>
                    </div>

                    <div className="about-highlights">

                        <div className="about-highlight highlight-pink">
                            <div className="about-highlight-icon">
                                <HeartHandshake size={25} />
                            </div>

                            <div>
                                <span>01 / APPROACH</span>
                                <h3>Friendly Assistance</h3>
                                <p>Helpful guidance for your everyday digital needs.</p>
                            </div>
                        </div>

                        <div className="about-highlight highlight-yellow">
                            <div className="about-highlight-icon">
                                <MapPin size={25} />
                            </div>

                            <div>
                                <span>02 / LOCATION</span>
                                <h3>Local Convenience</h3>
                                <p>Visit us at Anla Urban Patch, Totapada, Odisha.</p>
                            </div>
                        </div>

                        <div className="about-highlight highlight-mint">
                            <div className="about-highlight-icon">
                                <ShieldCheck size={25} />
                            </div>

                            <div>
                                <span>03 / SERVICE</span>
                                <h3>Careful Support</h3>
                                <p>Assistance with attention to your documents and details.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="about-bottom">
                    <Clock size={19} />
                    <p>Have a digital task to complete?</p>
                    <a href="#services">Explore what we offer <ArrowUpRight size={16} /></a>
                </div>

            </div>
        </section>
    );
}

export default About;