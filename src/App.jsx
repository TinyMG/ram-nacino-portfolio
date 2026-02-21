import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />

        <section id="contact" className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's <span className="gradient-text">Connect</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Open to new opportunities in QA Automation and SDET roles.
          </p>
          <a href="mailto:ramikodevving@gmail.com" style={{
            padding: '1rem 3rem',
            background: 'var(--primary)',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '50px',
            fontSize: '1.1rem'
          }}>
            Send Message
          </a>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default App
