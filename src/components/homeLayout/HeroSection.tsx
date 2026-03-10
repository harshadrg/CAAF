import Button from '../ui/Button';
import { ArrowRight } from '../ui/Icons';

const companyName = import.meta.env.VITE_COMPANY_NAME as string;

const rawTagline = (import.meta.env.VITE_COMPANY_TAGLINE as string) ?? 'Governance. Risk. Assurance.';
const taglineWords = rawTagline.split('. ').map((w, i, arr) =>
    i < arr.length - 1 ? `${w}.` : w
);

const stats = [
    { label: 'Regulatory Frameworks', value: '15+' },
    { label: 'Advisory Disciplines', value: '3' },
    { label: 'Industries Covered', value: '5+' },
];

const goldGradientStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, var(--color-hero-accent-gold), var(--color-hero-accent-gold-light))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
};

const midIndex = Math.floor(taglineWords.length / 2);

export default function HeroSection() {
    return (
        <section
            className="relative w-full min-h-[85vh] flex items-center overflow-hidden"
            aria-label="Hero"
            style={{
                background: 'linear-gradient(135deg, var(--color-hero-from) 0%, var(--color-hero-mid) 45%, var(--color-hero-mid2) 70%, var(--color-hero-from) 100%)',
            }}
        >
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
                {/* Blue radial glow — top right */}
                <div
                    className="absolute -top-48 -right-48 w-150 h-150 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, var(--color-hero-glow-blue) 0%, transparent 70%)' }}
                />
                {/* Teal radial glow — bottom left */}
                <div
                    className="absolute -bottom-48 -left-24 w-125 h-125 rounded-full opacity-15"
                    style={{ background: 'radial-gradient(circle, var(--color-hero-glow-teal) 0%, transparent 70%)' }}
                />
                {/* Top accent line */}
                <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--color-hero-accent-gold), var(--color-hero-accent-blue), transparent)' }}
                />
            </div>

            <div className="container-max w-full px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="max-w-4xl">

                    {/* Eyebrow pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
                        <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: 'var(--color-hero-accent-gold)' }}
                            aria-hidden="true"
                        />
                        <span className="text-(--color-text-secondary) text-xs font-semibold uppercase tracking-[0.2em]">
                            Independent Professional Advisory
                        </span>
                    </div>

                    {/* Tagline headline */}
                    <h1
                        className="text-(--color-text-primary) mb-6"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                    >
                        {taglineWords.map((word, i) => (
                            <span
                                key={word}
                                className="block"
                                style={i === midIndex ? goldGradientStyle : undefined}
                            >
                                {word}
                            </span>
                        ))}
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-(--color-text-primary)/90 font-medium mb-4 max-w-2xl">
                        Independent Compliance, Audit &amp; Cybersecurity Advisory for Regulated Enterprises.
                    </p>

                    {/* Description */}
                    <p className="text-base text-(--color-text-secondary) leading-relaxed mb-10 max-w-2xl">
                        {companyName} is a multidisciplinary advisory firm integrating technical expertise, audit rigor,
                        and legal insight to deliver defensible governance, regulatory compliance, and secure
                        digital transformation.
                    </p>

                    {/* CTAs — clean variants, zero !important overrides */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="hero-gold" size="lg" to="/contact">
                            Request a Consultation
                            <ArrowRight size={18} aria-hidden="true" />
                        </Button>
                        <Button variant="outline-inverse" size="lg" to="/services">
                            Explore Our Services
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div
                                    className="text-2xl font-bold text-(--color-text-primary)"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-xs text-(--color-text-muted) uppercase tracking-widest mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}