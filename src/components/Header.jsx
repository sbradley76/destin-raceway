import { NavLink } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "../config/siteConfig";

const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-inner">
                <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
                    <div className="brand-title">{siteConfig.name}</div>
                    <div className="brand-sub">Dune Buggies • Nascarts • Destin, FL</div>
                </NavLink>

                <nav className="nav-desktop">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/experiences" className={linkClass}>Experiences</NavLink>
                    <NavLink to="/groups" className={linkClass}>Groups</NavLink>
                    <NavLink to="/gallery" className={linkClass}>Gallery / Contact</NavLink>
                </nav>

                <div className="header-cta">
                    <a className="btn btn-ghost" href={`tel:${siteConfig.phoneRaw}`}>Call</a>
                    <a className="btn btn-primary" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">
                        Directions
                    </a>
                </div>

                <button
                    className="hamburger"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {open && (
                <div className="mobile-menu">
                    <div className="container mobile-menu-inner">
                        <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
                        <NavLink to="/experiences" className={linkClass} onClick={() => setOpen(false)}>Experiences</NavLink>
                        <NavLink to="/groups" className={linkClass} onClick={() => setOpen(false)}>Groups</NavLink>
                        <NavLink to="/gallery" className={linkClass} onClick={() => setOpen(false)}>Gallery / Contact</NavLink>

                        <div className="mobile-menu-cta">
                            <a className="btn btn-ghost" href={`tel:${siteConfig.phoneRaw}`}>Call</a>
                            <a className="btn btn-primary" href={siteConfig.directionsUrl} target="_blank" rel="noreferrer">
                                Directions
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}