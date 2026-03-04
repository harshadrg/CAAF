import IndustryCard from './IndustryCard';
import { Landmark } from '../ui/Icons';

const icon = <Landmark size={26} aria-hidden="true" />;

export default function BankingFinancialCard() {
    return (
        <IndustryCard
            icon={icon}
            title="Banking & Financial Services"
            description="Regulatory alignment, IT audit readiness, and cybersecurity governance for banks, NBFCs, and financial institutions."
            services={[
                'RBI IT framework and circular compliance advisory',
                'IT General Controls (ITGC) audits',
                'Cybersecurity maturity assessments',
                'Third-party and vendor risk management',
                'Data privacy compliance (DPDP, GDPR)',
                'Incident response governance',
            ]}
            accentColor="var(--color-primary)"
            accentColorSubtle="var(--color-primary-subtle)"
        />
    );
}