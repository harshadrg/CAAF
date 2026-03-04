import Button from '../ui/Button';
import { ArrowRight } from '../ui/Icons';

export default function ServicesBottomCTA() {
    return (
        <div className="mt-14 pt-8 border-t border-(--color-border) text-center">
            <p className="text-(--color-text-secondary) mb-5">
                Ready to discuss how CAAF can support your governance and compliance requirements?
            </p>
            <Button to="/contact" variant="primary" size="lg">
                Request a Consultation
                <ArrowRight size={18} aria-hidden="true" />
            </Button>
        </div>
    );
}