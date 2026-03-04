import Button from '../ui/Button';
import { Lock, ArrowRight } from '../ui/Icons';

const features = [
    'Privacy governance framework design and maintenance',
    'Data Protection Impact Assessment (DPIA) oversight',
    'Regulatory documentation and records management',
    'Breach notification governance and incident management',
    'Privacy training programs for staff and management',
    'Third-party privacy assessment and vendor oversight',
    'DPDP and GDPR compliance program management',
    'Privacy-by-design advisory for new projects',
];

export default function VDPOSection() {
    return (
        <section
            className="section-padding bg-(--color-surface) border-b border-(--color-border)"
            aria-labelledby="vdpo-heading"
        >
            <div className="container-max lg:px-8">
                {/*
                  * Mobile (single col):  content → feature card → button  (order 1, 2, 3)
                  * Desktop (2 col):      feature card (left) | content+button (right)
                  */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

                    {/* Feature card — order-2 mobile, col-1 desktop */}
                    <div
                        className="order-2 lg:order-1 p-6 sm:p-7 rounded-2xl glass-panel"
                        style={{
                            boxShadow: 'var(--shadow-lg)',
                            borderTop: '3px solid var(--color-accent)',
                        }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div
                                className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: 'var(--color-accent-subtle)', color: 'var(--color-accent)' }}
                            >
                                <Lock size={20} aria-hidden="true" />
                            </div>
                            <h3 className="text-base font-bold text-(--color-text-primary)">
                                What's Included
                            </h3>
                        </div>

                        {/* Square-rounded chips */}
                        <div className="flex flex-wrap gap-2">
                            {features.map((feature) => (
                                <span
                                    key={feature}
                                    className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium leading-none"
                                    style={{
                                        background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                                        color: 'var(--color-accent)',
                                        border: '1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)',
                                    }}
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Content — order-1 mobile, col-2 desktop */}
                    <div className="order-1 lg:order-2">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                            style={{
                                background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                                border: '1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)',
                            }}
                        >
                            <div
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ background: 'var(--color-accent)' }}
                                aria-hidden="true"
                            />
                            <span
                                className="text-xs font-semibold uppercase tracking-wider"
                                style={{ color: 'var(--color-accent)' }}
                            >
                                Virtual DPO
                            </span>
                        </div>
                        <h2
                            id="vdpo-heading"
                            className="text-(--color-text-primary) mb-4"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Virtual Data Protection Officer
                        </h2>
                        <p className="text-(--color-text-secondary) leading-relaxed mb-4">
                            Independent privacy oversight, compliance supervision, and breach governance —
                            delivered by experienced data protection professionals who satisfy your regulatory
                            obligations under DPDP, GDPR, and applicable privacy frameworks.
                        </p>
                        <p className="text-sm text-(--color-text-muted) leading-relaxed mb-8">
                            CAAF's vDPO service provides organizations with the governance infrastructure,
                            accountability structures, and regulatory expertise required to demonstrate
                            compliance maturity to regulators, customers, and boards.
                        </p>

                        {/* Desktop-only button */}
                        <div className="hidden lg:block">
                            <Button
                                to="/contact"
                                variant="primary"
                                size="md"
                                style={{ background: 'var(--color-accent)' } as React.CSSProperties}
                            >
                                Engage vDPO Services
                                <ArrowRight size={16} aria-hidden="true" />
                            </Button>
                        </div>
                    </div>

                    {/* Mobile-only button — order-3, below feature card */}
                    <div className="order-3 lg:hidden">
                        <Button
                            to="/contact"
                            variant="primary"
                            size="md"
                            className="w-full justify-center"
                            style={{ background: 'var(--color-accent)' } as React.CSSProperties}
                        >
                            Engage vDPO Services
                            <ArrowRight size={16} aria-hidden="true" />
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}