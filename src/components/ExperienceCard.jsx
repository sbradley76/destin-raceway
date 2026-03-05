import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlaceholderMedia from "./PlaceholderMedia.jsx";
import MediaFrame from "./MediaFrame.jsx";

export default function ExperienceCard({
    title,
    laps,
    highlights,
    details,
    imageLabel = "Experience photo",
    imageSrc,
    imageAlt,
}) {
    const [open, setOpen] = useState(false);

    return (
        <motion.button
            type="button"
            className={"exp-card" + (open ? " open" : "")}
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.99 }}
            aria-expanded={open}
        >
            <div className="exp-card-media">
                {imageSrc ? (
                    <MediaFrame ratio="4/3" src={imageSrc} alt={imageAlt || imageLabel} />
                ) : (
                    <PlaceholderMedia ratio="4/3" label={imageLabel} />
                )}
                <div className="exp-card-badge">{laps}</div>
            </div>

            <div className="exp-card-body">
                <div className="exp-card-title-row">
                    <div className="exp-card-title">{title}</div>
                    <div className="exp-card-chevron" aria-hidden="true">
                        <span />
                        <span />
                    </div>
                </div>

                <ul className="exp-card-bullets">
                    {highlights.slice(0, 3).map((h) => (
                        <li key={h}>{h}</li>
                    ))}
                </ul>

                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            className="exp-card-expand"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                        >
                            <div className="exp-card-divider" />
                            <div className="exp-card-details">
                                {details?.length ? (
                                    <ul className="exp-card-bullets tight">
                                        {details.map((d) => (
                                            <li key={d}>{d}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="muted">
                                        Add a short description here (pricing, requirements, what to
                                        expect).
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    );
}
