import IndustryCard from './IndustryCard';
import { MapNetwork } from '../ui/Icons';

const icon = <MapNetwork size={26} aria-hidden="true" />;

export default function ManufacturingIndustrialCard() {
    return (
        <IndustryCard
            icon={icon}
            title="Manufacturing & Industrial"
            description="OT security governance, industrial resilience planning, and IT/OT convergence advisory for manufacturing enterprises."
            services={[
                'ICS/SCADA security governance',
                'OT risk assessments and gap analysis',
                'Industrial cybersecurity architecture review',
                'Operational technology resilience planning',
                'IT/OT convergence security framework',
                'Vendor and supply chain risk management',
            ]}
            accentColor="var(--color-secondary)"
            accentColorSubtle="var(--color-secondary-subtle)"
        />
    );
}