import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X, Vote } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Process', href: '#process' },
    { name: 'Types', href: '#types' },
    { name: 'Importance', href: '#importance' },
    { name: 'Quiz', href: '#interactive' },
  ];

  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '1rem 0' }}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2" style={{ color: 'var(--color-saffron)', fontWeight: 'bold', fontSize: '1.5rem' }}>
          <Vote size={32} />
          <span>IndiaVotes</span>
        </div>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-6" style={{ display: 'none' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link" style={{ fontWeight: 500, transition: 'color 0.2s' }}>
              {link.name}
            </a>
          ))}
          <button onClick={toggleDarkMode} className="btn-outline flex items-center justify-center" style={{ padding: '0.5rem', borderRadius: '50%' }} aria-label="Toggle Dark Mode">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4" style={{ display: 'flex' }}>
          <button onClick={toggleDarkMode} className="btn-outline flex items-center justify-center" style={{ padding: '0.5rem', borderRadius: '50%' }} aria-label="Toggle Dark Mode">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn-outline" style={{ padding: '0.5rem', border: 'none' }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="container flex flex-col gap-4" style={{ padding: '1rem', backgroundColor: 'var(--card-bg)', position: 'absolute', top: '100%', left: 0, width: '100%', borderBottom: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              style={{ padding: '0.5rem 0', fontWeight: 500, borderBottom: '1px solid var(--border-color)' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
