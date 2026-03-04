interface IndustryCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    services: string[];
    accentColor?: string;
    accentColorSubtle?: string;
}

export default function IndustryCard({
    icon,
    title,
    description,
    services,
    accentColor = 'var(--color-primary)',
    accentColorSubtle,
}: IndustryCardProps) {
    const accentLight = accentColorSubtle ?? 'var(--color-primary-subtle)';

    return (
        <div
            className="flex flex-col p-4 sm:p-6 rounded-2xl glass-panel hover:border-(--color-primary)/30 card-hover"
            style={{
                boxShadow: 'var(--shadow-sm)',
                borderTop: `3px solid ${accentColor}`,
            }}
        >
            {/* Icon + title inline */}
            <div className="flex items-center gap-3 mb-3">
                <div
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: accentLight, color: accentColor }}
                >
                    {icon}
                </div>
                <h2
                    className="text-base sm:text-lg font-bold text-(--color-text-primary) leading-snug"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    {title}
                </h2>
            </div>

            {/* Description */}
            <p className="text-sm text-(--color-text-muted) mb-4 leading-relaxed">
                {description}
            </p>

            {/* Services as square-rounded chips */}
            <div className="flex flex-wrap gap-2 mt-auto">
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
        </div>
    );
}