import { siteConfig } from "../config/siteConfig";
import PlaceholderMedia from "../components/PlaceholderMedia.jsx";

export default function Experiences() {
    return (
        <div className="page">
            <div className="container">
                <h1>Experiences</h1>
                <p className="lead">Simple, safe, and fun — pick your laps.</p>

                <div className="stack">
                    {siteConfig.experiences.map((x) => (
                        <div className="panel" key={x.title}>
                            <div className="panel-grid">
                                <PlaceholderMedia ratio="4/3" label={`${x.title} photo`} />
                                <div>
                                    <h2 className="panel-title">{x.title}</h2>
                                    <div className="badge">{x.laps}</div>
                                    <ul className="bullets">
                                        {x.highlights.map((h) => <li key={h}>{h}</li>)}
                                    </ul>

                                    <div className="panel-note">
                                        <strong>Pricing:</strong> Add prices here (or “Call for today’s pricing”).
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="panel">
                    <h2 className="panel-title">Rules & Safety</h2>
                    <ul className="bullets">
                        <li>Seatbelts required.</li>
                        <li>Kids may ride with supervision.</li>
                        <li>No aggressive driving or excessive bumping.</li>
                        <li>Listen to the staff — safety briefing before driving.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}