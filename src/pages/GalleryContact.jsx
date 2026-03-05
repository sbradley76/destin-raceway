import MediaFrame from "../components/MediaFrame.jsx";
import PlaceholderMedia from "../components/PlaceholderMedia.jsx";
import { siteConfig } from "../config/siteConfig";

export default function GalleryContact() {
    const galleryItems = (siteConfig.media?.gallery || []).map((src, i) => ({
        id: i + 1,
        src,
        alt: `Destin Raceway gallery image ${i + 1}`,
    }));

    return (
        <div className="page">
            <div className="container">
                <h1>Gallery / Contact</h1>
                <p className="lead">Photos now, more coming soon.</p>

                <div className="gallery">
                    {galleryItems.length ? (
                        galleryItems.map((g) => (
                            <MediaFrame key={g.id} ratio="1/1" src={g.src} alt={g.alt} className="gallery-item" />
                        ))
                    ) : (
                        Array.from({ length: 8 }).map((_, i) => (
                            <PlaceholderMedia key={i} ratio="1/1" label={`Gallery image ${i + 1}`} />
                        ))
                    )}
                </div>

                <div className="panel contact-panel">
                    <div>
                        <h2 className="panel-title">Contact</h2>
                        <div className="contact-line">
                            <strong>Phone:</strong> <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
                        </div>
                        <div className="contact-line">
                            <strong>Address:</strong> {siteConfig.addressLine1}, {siteConfig.addressLine2}
                        </div>
                        <div className="contact-actions">
                            <a className="btn btn-primary" href={`tel:${siteConfig.phoneRaw}`}>
                                Call
                            </a>
                            <a className="btn btn-ghost" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">
                                Directions
                            </a>
                            <a className="btn btn-ghost" href={siteConfig.yelpUrl} target="_blank" rel="noreferrer">
                                Yelp
                            </a>
                        </div>
                    </div>

                    <div className="map-embed">
                        <iframe
                            title="Map"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=26000%20Emerald%20Coast%20Pkwy%20Destin%20FL%2032541&output=embed"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
