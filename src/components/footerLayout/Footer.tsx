import { NavLink } from 'react-router';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, ShieldCheck } from '../ui/Icons';

import LOGO_LIGHT from '../../assets/caaf-logo-light.svg'
import LOGO_DARK from '../../assets/caaf-logo-dark.svg'

const serviceLinks = [
    { to: '/services', label: 'Compliance & Regulatory Advisory' },
    { to: '/services', label: 'Audit & Assurance' },
    { to: '/services', label: 'GRC Advisory' },
    { to: '/virtual-services', label: 'Virtual Executive Services' },
    { to: '/services', label: 'Cybersecurity Advisory' },
    { to: '/services', label: 'IT & OT Security Advisory' },
    { to: '/services', label: 'Secure Digital Engineering' },
];

const quickLinks = [
    { to: '/about', label: 'About CAAF' },
    { to: '/industries', label: 'Industries Served' },
    { to: '/virtual-services', label: 'vCISO & vDPO' },
    { to: '/contact', label: 'Contact Us' },
];

const companyName = import.meta.env.VITE_COMPANY_NAME as string;
const email = import.meta.env.VITE_CONTACT_EMAIL as string;
const phone = import.meta.env.VITE_CONTACT_PHONE as string;
const address = import.meta.env.VITE_CONTACT_ADDRESS as string;
const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL as string;
const twitterUrl = import.meta.env.VITE_TWITTER_URL as string;

export default function Footer() {
    return (
        <footer
            className="bg-(--color-surface) border-t border-(--color-border)"
            role="contentinfo"
        >
            <div className="container-max px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-x-8 lg:gap-y-12 pb-8 sm:pb-10 lg:pb-12">

                    {/* Column 1: Brand + Social */}
                    <div className="sm:col-span-2 lg:col-span-4 lg:pr-8">
                        <NavLink to="/" className="flex items-center group">
                            <img
                                src={LOGO_LIGHT}
                                alt="CAAF Logo"
                                className="block dark:hidden h-15 w-auto object-contain transition-opacity duration-300"
                            />
                            <img
                                src={LOGO_DARK}
                                alt="CAAF Logo"
                                className="hidden dark:block h-15 w-auto object-contain transition-opacity duration-300"
                            />
                        </NavLink>
                        <p className="text-xs sm:text-sm text-(--color-text-muted) leading-relaxed mb-3 sm:mb-4">
                            An independent multidisciplinary advisory firm delivering governance-driven
                            compliance, cybersecurity, and audit solutions for regulated enterprises.
                        </p>
                        <p className="text-[10px] sm:text-xs text-(--color-text-muted) uppercase tracking-widest mb-3 sm:mb-4">
                            Compliance · Audit · Advisory Firm
                        </p>

                        <div className="flex items-center gap-1 sm:gap-2">
                            <Button
                                variant="ghost"
                                href={linkedInUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Follow ${companyName} on LinkedIn`}
                                size="sm"
                                className="px-2! py-2! text-(--color-text-muted) hover:text-(--color-primary) hover:bg-(--color-elevated)"
                            >
                                <Linkedin size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                            </Button>
                            <Button
                                variant="ghost"
                                href={twitterUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Follow ${companyName} on Twitter`}
                                size="sm"
                                className="px-2! py-2! text-(--color-text-muted) hover:text-(--color-primary) hover:bg-(--color-elevated)"
                            >
                                <Twitter size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                            </Button>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs sm:text-sm font-semibold text-(--color-text-primary) uppercase tracking-wider mb-3 sm:mb-4">
                            Services
                        </h3>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.to}
                                        className="text-xs sm:text-sm text-(--color-text-muted) hover:text-(--color-primary) transition-colors duration-150 block"
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs sm:text-sm font-semibold text-(--color-text-primary) uppercase tracking-wider mb-3 sm:mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.to}
                                        className="text-xs sm:text-sm text-(--color-text-muted) hover:text-(--color-primary) transition-colors duration-150 block"
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact + Newsletter */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <h3 className="text-xs sm:text-sm font-semibold text-(--color-text-primary) uppercase tracking-wider mb-3 sm:mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {/* Email — link variant, no padding overrides */}
                            <li className="flex items-start gap-2.5 sm:gap-3">
                                <Mail
                                    size={14}
                                    className="sm:w-4 sm:h-4 text-(--color-primary) mt-0.5 shrink-0"
                                    aria-hidden="true"
                                />
                                <Button
                                    variant="link"
                                    href={`mailto:${email}`}
                                    size="sm"
                                    className="text-xs sm:text-sm text-(--color-text-secondary) font-normal break-all"
                                >
                                    {email}
                                </Button>
                            </li>
                            {/* Phone — display only */}
                            <li className="flex items-start gap-2.5 sm:gap-3">
                                <Phone
                                    size={14}
                                    className="sm:w-4 sm:h-4 text-(--color-primary) mt-0.5 shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="text-xs sm:text-sm text-(--color-text-secondary)">
                                    {phone}
                                </span>
                            </li>
                            {/* Address — display only */}
                            <li className="flex items-start gap-2.5 sm:gap-3">
                                <MapPin
                                    size={14}
                                    className="sm:w-4 sm:h-4 text-(--color-primary) mt-0.5 shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="text-xs sm:text-sm text-(--color-text-secondary) leading-relaxed">
                                    {address}
                                </span>
                            </li>
                        </ul>

                        {/* Newsletter Signup */}
                        <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-(--color-border)">
                            <h4 className="text-xs sm:text-sm font-semibold text-(--color-text-primary) mb-2">
                                Newsletter
                            </h4>
                            <p className="text-[10px] sm:text-xs text-(--color-text-muted) mb-2.5 sm:mb-3">
                                Get regulatory updates &amp; governance insights.
                            </p>
                            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    required
                                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-(--color-border) bg-(--color-background) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-transparent transition-all"
                                    aria-label="Email for newsletter"
                                />
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="sm"
                                    className="w-full text-xs! sm:text-sm!"
                                >
                                    <Send size={12} className="sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                                    Subscribe
                                </Button>
                            </form>
                            <p className="text-[10px] sm:text-xs text-(--color-text-muted) mt-2">
                                No spam. Unsubscribe anytime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Compliance Badges */}
                <div className="py-6 sm:py-8 border-t border-(--color-border)">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                        {['ISO 27001 Certified', 'GDPR Compliant', 'SOC 2 Type II', 'DPDP Ready'].map((badge) => (
                            <div
                                key={badge}
                                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border border-(--color-border) transition-all duration-200 hover:border-(--color-primary)"
                            >
                                <ShieldCheck
                                    size={14}
                                    className="sm:w-4 sm:h-4 text-(--color-success) shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="font-medium text-(--color-text-primary) text-[10px] sm:text-xs lg:text-sm whitespace-nowrap">
                                    {badge}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-(--color-border) flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <p className="text-[10px] sm:text-xs text-(--color-text-muted) text-center sm:text-left">
                        © 2025 {companyName} — Compliance, Audit &amp; Advisory Firm. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
                        <NavLink
                            to="/privacy"
                            className="text-[10px] sm:text-xs text-(--color-text-muted) hover:text-(--color-primary) transition-colors duration-150 whitespace-nowrap"
                        >
                            Privacy Policy
                        </NavLink>
                        <NavLink
                            to="/terms"
                            className="text-[10px] sm:text-xs text-(--color-text-muted) hover:text-(--color-primary) transition-colors duration-150 whitespace-nowrap"
                        >
                            Terms of Service
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="text-[10px] sm:text-xs text-(--color-text-muted) hover:text-(--color-primary) transition-colors duration-150 whitespace-nowrap"
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}