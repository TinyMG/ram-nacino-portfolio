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
                    I am a detail-oriented QA Engineer with a passion for delivering bug-free software.
                    With experience in both manual and automated testing, I specialize in creating
                    efficient test frameworks that reduce release cycles and improve overall product quality.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {/* Skill Group 1 */}
                    <div>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Automation Testing</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-primary)' }}>
                            <li>✅ Selenium WebDriver</li>
                            <li>✅ Cypress & Playwright</li>
                            <li>✅ Appium (Mobile)</li>
                            <li>✅ API Testing (Postman/RestAssured)</li>
                        </ul>
                    </div>

                    {/* Skill Group 2 */}
                    <div>
                        <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Manual Testing</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-primary)' }}>
                            <li>✅ Functional & UI Testing</li>
                            <li>✅ Regression Testing</li>
                            <li>✅ Cross-Browser Testing</li>
                            <li>✅ Jira & TestRail Management</li>
                        </ul>
                    </div>

                    {/* Skill Group 3 */}
                    <div>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Languages & Tools</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-primary)' }}>
                            <li>✅ Java, Python, JavaScript</li>
                            <li>✅ Git & GitHub</li>
                            <li>✅ CI/CD (Jenkins, GitHub Actions)</li>
                            <li>✅ SQL & Database Testing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
