import { Shield, Lock, AlertCircle, FileText, Monitor } from '../ui/Icons';

const points = [
    {
        icon: <Shield size={20} aria-hidden="true" />,
        title: 'Independent & Objective Advisory',
        description: 'CAAF operates without vendor affiliations or product sales conflicts, ensuring purely objective guidance aligned to our clients\' interests.',
    },
    {
        icon: <Lock size={20} aria-hidden="true" />,
        title: 'Secure-by-Design Methodology',
        description: 'Security and compliance are embedded at every stage of our engineering and advisory work, not retrofitted as an afterthought.',
    },
    {
        icon: <AlertCircle size={20} aria-hidden="true" />,
        title: 'Integrated Governance Model',
        description: 'Our unified team of technical experts, auditors, and legal advisors delivers cohesive, integrated governance outcomes across all engagements.',
    },
    {
        icon: <FileText size={20} aria-hidden="true" />,
        title: 'Regulatory Defensibility',
        description: 'All outputs — policies, audit reports, risk registers — are structured to withstand regulatory scrutiny and support defensible decision-making.',
    },
    {
        icon: <Monitor size={20} aria-hidden="true" />,
        title: 'Executive-Level Reporting',
        description: 'We translate complex findings into clear board-ready reports that enable informed governance decisions at the leadership level.',
    },
];

export default function WhyCAAFSection() {
    return (
        <section
            className="section-padding bg-(--color-background)"
            aria-labelledby="why-caaf-heading"
        >
            <div className="container-max lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) mb-3 sm:mb-4">
                        Why CAAF
                    </span>
                    <h2
                        id="why-caaf-heading"
                        className="text-(--color-text-primary) mb-3 sm:mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        The CAAF Difference
                    </h2>
                    <p className="text-(--color-text-secondary)">
                        Five principles that define our advisory approach and differentiate CAAF from
                        conventional consultancies.
                    </p>
                </div>

                {/*
                  * Layout: 1 col → 2 col → 3 col
                  *
                  * 5 items in a 3-col grid leaves an orphaned last item that
                  * would snap to the left. Fix: wrap the last item in a separate
                  * centred row rather than using col-span hacks that break at
                  * other breakpoints.
                  */}

                {/* First 4 items — 1 col / 2 col / 2 col */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-3 sm:mb-4 lg:mb-5">
                    {points.slice(0, 4).map((point) => (
                        <div
                            key={point.title}
                            className="flex flex-col gap-3 p-5 sm:p-6 rounded-xl glass-panel hover:border-(--color-primary)/40 hover:shadow-lg transition-all duration-200"
                        >
                            {/* Icon + title row */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-(--color-primary)"
                                    style={{ background: 'var(--color-primary-subtle)' }}
                                >
                                    {point.icon}
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-(--color-text-primary) leading-snug">
                                    {point.title}
                                </h3>
                            </div>
                            {/* Description below */}
                            <p className="text-sm text-(--color-text-muted) leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 5th item — centred, max-width capped so it doesn't stretch full width */}
                <div className="flex justify-center">
                    <div className="w-full sm:max-w-[calc(50%-0.5rem)] lg:max-w-[calc(33.333%-0.75rem)]">
                        <div
                            className="flex flex-col gap-3 p-5 sm:p-6 rounded-xl glass-panel hover:border-(--color-primary)/40 hover:shadow-lg transition-all duration-200"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-(--color-primary)"
                                    style={{ background: 'var(--color-primary-subtle)' }}
                                >
                                    {points[4].icon}
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-(--color-text-primary) leading-snug">
                                    {points[4].title}
                                </h3>
                            </div>
                            <p className="text-sm text-(--color-text-muted) leading-relaxed">
                                {points[4].description}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}