import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="section flex items-center justify-center" style={{ minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background Graphic */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,153,51,0.2) 0%, rgba(255,153,51,0) 70%)', borderRadius: '50%', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(19,136,8,0.2) 0%, rgba(19,136,8,0) 70%)', borderRadius: '50%', zIndex: -1 }}></div>

      <div className="container text-center animate-fade-in">
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 153, 51, 0.1)', color: 'var(--color-saffron)', borderRadius: '2rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(255, 153, 51, 0.3)' }}>
          Democratic Republic of India
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
          Your Vote, <span style={{ color: 'var(--color-saffron)' }}>Your Power 🇮🇳</span>
        </h1>
        <p className="subtitle" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>
          Discover the strength of democracy. Learn how the world's largest democratic exercise is conducted, understand your rights, and make an informed choice for the nation's future.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#process" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Learn Process
          </a>
          <a href="#types" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Types of Elections
          </a>
          <a href="#importance" className="btn btn-green" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Why Vote?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
