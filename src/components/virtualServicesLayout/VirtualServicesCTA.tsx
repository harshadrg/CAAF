import Button from '../ui/Button';
import { Phone, ArrowRight } from '../ui/Icons';

const email = import.meta.env.VITE_CONTACT_EMAIL as string;

export default function VirtualServicesCTA() {
    return (
        <section
            className="section-padding relative overflow-hidden"
            aria-labelledby="virtual-cta-heading"
            style={{
                background: 'linear-gradient(135deg, var(--color-hero-from) 0%, var(--color-hero-mid) 60%, var(--color-hero-from) 100%)',
            }}
        >
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                aria-hidden="true"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />
            {/* Top accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent, var(--color-hero-accent-gold), var(--color-hero-accent-blue), transparent)',
                }}
                aria-hidden="true"
            />

            <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl mx-auto text-center">

                    {/*
                      * Phone icon sits inline just before the heading text —
                      * large and slightly faded, like a decorative quotation mark.
                      * rotate-12 tilts it to look like a phone held to an ear.
                      * The heading and icon share the same visual line so the icon
                      * reads as punctuation, not a separate UI element.
                      */}
                    <div className="flex items-start justify-center mb-4">
                        <Phone
                            size={50}
                            className="shrink-0 rotate-65 translate-y-3"
                            style={{ color: 'var(--color-hero-accent-gold)', opacity: 0.85 }}
                            aria-hidden="true"
                        />
                        <h2
                            id="virtual-cta-heading"
                            className="text-(--color-text-primary) text-left"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Schedule an Executive Consultation
                        </h2>
                    </div>

                    <p className="text-(--color-text-secondary) leading-relaxed mb-8">
                        Discuss your organization's governance and compliance requirements with our advisory team.
                        We'll assess your needs and recommend the appropriate virtual executive engagement model.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Button to="/contact" variant="cta-light" size="lg">
                            Schedule Consultation
                            <ArrowRight size={18} aria-hidden="true" />
                        </Button>
                        <Button href={`mailto:${email}`} variant="outline-inverse" size="lg">
                            Email Us Directly
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}