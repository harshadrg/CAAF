const meta = [
    { value: '1 day', label: 'Initial Response' },
    { value: '5 days', label: 'Advisory Proposal' },
    { value: 'NDA', label: 'Confidential' },
];

export default function ContactHero() {
    return (
        <section
            className="relative py-20 sm:py-24 overflow-hidden"
            aria-label="Contact CAAF"
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
            {/* Right glow */}
            <div
                className="absolute top-0 right-0 w-[40vw] h-full max-w-125 opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle at right, var(--color-hero-glow-blue), transparent 70%)' }}
                aria-hidden="true"
            />

            <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">

                    {/* Left: text */}
                    <div className="max-w-2xl">
                        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-text-muted) mb-5">
                            Contact
                        </span>
                        <h1
                            className="text-(--color-text-primary) mb-5"
                            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
                        >
                            Engage With CAAF
                        </h1>
                        <p className="text-base sm:text-lg text-(--color-text-secondary) leading-relaxed">
                            We partner with organizations seeking structured governance, regulatory clarity,
                            and secure digital growth. Complete the form to initiate an advisory engagement discussion.
                        </p>
                    </div>

                    {/* Right: response-time stat cluster */}
                    <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 lg:gap-3 lg:shrink-0">
                        {meta.map((item) => (
                            <div
                                key={item.label}
                                className="
                                    flex flex-col items-start
                                    px-3 py-2.5 rounded-lg
                                    border border-white/10 bg-white/5 backdrop-blur-sm
                                    lg:flex-row lg:items-center
                                    lg:gap-4 lg:px-6 lg:py-4 lg:rounded-xl
                                "
                            >
                                <span
                                    className="text-lg font-bold text-(--color-text-primary) lg:text-2xl"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {item.value}
                                </span>
                                <span className="text-[10px] text-(--color-text-muted) uppercase tracking-widest mt-0.5 lg:text-xs lg:mt-0 leading-tight">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}