import type { ButtonHTMLAttributes, AnchorHTMLAttributes, CSSProperties } from 'react';
import { NavLink } from 'react-router';

type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'hero-gold'
    | 'outline-inverse'
    | 'cta-light'
    | 'link';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** Internal route — renders a NavLink */
    to?: string;
    /** External URL or mailto: — renders an <a> */
    href?: string;
    /** Passed through to <a> when href is set */
    target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    /** Passed through to <a> when href is set */
    rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
    /**
     * Inline styles forwarded to ALL three render branches (NavLink, <a>, <button>).
     * Use for one-off color overrides that must beat the Tailwind cascade without
     * relying on !important — inline styles always win over class-based styles.
     */
    style?: CSSProperties;
    children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    // ── Standard variants ──────────────────────────────────────────────────
    primary:
        'bg-(--color-primary) hover:bg-(--color-primary-dark) text-(--color-button-text) shadow-md hover:shadow-lg ' +
        'active:scale-[0.98] active:shadow-sm transition-all duration-150',

    secondary:
        'bg-(--color-secondary) hover:bg-(--color-secondary-dark) ' +
        'text-(--color-button-text-secondary) shadow-md hover:shadow-lg ' +
        'active:scale-[0.98] active:shadow-sm transition-all duration-150',

    outline:
        'bg-(--color-primary)/5 border-2 border-(--color-primary) ' +
        'text-(--color-primary) hover:bg-(--color-primary) hover:border-(--color-primary) ' +
        'hover:text-(--color-button-text) hover:shadow-md ' +
        'active:scale-[0.98] active:bg-(--color-primary-dark) transition-all duration-150',

    ghost:
        'bg-transparent text-(--color-primary) ' +
        'hover:bg-(--color-primary)/15 active:bg-(--color-primary)/25 ' +
        'active:scale-[0.98] transition-all duration-150',

    // ── Hero / dark-background variants ───────────────────────────────────
    'hero-gold':
        'bg-(--color-hero-accent-gold) hover:bg-(--color-hero-accent-gold-dark) ' +
        'text-white shadow-lg shadow-amber-900/30 ' +
        'active:scale-[0.98] transition-all duration-150',

    'outline-inverse':
        'bg-transparent border-2 border-white/30 text-white ' +
        'hover:bg-white/10 hover:border-white/30 hover:text-white ' +
        'active:scale-[0.98] active:bg-white/15 transition-all duration-150',

    // ── CTA section variant — white button on coloured background ─────────
    'cta-light':
        'bg-white hover:bg-gray-50 border border-gray-200 ' + // Added border and slightly darker hover
        'text-[var(--color-primary-dark)] shadow-md hover:shadow-lg ' +
        'active:scale-[0.98] transition-all duration-150',

    // ── Inline link variant — no padding, flush with surrounding text ─────
    'link':
        'bg-transparent text-(--color-primary) underline-offset-4 ' +
        'hover:underline hover:text-(--color-primary-dark) ' +
        'active:text-(--color-primary-dark) transition-colors duration-150',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm min-h-9',
    md: 'px-6 py-3 text-base min-h-11',
    lg: 'px-8 py-4 text-lg min-h-13',
};

export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    to,
    target,
    rel,
    style,
    children,
    className = '',
    ...props
}: ButtonProps) {
    const base =
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg cursor-pointer ' +
        'transition-[background-color,box-shadow,color,border-color,transform,opacity] duration-150 ease-in-out ' +
        'focus-visible:outline-2 focus-visible:outline-(--color-primary) focus-visible:outline-offset-2 ' +
        'disabled:opacity-60 disabled:cursor-not-allowed';

    // link variant is an inline text element — size padding/height must never apply
    const appliedSize = variant === 'link' ? 'px-0 py-0 min-h-0' : sizeStyles[size];

    const classes = `${base} ${variantStyles[variant]} ${appliedSize} ${className}`;

    if (to) {
        return (
            <NavLink to={to} className={classes} style={style} end={to === '/'}>
                {children}
            </NavLink>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} style={style} target={target} rel={rel}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} style={style} {...props}>
            {children}
        </button>
    );
}