import ServiceSection from './ServiceSection';
import { Shield } from '../ui/Icons';

const icon = <Shield size={26} aria-hidden="true" />;

export default function CybersecurityAdvisorySection() {
    return (
        <ServiceSection
            id="cybersecurity"
            icon={icon}
            title="Cybersecurity & Technical Advisory"
            description="Hands-on cybersecurity advisory spanning network architecture, data protection, identity management, and enterprise security governance."
            services={[
                'Firewall architecture review and governance',
                'Data Leak Prevention (DLP) strategy and implementation',
                'Identity and Access Management (IAM) advisory',
                'Privileged Access Management (PAM) design',
                'Network segmentation architecture',
                'Security operations advisory',
                'Vulnerability management program design',
                'Security awareness program development',
            ]}
            accentColor="var(--color-secondary)"
            accentColorSubtle="var(--color-secondary-subtle)"
        />
    );
}