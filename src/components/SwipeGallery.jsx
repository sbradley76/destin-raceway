import Reveal from "./Reveal.jsx";
import PlaceholderMedia from "./PlaceholderMedia.jsx";

export default function SwipeGallery({ items = [] }) {
    return (
        <Reveal>
            <div className="swipe-gallery">
                <div className="swipe-title-row">
                    <h2 className="h2">Photos</h2>
                    <div className="muted small">Swipe ?</div>
                </div>

                <div className="swipe-row" role="list">
                    {(items.length ? items : Array.from({ length: 8 })).map((it, i) => (
                        <div className="swipe-item" role="listitem" key={it?.id ?? i}>
                            <PlaceholderMedia ratio="4/3" label={it?.label ?? `Gallery ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </Reveal>
    );
}