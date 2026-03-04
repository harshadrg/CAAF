import ServiceSection from './ServiceSection';
import { User } from '../ui/Icons';

const icon = <User size={26} aria-hidden="true" />;

export default function VirtualExecutiveSection() {
    return (
        <ServiceSection
            id="virtual-exec"
            icon={icon}
            title="Virtual Executive Services"
            description="Senior-level cybersecurity and privacy oversight without the cost and complexity of full-time executive hires. Structured governance, strategic direction, board-level accountability."
            subServices={[
                {
                    title: 'Virtual Chief Information Security Officer (vCISO)',
                    description: 'Strategic cybersecurity oversight, program governance, and board-level reporting.',
                    items: [
                        'Strategic cybersecurity oversight',
                        'Security program governance',
                        'Risk supervision and reporting',
                        'Board-level communication',
                        'Compliance alignment',
                        'Vendor security oversight',
                    ],
                },
                {
                    title: 'Virtual Data Protection Officer (vDPO)',
                    description: 'Independent privacy governance, DPIA oversight, and regulatory documentation.',
                    items: [
                        'Privacy governance framework',
                        'DPIA oversight and review',
                        'Regulatory documentation management',
                        'Breach notification governance',
                        'Privacy training programs',
                        'Third-party privacy assessments',
                    ],
                },
            ]}
            accentColor="var(--color-primary)"
            accentColorSubtle="var(--color-primary-subtle)"
            link={{ to: '/virtual-services', label: 'Learn more about Virtual Executive Services' }}
        />
    );
}