import Button from '../ui/Button';
import { ArrowRight } from '../ui/Icons';

export default function IndustriesCTA() {
    return (
        <section
            className="section-padding bg-(--color-surface) border-t border-(--color-border)"
            aria-labelledby="industries-cta-heading"
        >
            <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                <h2
                    id="industries-cta-heading"
                    className="text-(--color-text-primary) mb-4"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Ready to Discuss Your Requirements?
                </h2>
                <p className="text-(--color-text-secondary) max-w-xl mx-auto mb-8">
                    Every organization's regulatory and operational context is unique. Let's discuss
                    how CAAF can address your specific industry requirements.
                </p>
                <Button to="/contact" variant="primary" size="lg">
                    Discuss Your Industry Requirements
                    <ArrowRight size={18} aria-hidden="true" />
                </Button>
            </div>
        </section>
    );
}