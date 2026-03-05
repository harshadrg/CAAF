import { useState } from 'react';
import { NavLink } from 'react-router';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import { Menu, X } from '../ui/Icons';
import LOGO_LIGHT from '../../assets/caaf-logo-light.svg';
import LOGO_DARK from '../../assets/caaf-logo-dark.svg';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/virtual-services', label: 'Virtual Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/contact', label: 'Contact' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        /*
         * NO overflow property here at all.
         * Setting overflow-x:hidden on a sticky element forces overflow-y:auto
         * (CSS spec), which clips the mobile drawer. The App.tsx wrapper div
         * already carries overflow-x-hidden and handles horizontal containment
         * for the whole page — the header does not need it.
         */
        <header
            className="sticky top-0 z-50 w-full bg-(--color-background)/95 backdrop-blur-sm border-b border-(--color-border)"
            style={{ boxShadow: 'var(--shadow-sm)' }}
        >
            <div className="w-full container-max">
                {/* Top bar — logo | desktop nav | theme toggle + hamburger */}
                <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 gap-2">

                    {/* Brand */}
                    <NavLink to="/" className="flex items-center shrink-0 group">
                        <img
                            src={LOGO_LIGHT}
                            alt="CAAF Logo"
                            className="block dark:hidden h-20 w-auto max-w-52 object-contain transition-opacity duration-300"
                        />
                        <img
                            src={LOGO_DARK}
                            alt="CAAF Logo"
                            className="hidden dark:block h-20 w-auto max-w-52  object-contain transition-opacity duration-300"
                        />
                    </NavLink>

                    {/* Desktop nav */}
                    <nav
                        className="hidden md:flex items-center gap-0 xl:gap-1 min-w-0"
                        aria-label="Main navigation"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={({ isActive }) =>
                                    `px-3 xl:px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-150 whitespace-nowrap ${isActive
                                        ? 'bg-(--color-primary)/10 text-(--color-primary)'
                                        : 'text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-surface)'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/*
                      * Right side: theme toggle + hamburger only.
                      * The "Request Consultation" button is intentionally NOT here —
                      * it lives exclusively inside the mobile drawer below.
                      */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <ThemeToggle />

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                            className="
                                md:hidden flex items-center justify-center
                                w-10 h-10 min-w-10 min-h-10 shrink-0
                                rounded-lg border border-(--color-border)
                                bg-(--color-surface) hover:bg-(--color-elevated)
                                text-(--color-text-secondary) hover:text-(--color-text-primary)
                                transition-all duration-150 cursor-pointer
                            "
                        >
                            {mobileOpen
                                ? <X size={20} aria-hidden="true" className="shrink-0" />
                                : <Menu size={20} aria-hidden="true" className="shrink-0" />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile / tablet drawer */}
                {mobileOpen && (
                    <nav
                        className="md:hidden border-t border-(--color-border) bg-(--color-background) py-3 px-4"
                        aria-label="Mobile navigation"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === '/'}
                                    onClick={() => setMobileOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-3 rounded-md text-sm font-medium transition-all duration-150 ${isActive
                                            ? 'bg-(--color-primary)/10 text-(--color-primary)'
                                            : 'text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-surface)'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}

                            {/* CTA — only place it exists on mobile/tablet */}
                            <div className="pt-3 mt-1 border-t border-(--color-border)">
                                <Button
                                    to="/contact"
                                    variant="primary"
                                    size="sm"
                                    className="w-full justify-center"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Request Consultation
                                </Button>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}