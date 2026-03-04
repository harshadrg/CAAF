import { Server, Building2, Scale } from '../ui/Icons';

const columns = [
    {
        icon: <Server size={20} aria-hidden="true" />,
        title: 'Technical Experts',
        color: 'var(--color-primary)',
        colorLight: 'var(--color-primary-subtle)',
        members: [
            'Cybersecurity architects',
            'Infrastructure specialists',
            'Secure application developers',
            'OT/ICS security specialists',
            'Penetration testing professionals',
        ],
    },
    {
        icon: <Building2 size={20} aria-hidden="true" />,
        title: 'Audit & Risk Professionals',
        color: 'var(--color-secondary)',
        colorLight: 'var(--color-secondary-subtle)',
        members: [
            'IT general controls auditors',
            'Governance consultants',
            'Control framework specialists',
            'Risk management professionals',
            'Internal audit advisors',
        ],
    },
    {
        icon: <Scale size={20} aria-hidden="true" />,
        title: 'Legal & Regulatory Advisors',
        color: 'var(--color-accent)',
        colorLight: 'var(--color-accent-subtle)',
        members: [
            'Data privacy professionals',
            'Compliance framework experts',
            'Policy design advisors',
            'Regulatory liaison specialists',
            'Legal documentation professionals',
        ],
    },
];

export default function MultidisciplinaryModelSection() {
    return (
        <section
            className="section-padding bg-(--color-surface) border-b border-(--color-border)"
            aria-labelledby="model-heading"
        >
            <div className="container-max lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) mb-3 sm:mb-4">
                        Our Team Model
                    </span>
                    <h2
                        id="model-heading"
                        className="text-(--color-text-primary) mb-3 sm:mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        A Multidisciplinary Team
                    </h2>
                    <p className="text-(--color-text-secondary)">
                        Three distinct disciplines unified under a single advisory mandate — delivering outcomes
                        that are technically rigorous, audit-validated, and legally defensible.
                    </p>
                </div>

                {/*
                  * Mobile:  1 col stacked
                  * Tablet:  still 1 col (content is rich enough that 2-col would be cramped)
                  * Desktop: 3 col side by side
                  *
                  * Each card:
                  *   Row 1  — icon + title inline (colored top border accent)
                  *   Row 2  — member roles as small chip tags instead of a plain checklist.
                  *            Chips use a tinted background derived from the column color,
                  *            which creates visual grouping without needing icons per item.
                  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {columns.map((col) => (
                        <div
                            key={col.title}
                            className="flex flex-col p-5 sm:p-6 rounded-xl glass-panel hover:border-(--color-primary)/30 card-hover"
                            style={{ borderTop: `3px solid ${col.color}` }}
                        >
                            {/* Row 1: icon + title */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                                    style={{ background: col.colorLight, color: col.color }}
                                >
                                    {col.icon}
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-(--color-text-primary) leading-snug">
                                    {col.title}
                                </h3>
                            </div>

                            {/* Row 2: member chips */}
                            <div className="flex flex-wrap gap-2">
                                {col.members.map((member) => (
                                    <span
                                        key={member}
                                        className="inline-block px-3 py-1.5 rounded-full text-xs font-medium leading-none"
                                        style={{
                                            background: `color-mix(in srgb, ${col.color} 10%, transparent)`,
                                            color: col.color,
                                            border: `1px solid color-mix(in srgb, ${col.color} 20%, transparent)`,
                                        }}
                                    >
                                        {member}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}