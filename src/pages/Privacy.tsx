import Button from '../components/ui/Button';
import { ArrowRight } from '../components/ui/Icons';

export default function Privacy() {
    const lastUpdated = "March 5, 2026";

    return (
        <main className="bg-(--color-background) text-(--color-text-primary)">
            {/* Hero Section */}
            <header className="section-padding bg-(--color-background) border-b border-(--color-border)">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-(--color-text-primary) mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-(--color-text-muted)">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </header>

            <div className="section-padding">
                <div className="container-max px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="prose-style">
                        <section aria-labelledby="intro-heading" className="mb-8">
                            <h2 id="intro-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Introduction
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                At CAAF (Cybersecurity, Compliance, and Governance Advisory Firm), we are committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, and protect your information when you interact with our website and services.
                            </p>
                            <p className="text-(--color-text-secondary) mb-4">
                                Our goal is to maintain the highest standards of data governance and transparency, reflecting our core values as a leading advisory firm in the cybersecurity and compliance landscape.
                            </p>
                        </section>

                        <section aria-labelledby="collection-heading" className="mb-8">
                            <h2 id="collection-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Information We Collect
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                We collect information that you provide directly to us, as well as information collected automatically through your use of our website.
                            </p>
                            <ul className="list-disc pl-5 text-(--color-text-secondary) mb-4 space-y-2">
                                <li><strong>Contact Information:</strong> Names, email addresses, phone numbers, and company details provided via our contact forms.</li>
                                <li><strong>Cookie Data:</strong> We use essential and analytical cookies to improve your browsing experience.</li>
                                <li><strong>Usage Analytics:</strong> Information about how you navigate our site, including IP addresses, browser types, and pages visited.</li>
                            </ul>
                        </section>

                        <section aria-labelledby="usage-heading" className="mb-8">
                            <h2 id="usage-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                How We Use Your Information
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                CAAF uses the collected data for the following purposes:
                            </p>
                            <ul className="list-disc pl-5 text-(--color-text-secondary) mb-4 space-y-2">
                                <li>To provide and manage our advisory and consulting services.</li>
                                <li>To respond to your inquiries and offer client support.</li>
                                <li>To monitor and analyze trends and usage of our website.</li>
                                <li>To comply with legal and regulatory obligations.</li>
                            </ul>
                        </section>

                        <section aria-labelledby="sharing-heading" className="mb-8">
                            <h2 id="sharing-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Data Sharing & Third Parties
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                <strong>We do not sell your personal data.</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential and comply with data protection regulations.
                            </p>
                        </section>

                        <section aria-labelledby="retention-heading" className="mb-8">
                            <h2 id="retention-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Data Retention
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                            </p>
                        </section>

                        <section aria-labelledby="rights-heading" className="mb-8">
                            <h2 id="rights-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Your Rights
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                Depending on your jurisdiction, you may have rights regarding your personal data, including:
                            </p>
                            <ul className="list-disc pl-5 text-(--color-text-secondary) mb-4 space-y-2">
                                <li>The right to access the personal data we hold about you.</li>
                                <li>The right to request the correction of inaccurate data.</li>
                                <li>The right to request the deletion of your data.</li>
                                <li>The right to object to or restrict certain processing activities.</li>
                            </ul>
                        </section>

                        <section aria-labelledby="cookies-heading" className="mb-8">
                            <h2 id="cookies-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Cookies Policy
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                Our website uses cookies to enhance performance. You can manage your cookie preferences through your browser settings. For detailed information on the cookies we use, please contact us.
                            </p>
                        </section>

                        <section aria-labelledby="contact-heading" className="mb-12">
                            <h2 id="contact-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Contact Us
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                If you have any questions or concerns about our Privacy Policy or data practices, please contact our Data Protection Officer (DPO) at:
                            </p>
                            <p className="text-(--color-text-primary) font-medium">
                                Email: privacy@caaf.com<br />
                                Address: [Insert Physical Address]
                            </p>
                        </section>
                    </div>

                    {/* Bottom CTA */}
                    <div className="border-t border-(--color-border) pt-12 text-center">
                        <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">
                            Have questions about your data?
                        </h2>
                        <Button to="/contact" variant="primary" size="lg">
                            Get in Touch
                            <ArrowRight size={18} aria-hidden="true" className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}