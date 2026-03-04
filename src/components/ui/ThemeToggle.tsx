import { useEffect, useState } from 'react';
import { Sun, Moon } from './Icons';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('caaf-theme');
            if (stored) return stored === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('caaf-theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('caaf-theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            /*
             * min-w + min-h + shrink-0 form a triple guarantee against squishing:
             *   • w-10 h-10        — default desired size
             *   • min-w/min-h      — hard floor so flex can't compress below 40 px
             *   • shrink-0         — tells flex: this item must NOT shrink
             */
            className="
                relative flex items-center justify-center
                w-10 h-10 min-w-10 min-h-10 shrink-0
                rounded-lg border border-(--color-border)
                bg-(--color-surface) hover:bg-(--color-elevated)
                text-(--color-text-secondary) hover:text-(--color-primary)
                transition-all duration-150 cursor-pointer
            "
        >
            {isDark ? (
                <Sun
                    size={20}
                    className="text-(--color-secondary) shrink-0"
                    style={{
                        filter: 'drop-shadow(0 0 8px color-mix(in oklch, var(--color-secondary) 40%, transparent))',
                        transition: 'all 0.3s ease',
                    }}
                    aria-hidden="true"
                />
            ) : (
                <Moon
                    size={20}
                    className="text-(--color-primary) shrink-0"
                    style={{
                        filter: 'drop-shadow(0 0 8px color-mix(in oklch, var(--color-primary) 30%, transparent))',
                        transition: 'all 0.3s ease',
                    }}
                    aria-hidden="true"
                />
            )}
        </button>
    );
}