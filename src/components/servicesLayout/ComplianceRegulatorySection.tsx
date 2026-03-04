import ServiceSection from './ServiceSection';
import { FileText } from '../ui/Icons';

const icon = <FileText size={26} aria-hidden="true" />;

export default function ComplianceRegulatorySection() {
    return (
        <ServiceSection
            id="compliance"
            icon={icon}
            title="Compliance & Regulatory Advisory"
            description="Structured regulatory compliance advisory aligned with applicable frameworks across data protection, financial services, and sector-specific mandates."
            services={[
                'DPDP (Digital Personal Data Protection) implementation',
                'GDPR compliance alignment',
                'RBI IT framework advisory',
                'Regulatory readiness assessments',
                'Vendor risk management programs',
                'Policy and procedure framework design',
                'Compliance gap analysis',
                'Regulatory change management',
            ]}
            accentColor="var(--color-primary)"
            accentColorSubtle="var(--color-primary-subtle)"
        />
    );
}