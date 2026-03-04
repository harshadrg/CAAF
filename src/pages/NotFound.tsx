import Button from '../components/ui/Button';
import { ArrowRight } from '../components/ui/Icons';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-(--color-background) text-center p-6 relative overflow-hidden">
            {/* Background 404 text */}
            <div
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none"
                aria-hidden="true"
            >
                <span className="text-[20rem] sm:text-[30rem] lg:text-[40rem] font-black text-(--color-primary) opacity-[0.03] leading-none">
                    404
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-lg">
                <div className="bg-(--color-primary)/10 text-(--color-primary) px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-8 shadow-sm">
                    Error 404
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-(--color-text-primary) mb-4 tracking-tight">
                    Page Not Found
                </h1>

                <p className="text-lg text-(--color-text-secondary) mb-12">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    Let's get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button to="/" variant="primary" size="lg" className="w-full sm:w-auto">
                        Back to Home
                        <ArrowRight size={18} aria-hidden="true" className="ml-2" />
                    </Button>
                    <Button to="/contact" variant="outline" size="lg" className="w-full sm:w-auto text-(--color-text-primary)">
                        Contact Us
                    </Button>
                </div>
            </div>

            {/* Subtle decorative elements to match CAAF premium feel */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-(--color-primary)/20 to-transparent" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-(--color-text-muted) text-sm font-medium">
                &copy; {new Date().getFullYear()} CAAF Advisory Firm. All rights reserved.
            </div>
        </main>
    );
}