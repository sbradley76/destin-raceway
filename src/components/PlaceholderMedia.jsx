export default function PlaceholderMedia({ ratio = "16/9", label = "Photo Placeholder" }) {
    return (
        <div className="ph" style={{ aspectRatio: ratio }}>
            <div className="ph-inner">
                <div className="ph-dot" />
                <div className="ph-text">{label}</div>
            </div>
        </div>
    );
}