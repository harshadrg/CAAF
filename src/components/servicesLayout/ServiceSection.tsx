import Button from '../ui/Button';
import { ArrowRight } from '../ui/Icons';

interface SubService {
    title: string;
    description?: string;
    items?: string[];
}

interface ServiceSectionProps {
    id?: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    services?: string[];
    subServices?: SubService[];
    accentColor?: string;
    accentColorSubtle?: string;
    link?: { to?: string; href?: string; label: string };
}

export default function ServiceSection({
    id,
    icon,
    title,
    description,
    services,
    subServices,
    accentColor = 'var(--color-primary)',
    accentColorSubtle,
    link,
}: ServiceSectionProps) {
    const accentLight = accentColorSubtle ?? 'var(--color-primary-subtle)';

    return (
        <div
            id={id}
            className="rounded-2xl glass-panel hover:border-(--color-primary)/30 transition-all duration-200 overflow-hidden"
            style={{ boxShadow: 'var(--shadow-sm)', borderTop: `3px solid ${accentColor}` }}
        >
            <div className="p-6 sm:p-7 lg:p-8">

                {/* Icon + title inline, description below */}
                <div className="flex items-center gap-4 mb-3">
                    <div
                        className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center"
                        style={{ background: accentLight, color: accentColor }}
                    >
                        {icon}
                    </div>
                    <h2
                        className="text-lg sm:text-xl font-bold text-(--color-text-primary) leading-snug"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        {title}
                    </h2>
                </div>

                <p className="text-sm text-(--color-text-muted) leading-relaxed mb-6 max-w-3xl">
                    {description}
                </p>

                {/*
                  * Simple service list — rendered as chips instead of a checklist.
                  * Each chip auto-derives its tint from accentColor via color-mix,
                  * so all sections feel distinct without extra color variables.
                  */}
                {services && services.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {services.map((svc) => (
                            <span
                                key={svc}
                                className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium leading-none"
                                style={{
                                    background: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
                                    color: accentColor,
                                    border: `1px solid color-mix(in srgb, ${accentColor} 20%, transparent)`,
                                }}
                            >
                                {svc}
                            </span>
                        ))}
                    </div>
                )}

                {/*
                  * Sub-services — each card has a colored left border that ties it
                  * back to the parent section's accent color. Title is prominent,
                  * description smaller, items as minimal dash list.
                  */}
                {subServices && subServices.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {subServices.map((sub) => (
                            <div
                                key={sub.title}
                                className="p-4 sm:p-5 rounded-xl bg-(--color-background) border border-(--color-border) border-l-[3px]"
                                style={{ borderLeftColor: accentColor }}
                            >
                                <h3 className="text-sm font-bold text-(--color-text-primary) mb-2 leading-snug">
                                    {sub.title}
                                </h3>
                                {sub.description && (
                                    <p className="text-xs text-(--color-text-muted) mb-3 leading-relaxed">
                                        {sub.description}
                                    </p>
                                )}
                                {sub.items && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {sub.items.map((item) => (
                                            <span
                                                key={item}
                                                className="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium leading-none"
                                                style={{
                                                    background: `color-mix(in srgb, ${accentColor} 8%, transparent)`,
                                                    color: accentColor,
                                                    border: `1px solid color-mix(in srgb, ${accentColor} 15%, transparent)`,
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Optional link */}
                {link && (
                    <div className="mt-6 pt-5 border-t border-(--color-border)">
                        <Button
                            {...(link.to ? { to: link.to } : { href: link.href })}
                            variant="link"
                            size="sm"
                            className="text-sm font-semibold gap-1.5"
                            style={{ color: accentColor } as React.CSSProperties}
                        >
                            {link.label}
                            <ArrowRight size={14} aria-hidden="true" />
                        </Button>
                    </div>
                )}

            </div>
        </div>
    );
}