// src/app/page.js
import HeroSection from '../components/HeroSection';
import {FeaturesCards} from "@/components/ServicesSection/FeaturesCards";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesCards />

        </>
    );
}