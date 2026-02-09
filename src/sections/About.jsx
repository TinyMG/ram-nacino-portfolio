import React from 'react';

const About = () => {
    return (
        <section id="about" className="container" style={{ padding: 'var(--section-padding)' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                About <span className="gradient-text">Me</span>
            </h2>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center'
                }}>
                    Senior QA Automation Engineer with over 9 years of hands-on experience in web, API, mobile, and performance testing.
                    I specialize in building and maintaining automation frameworks, modernizing legacy QA processes, and collaborating with
                    engineering teams to achieve reliable, high-quality releases.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {/* Skill Group 1 */}
                    <div>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Automation & Tools</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-primary)' }}>
                            <li>✅ Selenium (Java)</li>
                            <li>✅ Playwright (TypeScript)</li>
                            <li>✅ Appium (Mobile Testing)</li>
                            <li>✅ API Testing (RestAssured, Postman)</li>
                            <li>✅ Performance Testing (JMeter)</li>
                        </ul>
                    </div>

                    {/* Skill Group 2 */}
                    <div>
                        <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Languages & Database</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-primary)' }}>
                            <li>✅ Java, Python, JavaScript</li>
                            <li>✅ SQL (MySQL, SQL Server, MongoDB)</li>
                            <li>✅ C# & DevOps Engineer</li>
                            <li>✅ Data Validation & Migration Testing</li>
                        </ul>
                    </div>

                    {/* Skill Group 3 */}
                    <div>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>CI/CD & Management</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-primary)' }}>
                            <li>✅ Jenkins, Git, Docker</li>
                            <li>✅ Jira, TestRail, XRay</li>
                            <li>✅ CI/CD Pipeline Integration</li>
                            <li>✅ Agile/Scrum Methodologies</li>
                        </ul>
                    </div>
                </div>

                {/* Certifications */}
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Certifications</h3>
                    <div className="glass-panel" style={{
                        padding: '1.5rem',
                        display: 'inline-block',
                        background: 'rgba(0, 243, 255, 0.05)'
                    }}>
                        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                            🏆 ISTQB Foundation Level
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Certificate Number: 18-CTFL-0083713A
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
