import Button from '../components/ui/Button';
import { ArrowRight } from '../components/ui/Icons';

export default function Terms() {
    const effectiveDate = "March 5, 2026";

    return (
        <main className="bg-(--color-background) text-(--color-text-primary)">
            {/* Hero Section */}
            <header className="section-padding bg-(--color-background) border-b border-(--color-border)">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-(--color-text-primary) mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-(--color-text-muted)">
                        Effective Date: {effectiveDate}
                    </p>
                </div>
            </header>

            <div className="section-padding">
                <div className="container-max px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="prose-style">
                        <section aria-labelledby="acceptance-heading" className="mb-8">
                            <h2 id="acceptance-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Acceptance of Terms
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                By accessing or using the services provided by CAAF (Cybersecurity, Compliance, and Governance Advisory Firm), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.
                            </p>
                        </section>

                        <section aria-labelledby="services-heading" className="mb-8">
                            <h2 id="services-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Services Description
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                CAAF provides specialized advisory services in cybersecurity, regulatory compliance, audit assurance, GRC (Governance, Risk, and Compliance), and strategic IT/OT security consulting. The specific scope of services for each engagement will be defined in a separate Statement of Work (SOW) or Service Agreement.
                            </p>
                        </section>

                        <section aria-labelledby="ip-heading" className="mb-8">
                            <h2 id="ip-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Intellectual Property
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                All content, materials, methodologies, and tools available on our website or provided during our engagements are the intellectual property of CAAF or its licensors. You are granted a limited, non-exclusive license to use these materials solely for your internal business purposes as agreed upon in our service contracts.
                            </p>
                        </section>

                        <section aria-labelledby="responsibilities-heading" className="mb-8">
                            <h2 id="responsibilities-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Client Responsibilities
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                To provide effective advisory services, CAAF requires timely access to necessary information, systems, and personnel. Clients are responsible for the accuracy and completeness of the information provided and for making final decisions regarding their cybersecurity and compliance posture.
                            </p>
                        </section>

                        <section aria-labelledby="liability-heading" className="mb-8">
                            <h2 id="liability-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Limitation of Liability
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                CAAF provides advisory services based on industry standards and best practices. However, we do not guarantee that our services will prevent all cybersecurity incidents or regulatory non-compliance. Our liability is limited to the fees paid for the specific service giving rise to the claim, to the extent permitted by law.
                            </p>
                        </section>

                        <section aria-labelledby="confidentiality-heading" className="mb-8">
                            <h2 id="confidentiality-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Confidentiality
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                Both CAAF and the Client agree to maintain the confidentiality of all proprietary or sensitive information disclosed during the course of our business relationship, except as required by law or with prior written consent.
                            </p>
                        </section>

                        <section aria-labelledby="governing-law-heading" className="mb-8">
                            <h2 id="governing-law-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Governing Law
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                These Terms of Service shall be governed by and construed in accordance with the laws of [Insert Jurisdiction, e.g., the State of New York], without regard to its conflict of law principles.
                            </p>
                        </section>

                        <section aria-labelledby="changes-heading" className="mb-12">
                            <h2 id="changes-heading" className="text-xl font-semibold text-(--color-text-primary) mb-3">
                                Changes to Terms
                            </h2>
                            <p className="text-(--color-text-secondary) mb-4">
                                CAAF reserves the right to modify these Terms of Service at any time. We will notify clients of significant changes by posting the updated terms on our website with a new effective date.
                            </p>
                        </section>
                    </div>

                    {/* Bottom CTA */}
                    <div className="border-t border-(--color-border) pt-12 text-center">
                        <h2 className="text-2xl font-bold text-(--color-text-primary) mb-6">
                            Need more clarification on our legal terms?
                        </h2>
                        <Button to="/contact" variant="primary" size="lg">
                            Contact Our Legal Team
                            <ArrowRight size={18} aria-hidden="true" className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}