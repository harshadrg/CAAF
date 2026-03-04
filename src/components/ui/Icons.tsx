/* eslint-disable react-refresh/only-export-components */
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Centralized icon system for CAAF website
 * All icons use currentColor and inherit text color from parent
 * Usage: <Mail size={20} className="text-primary" />
 */

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
}

export const IconBase = ({
    children,
    size = 24,
    strokeWidth = 2,
    fill = 'none',
    stroke = 'currentColor',
    ...props
}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        {children}
    </svg>
);

// ========================================
// NAVIGATION & UI ICONS
// ========================================

export const Menu = (p: IconProps) => (
    <IconBase {...p}>
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </IconBase>
);

export const X = (p: IconProps) => (
    <IconBase {...p}>
        <line x1="18" x2="6" y1="6" y2="18" />
        <line x1="6" x2="18" y1="6" y2="18" />
    </IconBase>
);

export const ArrowRight = (p: IconProps) => (
    <IconBase {...p}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </IconBase>
);

export const ChevronDown = (p: IconProps) => (
    <IconBase {...p}>
        <polyline points="6 9 12 15 18 9" />
    </IconBase>
);

export const Check = (p: IconProps) => (
    <IconBase {...p}>
        <polyline points="20 6 9 17 4 12" />
    </IconBase>
);

export const ArrowUpRight = (p: IconProps) => (
    <IconBase {...p}>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </IconBase>
);

// ========================================
// BRAND & TRUST ICONS
// ========================================

export const Shield = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </IconBase>
);

export const ShieldCheck = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
    </IconBase>
);

export const Server = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
    </IconBase>
);

export const Building2 = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </IconBase>
);

export const Scale = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </IconBase>
);

export const Globe = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </IconBase>
);


// ========================================
// BUSINESS & SERVICES ICONS
// ========================================

export const HardDrive = (p: IconProps) => (
    <IconBase {...p}>
        <line x1="22" y1="12" x2="2" y2="12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <line x1="6" y1="16" x2="6.01" y2="16" />
        <line x1="10" y1="16" x2="10.01" y2="16" />
    </IconBase>
);

export const FileText = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </IconBase>
);

export const FileSearch = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="10" cy="13" r="2" />
        <line x1="11.4" y1="14.4" x2="13.4" y2="16.4" />
    </IconBase>
);

export const FileCheck = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 12" />
    </IconBase>
);

export const File = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
    </IconBase>
);

export const FileCode = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="10 13 8 15 10 17" />
        <polyline points="14 13 16 15 14 17" />
    </IconBase>
);

export const Monitor = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </IconBase>
);

export const Settings = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </IconBase>
);

export const CheckSquare = (p: IconProps) => (
    <IconBase {...p}>
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </IconBase>
);

export const Box = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </IconBase>
);

export const Target = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </IconBase>
);

export const Briefcase = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </IconBase>
);

export const Search = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </IconBase>
);

export const Play = (p: IconProps) => (
    <IconBase {...p}>
        <polygon points="5 3 19 12 5 21 5 3" />
    </IconBase>
);

export const Activity = (p: IconProps) => (
    <IconBase {...p}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </IconBase>
);

export const MapNetwork = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34L7 3a10 10 0 0 0-4.95 8.58 10 10 0 0 0 3.5 7h.01A10 10 0 0 0 12 21a10 10 0 0 0 7.07-2.93" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </IconBase>
);

export const Compass = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </IconBase>
);

export const Plus = (p: IconProps) => (
    <IconBase {...p}>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </IconBase>
);

export const Pulse = (p: IconProps) => (
    <IconBase {...p}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </IconBase>
);

export const Database = (p: IconProps) => (
    <IconBase {...p}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </IconBase>
);

export const CreditCard = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
    </IconBase>
);

export const Lock = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </IconBase>
);

export const Award = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </IconBase>
);

export const Calendar = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </IconBase>
);

export const BarChart = (p: IconProps) => (
    <IconBase {...p}>
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
    </IconBase>
);

export const Layout = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
    </IconBase>
);

export const Grid = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
    </IconBase>
);

// ========================================
// INDUSTRY SPECIFIC ICONS
// ========================================

export const Landmark = (p: IconProps) => (
    <IconBase {...p}>
        <line x1="3" y1="22" x2="21" y2="22" />
        <rect x="2" y="9" width="4" height="13" />
        <rect x="18" y="9" width="4" height="13" />
        <rect x="7" y="5" width="10" height="17" />
        <line x1="12" y1="2" x2="12" y2="5" />
    </IconBase>
);

export const Cpu = (p: IconProps) => (
    <IconBase {...p}>
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
    </IconBase>
);

export const Code = (p: IconProps) => (
    <IconBase {...p}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </IconBase>
);

export const HeartPulse = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </IconBase>
);

// ========================================
// CONTACT & COMMUNICATION ICONS
// ========================================

export const Mail = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </IconBase>
);

export const Phone = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </IconBase>
);

export const MapPin = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </IconBase>
);

export const AlertCircle = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
    </IconBase>
);

export const UserCheck = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H5c-2.2 0-4 1.8-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
    </IconBase>
);

export const User = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
    </IconBase>
);

export const Users = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
);

// ========================================
// THEME ICONS
// ========================================

export const Sun = (p: IconProps) => (
    <IconBase {...p}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </IconBase>
);

export const Moon = (p: IconProps) => (
    <IconBase {...p}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </IconBase>
);

// ========================================
// SOCIAL MEDIA & NEWSLETTER ICONS
// ========================================

export const Linkedin = (p: IconProps) => (
    <IconBase {...p} fill="currentColor" stroke="none">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </IconBase>
);

export const Twitter = (p: IconProps) => (
    <IconBase {...p} fill="currentColor" stroke="none">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </IconBase>
);

export const Send = (p: IconProps) => (
    <IconBase {...p}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
    </IconBase>
);

// ========================================
// EXPORT ALL ICONS
// ========================================

export const Icons = {
    Menu,
    X,
    ArrowRight,
    ChevronDown,
    Check,
    ArrowUpRight,
    Shield,
    ShieldCheck,
    Server,
    Building2,
    Scale,
    Globe,
    HardDrive,
    FileText,
    FileSearch,
    FileCheck,
    File,
    FileCode,
    Monitor,
    Settings,
    CheckSquare,
    Box,
    Target,
    Briefcase,
    Search,
    Play,
    Activity,
    MapNetwork,
    Compass,
    Plus,
    Pulse,
    Database,
    CreditCard,
    Lock,
    Award,
    Calendar,
    BarChart,
    Layout,
    Grid,
    Landmark,
    Cpu,
    Code,
    HeartPulse,
    Mail,
    Phone,
    MapPin,
    AlertCircle,
    UserCheck,
    Users,
    User,
    Sun,
    Moon,
    Linkedin,
    Twitter,
    Send,
};

export default Icons;
