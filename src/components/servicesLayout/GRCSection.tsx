import ServiceSection from './ServiceSection';
import { Grid } from '../ui/Icons';

const icon = <Grid size={26} aria-hidden="true" />;

export default function GRCSection() {
    return (
        <ServiceSection
            id="grc"
            icon={icon}
            title="Governance, Risk & Compliance (GRC)"
            description="Integrated GRC advisory services that embed risk-awareness into organizational governance structures and decision-making frameworks."
            services={[
                'Enterprise risk management framework design',
                'Risk register development and maintenance',
                'Control testing and effectiveness validation',
                'Board and executive risk reporting',
                'GRC platform implementation advisory',
                'Risk appetite and tolerance framework',
                'Operational risk assessment',
                'Regulatory risk mapping',
            ]}
            accentColor="var(--color-accent)"
            accentColorSubtle="var(--color-accent-subtle)"
        />
    );
}