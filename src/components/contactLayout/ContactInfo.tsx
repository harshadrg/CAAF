import Button from '../ui/Button';
import { Mail, Phone, Globe, Connect } from '../ui/Icons';

const email   = import.meta.env.VITE_CONTACT_EMAIL   as string;
const phone   = import.meta.env.VITE_CONTACT_PHONE   as string;
const address = import.meta.env.VITE_CONTACT_ADDRESS as string;

const contactItems = [
    { icon: <Mail  size={18} aria-hidden="true" />, label: 'Email',    value: email,   href: `mailto:${email}` },
    { icon: <Phone size={18} aria-hidden="true" />, label: 'Phone',    value: phone,   href: undefined         },
    { icon: <Globe size={18} aria-hidden="true" />, label: 'Location', value: address, href: undefined         },
];

const responseItems = [
    'Initial response within 1 business day',
    'Detailed advisory proposal within 5 business days',
    'Absolutely confidential and NDA-compliant',
    'No obligation or commitment required',
];

export default function ContactInfo() {
    return (
        <div className="flex flex-col gap-4 sm:gap-6">

            {/* Contact details card */}
            <div
                className="p-6 sm:p-7 rounded-2xl glass-panel"
                style={{
                    boxShadow: 'var(--shadow-sm)',
                    borderTop: '3px solid var(--color-primary)',
                }}
            >
                {/* Icon + title inline */}
                <div className="flex items-center gap-3 mb-5">
                    <div
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-(--color-primary)"
                        style={{ background: 'var(--color-primary-subtle)' }}
                    >
                        <Connect size={16} aria-hidden="true" />
                    </div>
                    <h2
                        className="text-base font-bold text-(--color-text-primary)"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Contact Information
                    </h2>
                </div>

                <ul className="space-y-4">
                    {contactItems.map((item) => (
                        <li key={item.label} className="flex items-start gap-3">
                            <div
                                className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-(--color-primary)"
                                style={{ background: 'var(--color-primary-subtle)' }}
                            >
                                {item.icon}
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs text-(--color-text-muted) uppercase tracking-wider mb-0.5">
                                    {item.label}
                                </p>
                                {item.href ? (
                                    <Button
                                        href={item.href}
                                        variant="link"
                                        size="sm"
                                        className="text-sm font-medium text-(--color-text-primary) break-all"
                                    >
                                        {item.value}
                                    </Button>
                                ) : (
                                    <p className="text-sm font-medium text-(--color-text-primary) break-words">
                                        {item.value}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* What to Expect card */}
            <div
                className="p-6 sm:p-7 rounded-2xl glass-panel"
                style={{
                    boxShadow: 'var(--shadow-sm)',
                    borderTop: '3px solid var(--color-secondary)',
                }}
            >
                {/* Icon + title inline */}
                <div className="flex items-center gap-3 mb-5">
                    <div
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: 'var(--color-secondary-subtle)', color: 'var(--color-secondary)' }}
                    >
                        {/* Checkmark-style icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <h3
                        className="text-base font-bold text-(--color-text-primary)"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        What to Expect
                    </h3>
                </div>

                {/* Items as square-rounded chips */}
                <div className="flex flex-wrap gap-2">
                    {responseItems.map((item) => (
                        <span
                            key={item}
                            className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium leading-snug"
                            style={{
                                background: 'color-mix(in srgb, var(--color-secondary) 10%, transparent)',
                                color: 'var(--color-secondary)',
                                border: '1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)',
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}