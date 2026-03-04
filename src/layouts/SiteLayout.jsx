import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MobileCtaBar from "../components/MobileCtaBar.jsx";

export default function SiteLayout() {
    const { pathname } = useLocation();

    // simple scroll-to-top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [pathname]);

    return (
        <div className="app-shell">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
            <MobileCtaBar />
        </div>
    );
}