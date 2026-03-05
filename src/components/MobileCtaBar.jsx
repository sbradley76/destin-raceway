import { siteConfig } from "../config/siteConfig";

export default function MobileCtaBar() {
    return (
        <div className="mobile-cta">
            <a className="mobile-cta-btn" href={`tel:${siteConfig.phoneRaw}`}>
                Call
            </a>
            <a
                className="mobile-cta-btn primary"
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noreferrer"
            >
                Directions
            </a>
        </div>
    );
}
