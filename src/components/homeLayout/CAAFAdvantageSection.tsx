import Button from '../ui/Button';
import { Server, Building2, Scale, ArrowRight } from '../ui/Icons';

interface Discipline {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

const disciplines: Discipline[] = [
    {
        icon: <Server size={24} aria-hidden="true" />,
        title: 'Technical Experts',
        description:
            'Cybersecurity architects, infrastructure specialists, and secure developers who understand the technical landscape of modern enterprise environments.',
        color: 'var(--color-primary)',
    },
    {
        icon: <Building2 size={24} aria-hidden="true" />,
        title: 'Audit & Risk Professionals',
        description:
            'Experienced IT auditors, governance consultants, and control specialists who bring structured methodology and independent objectivity.',
        color: 'var(--color-secondary)',
    },
    {
        icon: <Scale size={24} aria-hidden="true" />,
        title: 'Legal & Regulatory Advisors',
        description:
            'Privacy professionals, compliance experts, and policy advisors who translate regulatory complexity into actionable enterprise guidance.',
        color: 'var(--color-accent)',
    },
];

export default function CAAFAdvantageSection() {
    return (
        <section
            className="section-padding border-b border-(--color-border)"
            aria-labelledby="advantage-heading"
            style={{ background: 'var(--color-surface)' }}
        >
            <div className="container-max  lg:px-8">

                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) mb-3 sm:mb-4">
                        Our Model
                    </span>
                    <h2
                        id="advantage-heading"
                        className="text-(--color-text-primary) mb-3 sm:mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        A Multidisciplinary Advisory Model
                    </h2>
                    <p className="text-(--color-text-secondary)">
                        CAAF integrates three core disciplines into a unified advisory model — delivering
                        outcomes that are technically sound, audit-validated, and legally defensible.
                    </p>
                </div>

                {/* ── MOBILE / TABLET: vertical timeline ──────────────────────────────
                  * A vertical line runs down the left side, anchored to each numbered
                  * badge. Cards sit to the right of the line, left-aligned.
                  * Hidden on lg+ where the horizontal layout takes over.
                  */}
                <div className="lg:hidden flex flex-col gap-0 mb-10 relative">
                    {/* The vertical connector line */}
                    <div
                        className="absolute left-[1.1rem] top-5 bottom-5 w-px"
                        style={{ background: 'var(--color-border)' }}
                        aria-hidden="true"
                    />

                    {disciplines.map((discipline, index) => (
                        <div key={discipline.title} className="flex gap-4 pb-6 last:pb-0 relative">
                            {/* Badge — sits on the line */}
                            <div
                                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white z-10 mt-1"
                                style={{ background: discipline.color }}
                                aria-hidden="true"
                            >
                                {index + 1}
                            </div>

                            {/* Card */}
                            <div
                                className="flex-1 rounded-xl glass-panel p-5 hover:border-(--color-primary)/40 transition-all duration-200"
                                style={{ borderTop: `3px solid ${discipline.color}` }}
                            >
                                {/* Icon + title row */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div
                                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: `color-mix(in srgb, ${discipline.color} 12%, transparent)`,
                                            color: discipline.color,
                                        }}
                                    >
                                        {discipline.icon}
                                    </div>
                                    <h3 className="text-sm sm:text-base font-bold text-(--color-text-primary) leading-snug">
                                        {discipline.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-(--color-text-muted) leading-relaxed">
                                    {discipline.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── DESKTOP: horizontal connected steps ─────────────────────────────
                  * Three cards in a row. A horizontal connector line runs through the
                  * centre of the numbered badges at the top of each card.
                  * Shown only on lg+.
                  */}
                <div className="hidden lg:block mb-12">
                    {/* Badge row — badges sit above cards with the connector line behind them */}
                    <div className="relative flex justify-around mb-0 px-[calc(100%/6)]">
                        {/* Horizontal connector line */}
                        <div
                            className="absolute top-1/2 left-[calc(100%/6)] right-[calc(100%/6)] h-px -translate-y-1/2"
                            style={{ background: 'var(--color-border)' }}
                            aria-hidden="true"
                        />
                        {disciplines.map((discipline, index) => (
                            <div
                                key={discipline.title}
                                className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md"
                                style={{ background: discipline.color }}
                                aria-hidden="true"
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>

                    {/* Cards row — top border aligns visually with the badges above */}
                    <div className="grid grid-cols-3 gap-5 -mt-5">
                        {disciplines.map((discipline) => (
                            <div
                                key={discipline.title}
                                className="relative flex flex-col p-6 pt-8 rounded-xl glass-panel hover:border-(--color-primary)/40 card-hover overflow-hidden"
                                style={{ borderTop: `3px solid ${discipline.color}` }}
                            >
                                {/* Large faded background numeral for depth */}
                                <span
                                    className="absolute -bottom-3 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none opacity-[0.04]"
                                    style={{ color: discipline.color, fontFamily: 'Poppins, sans-serif' }}
                                    aria-hidden="true"
                                >
                                    {disciplines.indexOf(discipline) + 1}
                                </span>

                                {/* Icon + title */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: `color-mix(in srgb, ${discipline.color} 12%, transparent)`,
                                            color: discipline.color,
                                        }}
                                    >
                                        {discipline.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-(--color-text-primary) leading-snug">
                                        {discipline.title}
                                    </h3>
                                </div>

                                <p className="text-sm text-(--color-text-muted) leading-relaxed">
                                    {discipline.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button
                        to="/about"
                        variant="ghost"
                        size="md"
                        className="font-semibold text-(--color-primary) hover:text-(--color-primary-dark) group"
                    >
                        Learn More About Our Approach
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