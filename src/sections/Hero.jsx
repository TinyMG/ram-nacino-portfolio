import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="container" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px'
        }}>
            <div style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    fontWeight: '800'
                }}>
                    Building Quality through <span className="gradient-text">Automation</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    color: 'var(--text-secondary)',
                    marginBottom: '2.5rem',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>Ram Nacino</strong>.
                    I bridge the gap between development and quality assurance with robust test automation strategies.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <a href="#projects" style={{
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        background: 'var(--primary)',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        color: '#000',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        transition: 'transform 0.2s',
                        display: 'inline-block'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        View Projects
                    </a>

                    <a href="#contact" style={{
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--primary)',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        color: 'var(--primary)',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        display: 'inline-block'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 243, 255, 0.1)';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        Contact Me
                    </a>
                </div>

                {/* Tech Stack Pills w/ simple animation */}
                <div style={{ marginTop: '4rem' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Tech Stack</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                        {['Selenium', 'Cypress', 'Java', 'Python', 'JavaScript', 'Jenkins', 'Postman'].map((tech) => (
                            <span key={tech} style={{
                                padding: '0.5rem 1rem',
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
