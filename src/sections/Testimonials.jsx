import React from 'react';
import { Container, Card } from '../components/ui';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Ram is an exceptional SDET who transformed our QA process. His automation framework reduced our regression testing time by 70%.",
            author: "Jane Doe",
            role: "Engineering Manager",
            company: "TechCorp"
        },
        {
            quote: "His expertise in Playwright and CI/CD was crucial for our release. He is a true team player and a mentor to junior QAs.",
            author: "John Smith",
            role: "Lead Developer",
            company: "Innovate Inc"
        },
        {
            quote: "Ram brought a high level of professionalism and technical skill to the team. His attention to detail in API testing is unmatched.",
            author: "Sarah Lee",
            role: "Product Owner",
            company: "StartUp flow"
        }
    ];

    return (
        <section id="testimonials" className="py-16 bg-[rgba(255,255,255,0.02)]">
            <Container>
                <h2 className="text-4xl mb-12 text-center">
                    What People <span className="gradient-text">Say</span>
                </h2>

                <div className="grid grid-auto-fit gap-8">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="p-8 flex flex-col justify-between">
                            <div className="mb-6">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--primary)" className="mb-4 opacity-50">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                </svg>
                                <p className="text-secondary italic text-lg leading-relaxed">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-[var(--border-color)] pt-4">
                                <div>
                                    <p className="text-primary font-bold">{item.author}</p>
                                    <p className="text-sm text-secondary">{item.role}, {item.company}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
