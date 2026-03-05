import { siteConfig } from "../config/siteConfig";
import Reveal from "../components/Reveal.jsx";
import PlaceholderMedia from "../components/PlaceholderMedia.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import SwipeGallery from "../components/SwipeGallery.jsx";
import ReviewsSection from "../components/ReviewsSection.jsx";
import MediaFrame from "../components/MediaFrame.jsx";

export default function Home() {
    const galleryItems = (siteConfig.media?.gallery || []).map((src, i) => ({
        id: i + 1,
        src,
        alt: `Destin Raceway photo ${i + 1}`,
        label: `Photo ${i + 1}`,
    }));

    return (
        <div>
            {/* HERO */}
            <section className="hero2">
                <div className="container hero2-grid">
                    <Reveal className="hero2-copy">
                        <div className="pill">Family-friendly • Affordable • Quick stop</div>

                        <h1 className="h1">
                            Destin Raceway
                            <span className="h1-sub">10 laps in a dune buggy • 20 laps in a nascart</span>
                        </h1>

                        <p className="lead2">
                            Safe, controlled track fun for kids, teens, and adults. Buckle up, follow the rules,
                            and enjoy the laps.
                        </p>

                        <div className="hero2-actions">
                            <a className="btn btn-primary" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">
                                Get Directions
                            </a>
                            <a className="btn btn-soft" href={`tel:${siteConfig.phoneRaw}`}>
                                Call Now
                            </a>
                        </div>

                        <div className="trust-row">
                            <span>Seatbelts required</span>
                            <span>Kids w/ supervision</span>
                            <span>No aggressive driving</span>
                        </div>
                    </Reveal>

                    <Reveal className="hero2-media" delay={0.05}>
                        {siteConfig.media?.heroVideo ? (
                            <MediaFrame
                                type="video"
                                ratio="16/9"
                                src={siteConfig.media.heroVideo}
                                poster={siteConfig.media.heroPoster}
                                alt="Dune buggies on the oval track"
                            />
                        ) : (
                            <div className="media-frame">
                                <PlaceholderMedia ratio="16/9" label="Short looping clip / hero photo" />
                            </div>
                        )}
                        <div className="media-caption muted small">
                            If the video won’t autoplay on a phone, it will still play when tapped.
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* EXPERIENCES */}
            <section className="section2">
                <div className="container">
                    <Reveal>
                        <h2 className="h2">Pick your experience</h2>
                        <p className="muted">Tap a card for details. Keep it safe, keep it fun.</p>
                    </Reveal>

                    <div className="exp-grid">
                        <Reveal delay={0.05}>
                            <ExperienceCard
                                title={siteConfig.experiences[0].title}
                                laps={siteConfig.experiences[0].laps}
                                highlights={siteConfig.experiences[0].highlights}
                                details={[
                                    "Kids can ride with supervision.",
                                    "Adults: no racing on dune buggies — safe driving only.",
                                    "Seatbelts required. Follow staff briefing.",
                                ]}
                                imageLabel="Dune buggy track photo"
                                imageSrc={siteConfig.media?.duneCard}
                                imageAlt="Dune buggy track in Destin"
                            />
                        </Reveal>

                        <Reveal delay={0.1}>
                            <ExperienceCard
                                title={siteConfig.experiences[1].title}
                                laps={siteConfig.experiences[1].laps}
                                highlights={siteConfig.experiences[1].highlights}
                                details={[
                                    "Kids can ride with supervision.",
                                    "Teens/adults can have friendly competition.",
                                    "No excessive bumping or aggressive driving.",
                                    "Seatbelts required. Follow staff briefing.",
                                ]}
                                imageLabel="Nascart track photo"
                                imageSrc={siteConfig.media?.nascartCard}
                                imageAlt="Nascarts on the paved track"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            <ReviewsSection />

            {/* WHAT TO EXPECT */}
            <section className="section2 soft">
                <div className="container">
                    <div className="expect-grid">
                        <Reveal>
                            <h2 className="h2">What to expect</h2>
                            <div className="steps3">
                                <div className="step">
                                    <div className="step-num">1</div>
                                    <div>
                                        <div className="step-title">Arrive</div>
                                        <div className="muted">Easy stop while you’re in Destin.</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-num">2</div>
                                    <div>
                                        <div className="step-title">Quick rules</div>
                                        <div className="muted">Safety briefing + seatbelt check.</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-num">3</div>
                                    <div>
                                        <div className="step-title">Run your laps</div>
                                        <div className="muted">Controlled fun — no aggressive driving.</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.05}>
                            {siteConfig.media?.expect ? (
                                <MediaFrame ratio="16/9" src={siteConfig.media.expect} alt="Track and carts" />
                            ) : (
                                <div className="media-frame">
                                    <PlaceholderMedia ratio="16/9" label="Lineup / track photo" />
                                </div>
                            )}
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* SWIPE GALLERY */}
            <section className="section2">
                <div className="container">
                    <SwipeGallery items={galleryItems} />
                </div>
            </section>

            {/* LOCATION / DECISION MOMENT */}
            <section className="section2 soft">
                <div className="container">
                    <Reveal>
                        <div className="location-card">
                            <div>
                                <h2 className="h2">Find us</h2>
                                <div className="muted">
                                    {siteConfig.addressLine1}
                                    <br />
                                    {siteConfig.addressLine2}
                                </div>

                                <div className="location-actions">
                                    <a className="btn btn-primary" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">
                                        Directions
                                    </a>
                                    <a className="btn btn-soft" href={`tel:${siteConfig.phoneRaw}`}>
                                        Call
                                    </a>
                                </div>

                                <div className="muted small" style={{ marginTop: 10 }}>
                                    Tip: add a “look for the entrance sign” note once you confirm it.
                                </div>
                            </div>

                            <div className="map-shell">
                                <iframe
                                    title="Map"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps?q=26000%20Emerald%20Coast%20Pkwy%20Destin%20FL%2032541&output=embed"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
