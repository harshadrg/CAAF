import HeroSection from "../components/homeLayout/HeroSection";
import WhoWeAreSection from "../components/homeLayout/WhoWeAreSection";
import CAAFAdvantageSection from "../components/homeLayout/CAAFAdvantageSection";
import ServicesOverviewSection from "../components/homeLayout/ServicesOverviewSection";
import IndustriesSection from "../components/homeLayout/IndustriesSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <WhoWeAreSection />
            <CAAFAdvantageSection />
            <ServicesOverviewSection />
            <IndustriesSection />
        </>
    );
}