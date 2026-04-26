import React from 'react';
import { ExternalLink, Vote } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000080', color: 'white', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--color-saffron)', fontWeight: 'bold', fontSize: '1.5rem' }}>
              <Vote size={32} />
              <span>IndiaVotes</span>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '300px' }}>
              An educational initiative to spread awareness about the election process in India and empower citizens.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-saffron)' }}>Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#process" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='#cbd5e1'}>Election Process</a></li>
              <li><a href="#types" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='#cbd5e1'}>Types of Elections</a></li>
              <li><a href="#importance" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='#cbd5e1'}>Why Vote?</a></li>
              <li><a href="#interactive" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='#cbd5e1'}>Quiz & FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-saffron)' }}>Important Resources</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href="https://voters.eci.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center justify-center gap-2"
                  style={{ display: 'inline-flex', padding: '0.5rem 1rem' }}
                >
                  Register to Vote (NVSP) <ExternalLink size={16} />
                </a>
              </li>
              <li>
                <a 
                  href="https://eci.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#cbd5e1', textDecoration: 'underline', fontSize: '0.95rem' }}
                >
                  Election Commission of India
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/results?search_query=how+evm+vvpat+works+election+commission+of+india" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', marginTop: '0.5rem' }}
                >
                  <span style={{ color: '#ef4444' }}>▶</span> How EVM/VVPAT Works (YouTube)
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} IndiaVotes Educational Project. Not an official government website.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
