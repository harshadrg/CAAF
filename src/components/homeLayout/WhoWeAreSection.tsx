import { Shield, Pulse, Globe, Layout } from '../ui/Icons';

interface Pillar {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const pillars: Pillar[] = [
    {
        icon: <Shield size={20} aria-hidden="true" />,
        title: 'Governance-First Approach',
        description:
            'We embed governance principles at the foundation of every engagement, ensuring accountability and defensibility.',
    },
    {
        icon: <Pulse size={20} aria-hidden="true" />,
        title: 'Regulatory-Aligned Frameworks',
        description:
            'Every advisory engagement is aligned with applicable regulatory frameworks — DPDP, GDPR, RBI guidelines, and sector-specific mandates.',
    },
    {
        icon: <Globe size={20} aria-hidden="true" />,
        title: 'Technical & Audit Integration',
        description:
            'Our model uniquely integrates cybersecurity technical expertise with audit rigor for holistic, defensible outcomes.',
    },
    {
        icon: <Layout size={20} aria-hidden="true" />,
        title: 'Board-Ready Reporting',
        description:
            'We translate complex technical and regulatory findings into clear, executive-level reports for board and leadership consumption.',
    },
];

export default function WhoWeAreSection() {
    return (
        <section
            className="section-padding bg-(--color-surface) border-b border-(--color-border)"
            aria-labelledby="who-we-are-heading"
        >
            <div className="container-max lg:px-8">

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-14">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) mb-3 sm:mb-4">
                        Who We Are
                    </span>
                    <h2
                        id="who-we-are-heading"
                        className="text-(--color-text-primary) mb-3 sm:mb-5"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Independent. Structured. Accountable.
                    </h2>
                    <p className="text-(--color-text-secondary) text-base sm:text-lg leading-relaxed">
                        CAAF operates at the intersection of compliance, risk, cybersecurity, and secure
                        digital engineering. We advise boards and executive leadership on building
                        resilient control environments across IT, OT, and digital ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="flex flex-col gap-3 p-5 sm:p-6 rounded-xl glass-panel hover:border-(--color-primary)/40 hover:shadow-lg transition-all duration-200"
                        >
                            {/* Row 1: icon + title side by side */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-(--color-primary)"
                                    style={{ background: 'var(--color-primary-subtle)' }}
                                >
                                    {pillar.icon}
                                </div>
                                <h3 className="text-sm sm:text-base font-semibold text-(--color-text-primary) leading-snug">
                                    {pillar.title}
                                </h3>
                            </div>

                            {/* Row 2: description full width, normal readable size */}
                            <p className="text-sm text-(--color-text-muted) leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}