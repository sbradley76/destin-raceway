import PlaceholderMedia from "../components/PlaceholderMedia.jsx";
import MediaFrame from "../components/MediaFrame.jsx";
import { siteConfig } from "../config/siteConfig";

export default function Groups() {
    return (
        <div className="page">
            <div className="container">
                <h1>Parties & Groups</h1>
                <p className="lead">Bringing a crew? Call ahead so we can keep it smooth and moving.</p>

                <div className="split">
                    <div>
                        <div className="panel">
                            <h2 className="panel-title">Great for</h2>
                            <ul className="bullets">
                                <li>Family trips</li>
                                <li>Friends / teens</li>
                                <li>Birthday stops</li>
                                <li>Quick “something fun” outing</li>
                            </ul>

                            <div className="panel-note">
                                We’re not a big chain — just good, controlled track fun. Call and we’ll tell you the best time to swing by.
                            </div>

                            <div className="row">
                                <a className="btn btn-primary" href={`tel:${siteConfig.phoneRaw}`}>
                                    Call Now
                                </a>
                                <a className="btn btn-ghost" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">
                                    Directions
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {siteConfig.media?.heroPoster ? (
                            <MediaFrame ratio="16/9" src={siteConfig.media.heroPoster} alt="Group track fun" />
                        ) : (
                            <PlaceholderMedia ratio="16/9" label="Group photo placeholder" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
