import Reveal from "./Reveal.jsx";
import PlaceholderMedia from "./PlaceholderMedia.jsx";
import MediaFrame from "./MediaFrame.jsx";

export default function SwipeGallery({ items = [] }) {
    return (
        <Reveal>
            <div className="swipe-gallery">
                <div className="swipe-title-row">
                    <h2 className="h2">Photos</h2>
                    <div className="muted small">Swipe ?</div>
                </div>

                <div className="swipe-row" role="list">
                    {(items.length ? items : Array.from({ length: 8 }).map((_, i) => ({ id: i + 1 }))).map(
                        (it, i) => (
                            <div className="swipe-item" role="listitem" key={it?.id ?? i}>
                                {it?.src ? (
                                    <MediaFrame ratio={it.ratio || "4/3"} src={it.src} alt={it.alt || it.label || `Gallery ${i + 1}`} />
                                ) : (
                                    <PlaceholderMedia ratio="4/3" label={it?.label ?? `Gallery ${i + 1}`} />
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
        </Reveal>
    );
}
