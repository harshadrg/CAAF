import ServiceSection from './ServiceSection';
import { MapNetwork } from '../ui/Icons';

const icon = <MapNetwork size={26} aria-hidden="true" />;

export default function ITOTSecuritySection() {
    return (
        <ServiceSection
            id="it-ot"
            icon={icon}
            title="IT & OT Security Advisory"
            description="Specialized advisory for organizations with industrial control systems, SCADA environments, and critical operational technology infrastructure requiring dedicated cyber governance."
            services={[
                'ICS / SCADA security governance',
                'OT risk assessment and gap analysis',
                'Industrial cybersecurity architecture review',
                'Operational technology resilience planning',
                'IT/OT convergence security framework',
                'Incident response planning for OT environments',
                'OT vendor security assessment',
                'Industrial asset inventory and classification',
            ]}
            accentColor="var(--color-accent)"
            accentColorSubtle="var(--color-accent-subtle)"
        />
    );
}