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
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <img 
              src="https://assets.carnegieendowment.org/_/eyJrZXkiOiJzdGF0aWMvbWVkaWEvaW1hZ2VzL0dldHR5SW1hZ2VzLTQ2MzM1MzQ0OS5qcGcifQ==" 
              alt="People voting in India" 
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
            />
            <blockquote style={{ fontStyle: 'italic', color: 'var(--color-navy)', fontSize: '1.25rem', textAlign: 'center', padding: '1rem', borderLeft: '4px solid var(--color-saffron)', backgroundColor: 'rgba(255,153,51,0.05)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
              "Government of the people, by the people, for the people"
            </blockquote>
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
