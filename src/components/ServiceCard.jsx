
import { ArrowUpRight } from 'lucide-react';
import '../styles/servicecard.css';

function ServiceCard({ service, index, whatsappLink }) {
    const Icon = service.icon;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={`service-row ${service.className}`}
        >
            <div className="service-row-icon">
                <Icon size={23} />
            </div>

            <div className="service-row-content">
                <span>0{index + 2} / SERVICE</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>

            <ArrowUpRight
                className="service-row-arrow"
                size={21}
            />
        </a>
    );
}

export default ServiceCard;
