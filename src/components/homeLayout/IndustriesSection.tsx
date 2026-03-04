import Button from '../ui/Button';
import { Landmark, MapNetwork, HeartPulse, Code, Shield, ArrowRight } from '../ui/Icons';
import type { IconProps } from '../ui/Icons';

// ─── Data ────────────────────────────────────────────────────────────────────

interface Industry {
    icon: React.ReactElement<IconProps>;
    name: string;
}

const industries: Industry[] = [
    { icon: <Landmark size={20} aria-hidden="true" />, name: 'Banking & Financial Services' },
    { icon: <MapNetwork size={20} aria-hidden="true" />, name: 'Manufacturing & Industrial' },
    { icon: <HeartPulse size={20} aria-hidden="true" />, name: 'Healthcare' },
    { icon: <Code size={20} aria-hidden="true" />, name: 'Technology & SaaS' },
    { icon: <Shield size={20} aria-hidden="true" />, name: 'Regulated Enterprises' },
];

// ─── Ticker row ───────────────────────────────────────────────────────────────

interface TickerRowProps {
    items: Industry[];
    direction: 'left' | 'right';
    duration: number;
}

function TickerRow({ items, direction, duration }: TickerRowProps) {
    // 4× repetition guarantees a gap-free loop at any viewport width
    const repeated = [...items, ...items, ...items, ...items];

    const trackStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        width: 'max-content',
        animation: `ticker-${direction} ${duration}s linear infinite`,
        willChange: 'transform',
    };

    return (
        <div
            className="overflow-hidden w-full"
            onMouseEnter={(e) => {
                const el = e.currentTarget.querySelector<HTMLDivElement>('[data-ticker]');
                if (el) el.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget.querySelector<HTMLDivElement>('[data-ticker]');
                if (el) el.style.animationPlayState = 'running';
            }}
        >
            <div data-ticker style={trackStyle}>
                {repeated.map((industry, i) => (
                    <div
                        key={`${industry.name}-${i}`}
                        className="shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full glass-panel hover:border-(--color-primary)/50 transition-colors duration-150 cursor-default"
                    >
                        <span className="text-(--color-primary) shrink-0">{industry.icon}</span>
                        <span className="text-sm font-medium text-(--color-text-secondary) whitespace-nowrap">
                            {industry.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function IndustriesSection() {
    return (
        <section
            className="section-padding bg-(--color-background)"
            aria-labelledby="industries-heading"
        >
            {/*
              * Keyframes live here — no external CSS needed.
              * ticker-left:  scrolls right → left (normal reading direction)
              * ticker-right: scrolls left → right (oncoming lane)
              * -50% works because we duplicated items 4× so the halfway point
              * is visually identical to the start frame.
              */}
            <style>{`
                @keyframes ticker-left {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @keyframes ticker-right {
                    from { transform: translateX(-50%); }
                    to   { transform: translateX(0); }
                }
            `}</style>

            <div className="container-max px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) mb-4">
                        Sectors
                    </span>
                    <h2
                        id="industries-heading"
                        className="text-(--color-text-primary) mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Industries Served
                    </h2>
                    <p className="text-(--color-text-secondary)">
                        Deep expertise across regulated sectors requiring structured compliance, audit, and
                        cybersecurity advisory.
                    </p>
                </div>

                {/* Three traffic lanes — alternating direction and speed */}
                <div className="flex flex-col gap-3 mb-10 w-full">
                    <TickerRow items={industries} direction="left" duration={28} />
                    <TickerRow items={industries} direction="right" duration={20} />
                </div>

                <div className="text-center">
                    <Button to="/contact" variant="outline" size="md">
                        Discuss Your Industry Requirements
                        <ArrowRight size={18} aria-hidden="true" />
                    </Button>
                </div>
            </div>
        </section>
    );
}