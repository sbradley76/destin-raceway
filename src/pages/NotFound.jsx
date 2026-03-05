import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="page">
            <div className="container">
                <h1>Page not found</h1>
                <p className="lead">Let’s get you back on track.</p>
                <Link className="btn btn-primary" to="/">Go Home</Link>
            </div>
        </div>
    );
}