import React from 'react';
import { Container, Card } from '../components/ui';

const About = () => {
    return (
        <section id="about" className="py-16">
            <Container>
                <h2 className="text-4xl mb-8 text-center">
                    About <span className="gradient-text">Me</span>
                </h2>

                <Card className="p-8">
                    <p className="text-lg text-secondary mb-8 max-w-3xl mx-auto text-center">
                        Senior QA Automation Engineer with over 9 years of hands-on experience in web, API, mobile, and performance testing.
                        I specialize in building and maintaining automation frameworks, modernizing legacy QA processes, and collaborating with
                        engineering teams to achieve reliable, high-quality releases.
                    </p>

                    <div className="grid grid-auto-fit gap-8 mt-12">
                        {/* Skill Group 1 */}
                        <div>
                            <h3 className="text-brand mb-4">Automation & Tools</h3>
                            <ul style={{ listStyle: 'none' }} className="text-primary">
                                <li>✅ Selenium (Java)</li>
                                <li>✅ Playwright (TypeScript)</li>
                                <li>✅ Appium (Mobile Testing)</li>
                                <li>✅ API Testing (RestAssured, Postman)</li>
                                <li>✅ Performance Testing (JMeter)</li>
                            </ul>
                        </div>

                        {/* Skill Group 2 */}
                        <div>
                            <h3 style={{ color: 'var(--secondary)' }} className="mb-4">Languages & Database</h3>
                            <ul style={{ listStyle: 'none' }} className="text-primary">
                                <li>✅ Java, Python, JavaScript, TypeScript</li>
                                <li>✅ SQL (MySQL, SQL Server, MongoDB)</li>
                                <li>✅ Data Validation & Migration Testing</li>
                            </ul>
                        </div>

                        {/* Skill Group 3 */}
                        <div>
                            <h3 className="text-brand mb-4">CI/CD & Management</h3>
                            <ul style={{ listStyle: 'none' }} className="text-primary">
                                <li>✅ Jenkins, Git, Docker</li>
                                <li>✅ Jira, TestRail, XRay</li>
                                <li>✅ CI/CD Pipeline Integration</li>
                                <li>✅ Agile/Scrum Methodologies</li>
                            </ul>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mt-12 text-center">
                        <h3 className="text-brand mb-6">Certifications</h3>
                        <Card style={{
                            padding: '1.5rem',
                            display: 'inline-block',
                            background: 'rgba(0, 243, 255, 0.05)'
                        }}>
                            <p className="text-lg font-bold mb-2">
                                🏆 ISTQB Foundation Level
                            </p>
                            <p className="text-secondary text-sm">
                                Certificate Number: 18-CTFL-0083713A
                            </p>
                        </Card>
                    </div>
                </Card>
            </Container>
        </section>
    );
};

export default About;

