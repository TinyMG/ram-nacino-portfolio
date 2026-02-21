import { Container } from './ui';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="glass-panel" style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: 'var(--container-max-width)',
            zIndex: 1000
        }}>
            <Container className="flex justify-between items-center py-4">
                <div className="text-2xl font-bold">
                    <span className="gradient-text">Ramiko_Dev</span>
                </div>

                {/* Desktop Menu */}
                <ul className="flex gap-8" style={{ listStyle: 'none' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-primary text-base">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar;
