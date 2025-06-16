// src/app/page.js
import HeroSection from '../components/HeroSection/HeroSection';
import {FeaturesCards} from "@/components/ServicesSection/FeaturesCards";

export default function HomePage() {
    return (
        <>
            <section id = "hero">
                <HeroSection />
            </section>
            <section id = "features">
                <FeaturesCards />
            </section>
        </>
    );
}