import IndustriesHero from '../components/industriesLayout/IndustriesHero';
import BankingFinancialCard from '../components/industriesLayout/BankingFinancialCard';
import ManufacturingIndustrialCard from '../components/industriesLayout/ManufacturingIndustrialCard';
import HealthcareCard from '../components/industriesLayout/HealthcareCard';
import TechnologySaaSCard from '../components/industriesLayout/TechnologySaaSCard';
import IndustriesCTA from '../components/industriesLayout/IndustriesCTA';

export default function Industries() {
    return (
        <>
            <IndustriesHero />
            <section className="section-padding bg-(--color-background)" aria-labelledby="industries-grid-heading">
                <div className="container-max lg:px-8">
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) mb-4">
                            Sector Expertise
                        </span>
                        <h2
                            id="industries-grid-heading"
                            className="text-(--color-text-primary) mb-4"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Specialized Industry Advisory
                        </h2>
                        <p className="text-(--color-text-secondary)">
                            Deep domain knowledge combined with structured advisory methodology across key regulated sectors.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <BankingFinancialCard />
                        <ManufacturingIndustrialCard />
                        <HealthcareCard />
                        <TechnologySaaSCard />
                    </div>
                </div>
            </section>
            <IndustriesCTA />
        </>
    );
}
