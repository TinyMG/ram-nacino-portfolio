import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Automation Framework',
            description: 'A scalable hybrid framework (Page Object Model) utilizing Selenium Java and TestNG. Integrated with Jenkins for nightly regression runs.',
            tech: ['Java', 'Selenium', 'TestNG', 'Jenkins'],
            link: '#'
        },
        {
            title: 'API Testing Suite',
            description: 'Automated 100+ REST API endpoints using RestAssured. Validates status codes, response payloads, and schema compliance.',
            tech: ['Java', 'RestAssured', 'Maven'],
            link: '#'
        },
        {
            title: 'Validating Cypress E2E',
            description: 'End-to-end testing suite for a React-based application. Covers critical user flows like Authentication, Payment, and Dashboard.',
            tech: ['Cypress', 'JavaScript', 'Mocha'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="container" style={{ padding: 'var(--section-padding)' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '3rem',
                textAlign: 'center'
            }}>
                Featured <span className="gradient-text">Projects</span>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass-panel" style={{
                        padding: '2rem',
                        transition: 'transform 0.3s',
                        cursor: 'pointer'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            {project.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            {project.tech.map((t) => (
                                <span key={t} style={{
                                    fontSize: '0.8rem',
                                    padding: '0.2rem 0.6rem',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    color: 'var(--primary)'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} style={{ fontWeight: 'bold' }}>View Code &rarr;</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
