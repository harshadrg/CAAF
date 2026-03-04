import ServiceSection from './ServiceSection';
import { CheckSquare } from '../ui/Icons';

const icon = <CheckSquare size={26} aria-hidden="true" />;

export default function AuditAssuranceSection() {
    return (
        <ServiceSection
            id="audit"
            icon={icon}
            title="Audit & Assurance"
            description="Independent, structured audit and assurance services providing objective assessment of your control environment and compliance posture."
            services={[
                'IT General Controls (ITGC) audits',
                'Cybersecurity maturity assessments',
                'Risk-based internal audits',
                'Control design and operating effectiveness reviews',
                'Remediation validation and re-testing',
                'Third-party and vendor audit support',
                'Audit committee reporting',
                'Management action plan tracking',
            ]}
            accentColor="var(--color-secondary)"
            accentColorSubtle="var(--color-secondary-subtle)"
        />
    );
}