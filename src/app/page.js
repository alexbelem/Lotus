// src/app/page.js
import HeroSection from '../components/HeroSection/HeroSection';
import {FeaturesCards} from "@/components/ServicesSection/FeaturesCards";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesCards />
        </>
    );
}