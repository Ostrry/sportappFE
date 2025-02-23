import React from "react";
import { CssBaseline } from "@mui/material";
import Navigation from "../components/Navigation";
import TournamentSection from "../components/TournamentSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import CarouselBanner from "../components/CarouselBanner";

const LandingPage = () => {
    return (
        <>
            <CssBaseline />
            <Navigation />
            <CarouselBanner />
            <TournamentSection />
            <FeaturesSection />
            <Footer />
        </>
    );
};

export default LandingPage;