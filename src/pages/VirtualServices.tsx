import VirtualServicesHero from '../components/virtualServicesLayout/VirtualServicesHero';
import VCISOSection from '../components/virtualServicesLayout/VCISOSection';
import VDPOSection from '../components/virtualServicesLayout/VDPOSection';
import VirtualServicesCTA from '../components/virtualServicesLayout/VirtualServicesCTA';

export default function VirtualServices() {
    return (
        <>
            <VirtualServicesHero />
            <VCISOSection />
            <VDPOSection />
            <VirtualServicesCTA />
        </>
    );
}