import { useEffect, useRef } from 'react';
import Flower from './components/Flower';
import ParallaxText from './components/ParallaxText';
import FloatingCards from './components/FloatingCards';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Bloom</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <ParallaxText>
          <h1 className="glowing-text">Bloom</h1>
          <p className="subtitle">Where ideas blossom into reality</p>
        </ParallaxText>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="arrow"></div>
        </div>
      </section>
      
      <Flower />
      
      <section className="content">
        <div className="section about" id="about">
          <ParallaxText>
            <h2>Who We Are</h2>
          </ParallaxText>
          <div className="grid-container">
            {['Innovation', 'Creativity', 'Excellence'].map((title, index) => (
              <FloatingCards key={index}>
                <div className="card">
                  <h3>{title}</h3>
                  <p>Pushing boundaries with cutting-edge solutions that define the future of digital experiences.</p>
                </div>
              </FloatingCards>
            ))}
          </div>
        </div>

        <div className="section services" id="services">
          <ParallaxText>
            <h2>Our Services</h2>
          </ParallaxText>
          <div className="services-grid">
            {[
              { icon: '🎨', title: 'UI/UX Design', desc: 'Creating intuitive interfaces' },
              { icon: '💻', title: 'Web Development', desc: 'Building robust applications' },
              { icon: '📱', title: 'Mobile Apps', desc: 'Cross-platform solutions' },
              { icon: '🚀', title: 'Digital Marketing', desc: 'Growth strategies' }
            ].map((service, index) => (
              <FloatingCards key={index}>
                <div className="service-card">
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </FloatingCards>
            ))}
          </div>
        </div>

        <div className="section work" id="work">
          <ParallaxText>
            <h2>Featured Work</h2>
          </ParallaxText>
          <div className="work-grid">
            {[
              { title: 'Project Alpha', desc: 'E-commerce platform' },
              { title: 'Project Beta', desc: 'Social media dashboard' },
              { title: 'Project Gamma', desc: 'Mobile banking app' }
            ].map((project, index) => (
              <FloatingCards key={index}>
                <div className="work-item">
                  <div className="work-image"></div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </FloatingCards>
            ))}
          </div>
        </div>

        <div className="section contact" id="contact">
          <ParallaxText>
            <h2>Let's Create Together</h2>
          </ParallaxText>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Ready to start your next project?</p>
              <div className="contact-details">
                <p>📧 hello@bloom.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 Silicon Valley, CA</p>
              </div>
            </div>
            <FloatingCards>
              <form className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </FloatingCards>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;