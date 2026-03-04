export default function MandateSection() {
    return (
        <section
            className="section-padding border-b border-(--color-border)"
            aria-labelledby="mandate-heading"
            style={{ background: 'var(--color-surface)' }}
        >
            <div className="container-max px-4 sm:px-6 lg:px-8">

                {/* Heading — centered to break rhythm from the left-aligned hero above */}
                <div className="text-center mb-10 sm:mb-12">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) mb-3">
                        Our Philosophy
                    </span>
                    <h2
                        id="mandate-heading"
                        className="text-(--color-text-primary)"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Our Mandate
                    </h2>
                </div>

                {/* Quote — large, left-aligned, gradient left border */}
                <div
                    className="pl-6 sm:pl-8 mb-8 sm:mb-10"
                    style={{
                        borderLeft: '4px solid transparent',
                        borderImage: 'linear-gradient(180deg, var(--color-primary), var(--color-secondary)) 1',
                    }}
                >
                    <p
                        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-(--color-text-primary) leading-snug"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        To enhance governance maturity,{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            reduce regulatory exposure,
                        </span>{' '}
                        and enable secure digital growth.
                    </p>
                </div>

                {/* Supporting copy — indented to align with the quote text */}
                <div className="pl-6 sm:pl-8">
                    <p className="text-(--color-text-secondary) leading-relaxed max-w-2xl">
                        This mandate guides every engagement CAAF undertakes. We do not provide
                        generic advisory — our work is structured around defensible outcomes,
                        measurable improvement in governance posture, and sustainable compliance
                        capability for the organizations we serve.
                    </p>
                </div>

            </div>
        </section>
    );
}