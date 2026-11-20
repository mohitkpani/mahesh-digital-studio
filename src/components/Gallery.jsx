import { Camera, ArrowUpRight } from 'lucide-react';
import '../styles/gallery.css';

import shopFront from '../assets/gallery/shop-front.webp';
import insideShop from '../assets/gallery/inside-shop.webp';
import computerDesk from '../assets/gallery/computer-desk.webp';
import printerArea from '../assets/gallery/printer-area.webp';
import customerArea from '../assets/gallery/customer-area.webp';
import servicesCounter from '../assets/gallery/services-counter.webp';

const photos = [
    {
        image: shopFront,
        title: 'Our Shop',
        category: 'SHOP FRONT',
        className: 'gallery-large'
    },
    {
        image: insideShop,
        title: 'Inside the Studio',
        category: 'OUR SPACE',
        className: ''
    },
    {
        image: computerDesk,
        title: 'Digital Workspace',
        category: 'WORKSPACE',
        className: ''
    },
    {
        image: printerArea,
        title: 'Print & Scan',
        category: 'OUR SERVICES',
        className: ''
    },
    {
        image: customerArea,
        title: 'Customer Area',
        category: 'VISIT US',
        className: ''
    },
    {
        image: servicesCounter,
        title: 'Service Counter',
        category: 'DIGITAL SERVICES',
        className: ''
    }
];

function Gallery() {
    return (
        <section className="gallery-section" id="gallery">
            <div className="container">

                <div className="gallery-heading">
                    <div>
                        <span className="gallery-eyebrow">
                            <Camera size={16} /> A GLIMPSE INSIDE
                        </span>

                        <h2>
                            A little look
                            <span> around us.</span>
                        </h2>
                    </div>

                    <p>
                        Get to know our space before you visit.
                        Here's a glimpse of Mahesh Digital Studio.
                    </p>
                </div>

                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <figure
                            className={`gallery-item ${photo.className}`}
                            key={photo.title}
                        >
                            <img
                                src={photo.image}
                                alt={photo.title}
                                loading="lazy"
                            />

                            <figcaption className="gallery-caption">
                                <div>
                                    <span>{photo.category}</span>
                                    <h3>{photo.title}</h3>
                                </div>

                                <span className="gallery-number">
                                    0{index + 1}
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="gallery-footer">
                    <span>REAL PLACE. REAL PEOPLE. FRIENDLY SERVICE.</span>
                    <a href="#contact">
                        Plan your visit <ArrowUpRight size={17} />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Gallery;