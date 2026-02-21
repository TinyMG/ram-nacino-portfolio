import { Container } from './ui';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)'
        }} className="mt-auto">
            <Container className="text-center py-8">
                <p className="text-secondary mb-4">
                    &copy; {new Date().getFullYear()} Ram Nacino (Ramiko Devving). All rights reserved.
                </p>
                <div className="flex justify-center gap-6">
                    <a href="https://github.com/TinyMG" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ram-nacino-placeholder" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:ramikodevving@gmail.com">Email</a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
