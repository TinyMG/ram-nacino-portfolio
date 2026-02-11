import React from 'react';
import { Container, Card, Badge } from '../components/ui';

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
            title: 'KIXEYE - Game Testing & Data Validation',
            company: 'KIXEYE (Feb 2022 - Oct 2024)',
            description: 'Performed comprehensive game testing, data validation, and functional testing for complex client specifications. Ensured data integrity through systematic validation and executed end-to-end test cases for game features.',
            tech: ['Game Testing', 'Data Validation', 'Functional Testing', 'JIRA', 'TestRail'],
            achievements: [
                'Validated database inputs for data integrity',
                'Executed API and backend testing',
                'Mentored junior QA team members'
            ]
        },
        {
            title: 'Stratpoint - HR Portal & Jobsite Automation',
            company: 'Stratpoint (Mar 2018 - Feb 2022)',
            description: 'Test automation of HR portal and jobsite applications. Automated large portions of regression test cases and managed UAT automation initiatives. Integrated QA processes into DevOps pipelines using Jenkins.',
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
        <section id="projects" className="pt-16 pb-2">
            <Container>
                <h2 className="text-4xl mb-12 text-center">
                    Professional <span className="gradient-text">Experience</span>
                </h2>

                <div className="grid grid-auto-fit gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="p-8 transition-slow cursor-pointer hover-scale"
                        >
                            <h3 className="mb-2 text-xl">{project.title}</h3>
                            <p className="text-brand text-sm mb-4">
                                {project.company}
                            </p>
                            <p className="text-secondary mb-6">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="default" className="text-xs">
                                        {t}
                                    </Badge>
                                ))}
                            </div>

                            {/* Key Achievements */}
                            <div style={{ borderTop: '1px solid var(--border-color)' }} className="pt-4">
                                <p className="text-sm text-secondary mb-2 font-semibold">
                                    Key Achievements:
                                </p>
                                <ul className="text-sm text-secondary" style={{ paddingLeft: '1.2rem' }}>
                                    {project.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* GitHub Link */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/TinyMG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'var(--bg-glass)',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <svg
                            className="w-5 h-5 flex-shrink-0"
                            style={{ minWidth: '20px', width: '20px', height: '20px' }}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base font-semibold">View More on GitHub</span>
                    </a>
                </div>

            </Container>
        </section>
    );
};

export default Projects;
