import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="glass-panel" style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1200px',
            zIndex: 1000,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <span className="gradient-text">Ramiko_Dev</span>
            </div>

            {/* Desktop Menu */}
            <ul style={{
                display: 'flex',
                gap: '2rem',
                listStyle: 'none'
            }} className="desktop-menu">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
