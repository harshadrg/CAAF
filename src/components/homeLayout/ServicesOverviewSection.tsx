import Button from '../ui/Button';
import { FileText, CheckSquare, User, Monitor, ArrowRight } from '../ui/Icons';

interface ServicePillar {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    colorLight: string;
}

const services: ServicePillar[] = [
    {
        icon: <FileText size={20} aria-hidden="true" />,
        title: 'Compliance & Regulatory Advisory',
        description:
            'DPDP, GDPR, RBI advisory, policy frameworks, and compliance readiness for regulated enterprises.',
        color: 'var(--color-primary)',
        colorLight: 'var(--color-primary-subtle)',
    },
    {
        icon: <CheckSquare size={20} aria-hidden="true" />,
        title: 'Audit & Assurance',
        description:
            'ITGC audits, cybersecurity maturity assessments, control validation, and risk-based internal audits.',
        color: 'var(--color-secondary)',
        colorLight: 'var(--color-secondary-subtle)',
    },
    {
        icon: <User size={20} aria-hidden="true" />,
        title: 'Virtual Executive Services',
        description:
            'vCISO & vDPO oversight providing structured cybersecurity and privacy governance without the overhead.',
        color: 'var(--color-accent)',
        colorLight: 'var(--color-accent-subtle)',
    },
    {
        icon: <Monitor size={20} aria-hidden="true" />,
        title: 'Secure Digital Engineering',
        description:
            'Cybersecurity solutions, OT advisory, secure mobile and web application development, and SDL processes.',
        color: 'var(--color-primary-light)',
        colorLight: 'var(--color-primary-subtle)',
    },
];

export default function ServicesOverviewSection() {
    return (
        <section
            className="section-padding bg-(--color-background)"
            aria-labelledby="services-overview-heading"
        >
            <div className="container-max lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12 lg:mb-14">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) mb-3 sm:mb-4">
                        Our Services
                    </span>
                    <h2
                        id="services-overview-heading"
                        className="text-(--color-text-primary) mb-3 sm:mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Four Service Pillars
                    </h2>
                    <p className="text-(--color-text-secondary)">
                        Integrated advisory capabilities spanning compliance, audit, cyber risk, and secure
                        engineering.
                    </p>
                </div>

                {/*
                  * Mobile:  1 col — cards stack, full width, easy to read
                  * Tablet:  2 col — pairs naturally
                  * Desktop: 4 col — all four side by side
                  *
                  * Each card: icon + title in one flex row, description below at
                  * full card width — no text shrinking needed at any breakpoint.
                  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-10">
                    {services.map((svc) => (
                        <div
                            key={svc.title}
                            className="flex flex-col gap-3 p-5 sm:p-6 rounded-xl glass-panel hover:border-(--color-primary)/30 card-hover cursor-default"
                            style={{ boxShadow: 'var(--shadow-sm)' }}
                        >
                            {/* Row 1: icon + title */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                                    style={{ background: svc.colorLight, color: svc.color }}
                                >
                                    {svc.icon}
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-(--color-text-primary) leading-snug">
                                    {svc.title}
                                </h3>
                            </div>

                            {/* Row 2: description — full card width, normal size */}
                            <p className="text-sm text-(--color-text-muted) leading-relaxed">
                                {svc.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        to="/services"
                        variant="ghost"
                        size="md"
                        className="font-semibold text-(--color-primary) hover:text-(--color-primary-dark) group"
                    >
                        View All Services
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform duration-150"
                            aria-hidden="true"
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}