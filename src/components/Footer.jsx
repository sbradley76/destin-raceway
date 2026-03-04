import { siteConfig } from "../config/siteConfig";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div>
                    <div className="footer-title">{siteConfig.name}</div>
                    <div className="muted">{siteConfig.addressLine1}</div>
                    <div className="muted">{siteConfig.addressLine2}</div>
                </div>

                <div className="footer-links">
                    <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
                    <a href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">Get Directions</a>
                    <a href={siteConfig.yelpUrl} target="_blank" rel="noreferrer">Yelp</a>
                </div>
            </div>
        </footer>
    );
}