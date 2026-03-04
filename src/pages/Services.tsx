import ServicesHero from '../components/servicesLayout/ServicesHero';
import ServicesAnchorNav from '../components/servicesLayout/ServicesAnchorNav';
import ComplianceRegulatorySection from '../components/servicesLayout/ComplianceRegulatorySection';
import AuditAssuranceSection from '../components/servicesLayout/AuditAssuranceSection';
import GRCSection from '../components/servicesLayout/GRCSection';
import VirtualExecutiveSection from '../components/servicesLayout/VirtualExecutiveSection';
import CybersecurityAdvisorySection from '../components/servicesLayout/CybersecurityAdvisorySection';
import ITOTSecuritySection from '../components/servicesLayout/ITOTSecuritySection';
import SecureDigitalEngineeringSection from '../components/servicesLayout/SecureDigitalEngineeringSection';
import ServicesBottomCTA from '../components/servicesLayout/ServicesBottomCTA';


export default function Services() {
    return (
        <>
            <ServicesHero />
            <ServicesAnchorNav />

            <div className="section-padding bg-(--color-background)">
                <div className="container-max lg:px-8">
                    <div className="flex flex-col gap-6 sm:gap-8">
                        <div id="compliance">          <ComplianceRegulatorySection />    </div>
                        <div id="audit">               <AuditAssuranceSection />          </div>
                        <div id="grc">                 <GRCSection />                     </div>
                        <div id="virtual-exec">        <VirtualExecutiveSection />        </div>
                        <div id="cybersecurity">       <CybersecurityAdvisorySection />   </div>
                        <div id="it-ot">               <ITOTSecuritySection />            </div>
                        <div id="digital-engineering"> <SecureDigitalEngineeringSection /></div>
                    </div>

                    <ServicesBottomCTA />
                </div>
            </div>
        </>
    );
}