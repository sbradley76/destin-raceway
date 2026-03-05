import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

function Stars({ count = 5 }) {
    return (
        <div className="stars" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} aria-hidden="true">★</span>
            ))}
        </div>
    );
}

export default function ReviewsSection() {
    const r = siteConfig.reviews;
    if (!r?.items?.length) return null;

    return (
        <section className="section2">
            <div className="container">
                <div className="reviews-head">
                    <div>
                        <h2 className="h2">What people are saying</h2>
                        <div className="reviews-sub">
                            <Stars count={5} />
                            <span className="muted">
                                {r.overallRating.toFixed(1)} / 5.0 on {r.sourceName} • {r.reviewCount} reviews
                            </span>
                        </div>
                    </div>

                    <a className="btn btn-soft" href={r.sourceUrl} target="_blank" rel="noreferrer">
                        Read more on {r.sourceName}
                    </a>
                </div>

                <div className="reviews-row" role="list">
                    {r.items.map((item) => (
                        <motion.article
                            key={`${item.name}-${item.date}`}
                            className="review-card"
                            role="listitem"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Stars count={5} />
                            <p className="review-text">{item.text}</p>
                            <div className="review-meta">
                                <span className="review-name">{item.name}</span>
                                <span className="muted small">• {item.date}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}