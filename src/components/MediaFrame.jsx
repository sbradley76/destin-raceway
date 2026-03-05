export default function MediaFrame({
  type = "image",
  src,
  alt = "",
  ratio = "16/9",
  poster,
  className = "",
}) {
  // Fallback: if no src is provided, render nothing (caller can show PlaceholderMedia)
  if (!src) return null;

  return (
    <div className={`media-frame media-frame-aspect ${className}`.trim()} style={{ aspectRatio: ratio }}>
      {type === "video" ? (
        <video
          className="media-el"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
        />
      ) : (
        <img className="media-el" src={src} alt={alt} loading="lazy" decoding="async" />
      )}
    </div>
  );
}
