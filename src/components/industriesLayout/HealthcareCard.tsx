import IndustryCard from './IndustryCard';
import { HeartPulse } from '../ui/Icons';

const icon = <HeartPulse size={26} aria-hidden="true" />;

export default function HealthcareCard() {
    return (
        <IndustryCard
            icon={icon}
            title="Healthcare"
            description="Patient data protection, privacy governance, and secure digital platform advisory for healthcare organizations."
            services={[
                'Patient data protection framework',
                'DPDP and HIPAA compliance advisory',
                'Healthcare application security',
                'Privacy impact assessments',
                'Medical records governance',
                'Third-party health data processor oversight',
            ]}
            accentColor="var(--color-accent)"
            accentColorSubtle="var(--color-accent-subtle)"
        />
    );
}