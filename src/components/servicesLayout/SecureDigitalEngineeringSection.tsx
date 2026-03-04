import ServiceSection from './ServiceSection';
import { Monitor } from '../ui/Icons';

const icon = <Monitor size={26} aria-hidden="true" />;

export default function SecureDigitalEngineeringSection() {
    return (
        <ServiceSection
            id="digital-engineering"
            icon={icon}
            title="Secure Digital Engineering"
            description="End-to-end secure application and digital platform development, integrating security into every phase of the engineering lifecycle."
            subServices={[
                {
                    title: 'Android Mobile Application Development',
                    description: 'Enterprise-grade secure mobile applications with robust authentication and data protection.',
                    items: [
                        'Secure mobile architecture',
                        'Enterprise authentication integration',
                        'Data encryption and protection',
                        'OWASP Mobile Top 10 compliance',
                    ],
                },
                {
                    title: 'Web Application Development',
                    description: 'Secure backend architecture with role-based controls and audit-ready access management.',
                    items: [
                        'Secure backend architecture',
                        'Role-based access control (RBAC)',
                        'API security design',
                        'OWASP Top 10 mitigation',
                    ],
                },
                {
                    title: 'UI/UX Design',
                    description: 'User-centric design aligned with governance requirements and access control principles.',
                    items: [
                        'Security-aware UX design',
                        'Accessible interface design',
                        'Governance-aligned user flows',
                        'Usability and compliance balance',
                    ],
                },
                {
                    title: 'Secure Development Lifecycle (SDL)',
                    description: 'Systematic security integration throughout the development process from design to deployment.',
                    items: [
                        'Threat modeling and design review',
                        'Secure coding standards',
                        'Pre-deployment security validation',
                        'Penetration testing integration',
                    ],
                },
            ]}
            accentColor="var(--color-primary)"
            accentColorSubtle="var(--color-primary-subtle)"
        />
    );
}