import { useState } from 'react';
import Button from '../ui/Button';
import { Check } from '../ui/Icons';

const companyName = import.meta.env.VITE_COMPANY_NAME as string || 'CAAF';

const industries = [
    'Banking & Financial Services',
    'Manufacturing & Industrial',
    'Healthcare',
    'Technology & SaaS',
    'Other',
];

const services = [
    'Compliance & Regulatory Advisory',
    'Audit & Assurance',
    'GRC Advisory',
    'Virtual Executive Services (vCISO/vDPO)',
    'Cybersecurity Advisory',
    'IT & OT Security Advisory',
    'Secure Digital Engineering',
    'Other',
];

interface FormState {
    name: string;
    organization: string;
    industry: string;
    service: string;
    message: string;
}

interface FormErrors {
    name?: string;
    organization?: string;
    message?: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

export default function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: '',
        organization: '',
        industry: '',
        service: '',
        message: '',
    });

    const [errors, setErrors]   = useState<FormErrors>({});
    const [status, setStatus]   = useState<SubmitStatus>('idle');

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!form.name.trim())         newErrors.name         = 'Your name is required.';
        if (!form.organization.trim()) newErrors.organization = 'Organization name is required.';
        if (!form.message.trim())      newErrors.message      = 'Please describe your requirements.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus('success');
        setForm({ name: '', organization: '', industry: '', service: '', message: '' });
    };

    const inputBase =
        'w-full px-4 py-3 rounded-lg border bg-(--color-surface) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all duration-150 min-h-[44px] text-sm';

    const inputNormal = `${inputBase} border-(--color-border)`;
    const inputError  = `${inputBase} border-[var(--color-error)]`;

    return (
        <div
            className="p-6 sm:p-8 lg:p-10 rounded-2xl glass-panel"
            style={{
                boxShadow: 'var(--shadow-md)',
                borderTop: '3px solid var(--color-primary)',
            }}
        >
            {/* Card header — icon + title inline */}
            <div className="flex items-center gap-3 mb-2">
                <div
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-(--color-primary)"
                    style={{ background: 'var(--color-primary-subtle)' }}
                >
                    {/* Pencil / form icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                </div>
                <h2
                    className="text-lg sm:text-xl font-bold text-(--color-text-primary)"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Submit an Inquiry
                </h2>
            </div>
            <p className="text-sm text-(--color-text-muted) mb-7 pl-12">
                All fields marked with * are required. We will respond within one business day.
            </p>

            {/* Success state */}
            {status === 'success' && (
                <div
                    className="flex items-start gap-3 p-4 rounded-lg border border-(--color-success)/30 bg-(--color-success)/10 mb-6"
                    role="alert"
                >
                    <Check size={18} strokeWidth={2} className="shrink-0 text-(--color-success) mt-0.5" aria-hidden="true" />
                    <div>
                        <p className="text-sm font-semibold text-(--color-success)">Inquiry Submitted</p>
                        <p className="text-xs text-(--color-text-muted) mt-0.5">
                            Thank you for contacting {companyName}. We will be in touch within one business day.
                        </p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-(--color-text-secondary) mb-1.5">
                            Full Name <span className="text-(--color-error)" aria-hidden="true">*</span>
                        </label>
                        <input
                            id="name" name="name" type="text" autoComplete="name" required
                            placeholder="Your full name"
                            value={form.name} onChange={handleChange}
                            className={errors.name ? inputError : inputNormal}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                            <p id="name-error" className="mt-1.5 text-xs text-(--color-error)" role="alert">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Organization */}
                    <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-(--color-text-secondary) mb-1.5">
                            Organization <span className="text-(--color-error)" aria-hidden="true">*</span>
                        </label>
                        <input
                            id="organization" name="organization" type="text" autoComplete="organization" required
                            placeholder="Your organization name"
                            value={form.organization} onChange={handleChange}
                            className={errors.organization ? inputError : inputNormal}
                            aria-describedby={errors.organization ? 'org-error' : undefined}
                        />
                        {errors.organization && (
                            <p id="org-error" className="mt-1.5 text-xs text-(--color-error)" role="alert">
                                {errors.organization}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                    {/* Industry */}
                    <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-(--color-text-secondary) mb-1.5">
                            Industry
                        </label>
                        <select
                            id="industry" name="industry"
                            value={form.industry} onChange={handleChange}
                            className={inputNormal}
                        >
                            <option value="">Select your industry</option>
                            {industries.map((ind) => (
                                <option key={ind} value={ind}>{ind}</option>
                            ))}
                        </select>
                    </div>

                    {/* Service */}
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-(--color-text-secondary) mb-1.5">
                            Service of Interest
                        </label>
                        <select
                            id="service" name="service"
                            value={form.service} onChange={handleChange}
                            className={inputNormal}
                        >
                            <option value="">Select a service</option>
                            {services.map((svc) => (
                                <option key={svc} value={svc}>{svc}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Message */}
                <div className="mb-6 sm:mb-7">
                    <label htmlFor="message" className="block text-sm font-medium text-(--color-text-secondary) mb-1.5">
                        Message <span className="text-(--color-error)" aria-hidden="true">*</span>
                    </label>
                    <textarea
                        id="message" name="message" rows={5} required
                        placeholder="Describe your requirements, challenges, or any specific questions..."
                        value={form.message} onChange={handleChange}
                        className={`${errors.message ? inputError : inputNormal} resize-none`}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                        <p id="message-error" className="mt-1.5 text-xs text-(--color-error)" role="alert">
                            {errors.message}
                        </p>
                    )}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    Submit Inquiry
                </Button>
            </form>
        </div>
    );
}