import Button from '../ui/Button';
import { Shield, ArrowRight } from '../ui/Icons';

const features = [
    'Strategic cybersecurity oversight and program direction',
    'Security program governance and roadmap development',
    'Risk supervision and board-level reporting',
    'Regulatory compliance alignment (DPDP, GDPR, RBI)',
    'Vendor security oversight and third-party risk management',
    'Security incident response leadership',
    'Board presentation and executive briefings',
    'Security budget advisory and investment prioritization',
];

export default function VCISOSection() {
    return (
        <section
            className="section-padding bg-(--color-background) border-b border-(--color-border)"
            aria-labelledby="vciso-heading"
        >
            <div className="container-max lg:px-8">
                {/*
                  * 3-area grid on mobile (single col): content → feature card → button
                  * 2-col grid on desktop: content (with button) | feature card
                  */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

                    {/* Content — order-1 on mobile, col 1 on desktop */}
                    <div className="order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-primary)/10 border border-(--color-primary)/20 mb-5">
                            <div className="w-2 h-2 rounded-full bg-(--color-primary) shrink-0" aria-hidden="true" />
                            <span className="text-xs font-semibold text-(--color-primary) uppercase tracking-wider">Virtual CISO</span>
                        </div>
                        <h2
                            id="vciso-heading"
                            className="text-(--color-text-primary) mb-4"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Virtual Chief Information Security Officer
                        </h2>
                        <p className="text-(--color-text-secondary) leading-relaxed mb-4">
                            Strategic cybersecurity leadership, program governance, and board-level reporting —
                            delivered by experienced security executives without the cost and commitment of a
                            full-time CISO appointment.
                        </p>
                        <p className="text-sm text-(--color-text-muted) leading-relaxed mb-8">
                            CAAF's vCISO service is designed for organizations that need structured, credible
                            cybersecurity leadership to satisfy regulatory expectations, pass audits, and
                            maintain board accountability — at a fraction of the cost of a full-time hire.
                        </p>

                        {/* Desktop-only button — sits naturally inside the content column */}
                        <div className="hidden lg:block">
                            <Button to="/contact" variant="primary" size="md">
                                Engage vCISO Services
                                <ArrowRight size={16} aria-hidden="true" />
                            </Button>
                        </div>
                    </div>

                    {/* Feature card — order-2 on mobile, col 2 on desktop */}
                    <div
                        className="order-2 p-6 sm:p-7 rounded-2xl glass-panel"
                        style={{
                            boxShadow: 'var(--shadow-lg)',
                            borderTop: '3px solid var(--color-primary)',
                        }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div
                                className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: 'var(--color-primary-subtle)', color: 'var(--color-primary)' }}
                            >
                                <Shield size={20} aria-hidden="true" />
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
                                        background: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
                                        color: 'var(--color-primary)',
                                        border: '1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)',
                                    }}
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Mobile-only button — order-3, sits below the feature card */}
                    <div className="order-3 lg:hidden">
                        <Button to="/contact" variant="primary" size="md" className="w-full justify-center">
                            Engage vCISO Services
                            <ArrowRight size={16} aria-hidden="true" />
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}