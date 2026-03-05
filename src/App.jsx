import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout.jsx";

import Home from "./pages/Home.jsx";
import Experiences from "./pages/Experiences.jsx";
import Groups from "./pages/Groups.jsx";
import GalleryContact from "./pages/GalleryContact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<SiteLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/gallery" element={<GalleryContact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
