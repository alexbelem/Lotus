// src/app/page.js
import HeroSection from '../components/HeroSection/HeroSection';
import {FeaturesCards} from "@/components/ServicesSection/FeaturesCards";
import BookingSection from "@/components/Booking/BookingSection";
export default function HomePage() {
    return (
        <>
            <section id = "hero">
                <HeroSection />
            </section>
            <section id = "features">
                <FeaturesCards />
            </section>
            <section id="booking">
                <BookingSection />
            </section>
        </>
    );
}