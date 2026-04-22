import React from 'react';
import { ShieldCheck, TrendingUp, HandHeart } from 'lucide-react';

const ImportanceOfVoting = () => {
  return (
    <section id="importance" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="title">Why Your Vote Matters</h2>
          <p className="subtitle">Voting is not just a right; it is a fundamental duty to shape the nation's future.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
          <div style={{ flex: 1 }}>
            <img 
              src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80" 
              alt="People showing inked fingers after voting" 
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
          
          <div style={{ flex: 1 }} className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div style={{ color: 'var(--color-green)' }}>
                <ShieldCheck size={40} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Fundamental Right & Duty</h3>
                <p style={{ color: 'var(--text-light)' }}>The Constitution grants every citizen above 18 the right to vote. Exercising this right strengthens the democratic fabric of our country.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ color: 'var(--color-saffron)' }}>
                <TrendingUp size={40} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Impact on Policies</h3>
                <p style={{ color: 'var(--text-light)' }}>Elected representatives make decisions on education, healthcare, infrastructure, and taxes. Your vote directly impacts your daily life.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ color: 'var(--color-navy)' }}>
                <HandHeart size={40} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Agents of Change</h3>
                <p style={{ color: 'var(--text-light)' }}>If you want better governance and accountability, voting is the most powerful non-violent tool to bring about change.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceOfVoting;
