import { NavLink } from "react-router";

export default function Header() {
    return (
        <header className="w-full">
            <nav className="flex justify-around items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/virtual-services">Virtual Services</NavLink>
                <NavLink to="/industries">Industries</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    );
}