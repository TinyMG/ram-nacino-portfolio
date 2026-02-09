import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Showbie - QA Automation Framework',
            company: 'Showbie (June 2025 - Present)',
            description: 'Built comprehensive automation suite using Java Selenium for web testing and Playwright for modern end-to-end coverage. Integrated CI/CD pipelines with code coverage tracking for continuous quality monitoring.',
            tech: ['Java', 'Selenium', 'Playwright', 'Jenkins', 'CI/CD'],
            achievements: [
                'Improved test coverage and execution speed',
                'Implemented Playwright for E2E tests',
                'Integrated code coverage tools'
            ]
        },
        {
            title: 'KIXEYE - MySQL & API Test Automation',
            company: 'KIXEYE (Feb 2022 - Oct 2024)',
            description: 'Led QA initiatives for complex client-driven test case creation and execution. Performed end-to-end data validation using SQL queries, API testing, and managed defect tracking through JIRA.',
            tech: ['MySQL', 'API Testing', 'JIRA', 'SQL Server', 'TestRail'],
            achievements: [
                'Validated database inputs for data integrity',
                'Executed API and backend testing',
                'Mentored junior QA team members'
            ]
        },
        {
            title: 'Stratpoint - Banking Mobile QA',
            company: 'Stratpoint (Mar 2018 - Feb 2022)',
            description: 'Automated large portions of regression test cases for banking mobile applications. Managed UAT automation initiatives and integrated QA processes into DevOps pipelines using Jenkins.',
            tech: ['Jenkins', 'Mobile Testing', 'Automation', 'DevOps'],
            achievements: [
                'Automated regression test cases',
                'Led UAT automation with Jenkins',
                'Conducted gap analyses to prioritize automation'
            ]
        },
        {
            title: 'TRIBAL - API & Performance Testing',
            company: 'TRIBAL (Jun 2016 - Mar 2018)',
            description: 'Executed manual and automated test cases using TestComplete and Katalon Studio. Developed test scripts for API testing with SQL integration and performed performance testing using JMeter.',
            tech: ['TestComplete', 'Katalon Studio', 'JMeter', 'SQL'],
            achievements: [
                'Developed API test scripts with SQL',
                'Performed performance tests using JMeter',
                'Maintained detailed test documentation'
            ]
        }
    ];

    return (
        <section id="projects" className="container" style={{ padding: 'var(--section-padding)' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '3rem',
                textAlign: 'center'
            }}>
                Professional <span className="gradient-text">Experience</span>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            {project.company}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            {project.description}
                        </p>

                        {/* Tech Stack */}
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

                        {/* Key Achievements */}
                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                Key Achievements:
                            </p>
                            <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                                {project.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* GitHub Stats */}
            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                    GitHub <span className="gradient-text">Activity</span>
                </h3>
                <img
                    src="https://github-readme-stats.vercel.app/api?username=TinyMG&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a"
                    alt="GitHub Stats"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
                />
            </div>
        </section>
    );
};

export default Projects;
