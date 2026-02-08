const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            marginTop: 'auto',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)'
        }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                &copy; {new Date().getFullYear()} Ram Nacino (Ramiko Devving). All rights reserved.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                <a href="https://github.com/TinyMG" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:ramikodevving@gmail.com">Email</a>
            </div>
        </footer>
    );
};

export default Footer;
