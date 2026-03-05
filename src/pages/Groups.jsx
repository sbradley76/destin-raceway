import PlaceholderMedia from "../components/PlaceholderMedia.jsx";
import { siteConfig } from "../config/siteConfig";

export default function Groups() {
    return (
        <div className="page">
            <div className="container">
                <h1>Groups</h1>
                <p className="lead">
                    Bringing a crew? Call ahead so we can keep it smooth and moving.
                </p>

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
                            <a className="btn btn-primary" href={`tel:${siteConfig.phoneRaw}`}>Call Now</a>
                        </div>
                    </div>
                    <div>
                        <PlaceholderMedia ratio="16/9" label="Group photo placeholder" />
                    </div>
                </div>
            </div>
        </div>
    );
}