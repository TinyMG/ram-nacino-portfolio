import React from 'react';
import { Container, Button, Badge } from '../components/ui';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center" style={{ paddingTop: '80px' }}>
            <Container className="text-center max-w-3xl">
                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    lineHeight: '1.1',
                    fontWeight: '800'
                }} className="mb-6">
                    Building Quality through <span className="gradient-text">Automation</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    maxWidth: '600px'
                }} className="text-secondary mx-auto mb-8">
                    Hi, I'm <strong className="text-primary">Ram Nacino</strong>.
                    Senior QA Automation Engineer with 9+ years of expertise in web, API, mobile, and performance testing.
                    I build robust automation frameworks that accelerate release cycles and ensure software quality.
                </p>


                <div className="flex gap-4 justify-center flex-wrap mb-8">
                    <Button
                        variant="primary"
                        size="md"
                        onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Projects
                    </Button>

                    <Button
                        variant="secondary"
                        size="md"
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        download="Ram_Nacino_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </Button>

                    <Button
                        variant="ghost"
                        size="md"
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </Button>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-20">
                    <p className="text-secondary mb-6 text-base tracking-widest uppercase font-bold">Core Technologies</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Selenium', 'Playwright', 'Appium', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Jenkins'].map((tech) => (
                            <Badge key={tech} variant="default">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
