import IndustryCard from './IndustryCard';
import { Code } from '../ui/Icons';

const icon = <Code size={26} aria-hidden="true" />;

export default function TechnologySaaSCard() {
    return (
        <IndustryCard
            icon={icon}
            title="Technology & SaaS"
            description="Secure application development, compliance readiness, and cloud security architecture for technology companies."
            services={[
                'Secure Development Lifecycle (SDL) advisory',
                'Application security testing and review',
                'Cloud security architecture advisory',
                'SaaS compliance frameworks (SOC 2, ISO 27001)',
                'API security governance',
                'Product security program design',
            ]}
            accentColor="var(--color-primary)"
            accentColorSubtle="var(--color-primary-subtle)"
        />
    );
}