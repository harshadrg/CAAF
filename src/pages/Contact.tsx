import ContactHero from '../components/contactLayout/ContactHero';
import ContactForm from '../components/contactLayout/ContactForm';
import ContactInfo from '../components/contactLayout/ContactInfo';

export default function Contact() {
    return (
        <>
            <ContactHero />
            <section className="section-padding bg-(--color-background)" aria-labelledby="contact-form-heading">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Form - 2/3 width */}
                        <div className="md:col-span-2">
                            <ContactForm />
                        </div>
                        {/* Info - 1/3 width */}
                        <div className="md:col-span-1">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
