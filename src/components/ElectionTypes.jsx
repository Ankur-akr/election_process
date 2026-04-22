import React, { useState } from 'react';
import { Landmark, MapPin, Building, Award, ChevronDown, ChevronUp, CheckCircle, Activity, Globe } from 'lucide-react';

const ElectionTypes = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const types = [
    {
      title: 'General Elections (Lok Sabha)',
      shortDesc: 'Elections to choose Members of Parliament (MPs) and form the Central Government.',
      icon: <Landmark size={40} />,
      details: (
        <div className="text-left mt-4 animate-fade-in" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <ul className="flex flex-col gap-2 mb-4" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
            <li className="flex items-start gap-2"><CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }}/> <span>Total 543 constituencies.</span></li>
            <li className="flex items-start gap-2"><CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }}/> <span>Each constituency elects one MP.</span></li>
            <li className="flex items-start gap-2"><CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }}/> <span>Majority (272+ seats) forms central government.</span></li>
            <li className="flex items-start gap-2"><CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }}/> <span>Conducted by the Election Commission of India.</span></li>
          </ul>
          
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-navy)' }}>Process Timeline:</h4>
          <div className="flex flex-wrap gap-2 mb-4" style={{ fontSize: '0.8rem', color: 'var(--color-saffron)', fontWeight: 500, backgroundColor: 'rgba(255, 153, 51, 0.05)', padding: '0.5rem', borderRadius: 'var(--radius-md)' }}>
            Announcement → Nomination → Campaign → Voting (EVM) → Counting → Result → Govt Formation
          </div>
          
          <div style={{ backgroundColor: 'rgba(19, 136, 8, 0.05)', padding: '0.75rem', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-green)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>
              <strong>Importance:</strong> Decides national leadership, foreign affairs, defense, and country-wide policies.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'State Assembly (Vidhan Sabha)',
      shortDesc: 'State-level elections to elect MLAs and form the State Government.',
      icon: <MapPin size={40} />,
      details: (
        <div className="text-left mt-4 animate-fade-in" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <ul className="flex flex-col gap-2 mb-4" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
            <li className="flex items-start gap-2"><CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }}/> <span>Members of Legislative Assembly (MLAs) are elected.</span></li>
            <li className="flex items-start gap-2"><CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }}/> <span>Term length is 5 years.</span></li>
            <li className="flex items-start gap-2"><CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }}/> <span>Majority party/alliance forms state government.</span></li>
            <li className="flex items-start gap-2"><CheckCircle size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }}/> <span>The leader becomes the Chief Minister.</span></li>
          </ul>
          
          <div style={{ backgroundColor: 'rgba(19, 136, 8, 0.05)', padding: '0.75rem', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-green)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>
              <strong>Governance Areas:</strong> Responsible for state-level issues like education, health, agriculture, and law & order.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Local Body Elections',
      shortDesc: 'Grassroots democracy system for managing local village and city administration.',
      icon: <Building size={40} />,
      details: (
        <div className="text-left mt-4 animate-fade-in" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <div className="mb-3">
            <h4 style={{ fontWeight: 600, color: 'var(--color-saffron)' }}>Rural (Panchayati Raj):</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Includes Gram Panchayat, Block, and District levels. Headed by a <strong>Sarpanch</strong>.</p>
          </div>
          <div className="mb-4">
            <h4 style={{ fontWeight: 600, color: 'var(--color-saffron)' }}>Urban:</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Includes Municipal Corporation, Municipal Council, and Nagar Panchayat. Headed by a <strong>Mayor</strong> or Chairperson.</p>
          </div>

          <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
            <Activity size={16} className="inline mr-1" /> Conducted by the <strong>State Election Commission</strong>.
          </p>
          
          <div style={{ backgroundColor: 'rgba(19, 136, 8, 0.05)', padding: '0.75rem', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-green)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>
              <strong>Importance:</strong> Ensures local development such as roads, water supply, sanitation, and street lighting.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Presidential & Vice-Presidential',
      shortDesc: 'Indirect elections to elect the Head of State and the Vice-President.',
      icon: <Award size={40} />,
      details: (
        <div className="text-left mt-4 animate-fade-in" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <div className="mb-3">
            <h4 style={{ fontWeight: 600, color: 'var(--color-saffron)' }}>President:</h4>
            <ul className="flex flex-col gap-1 mt-1" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
              <li>• Elected by Electoral College (Elected MPs + MLAs).</li>
              <li>• Uses Proportional Representation & Single Transferable Vote.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 style={{ fontWeight: 600, color: 'var(--color-saffron)' }}>Vice-President:</h4>
            <ul className="flex flex-col gap-1 mt-1" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
              <li>• Elected by Members of Parliament (Lok Sabha + Rajya Sabha).</li>
              <li>• Role includes being the Chairman of Rajya Sabha.</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: 'rgba(19, 136, 8, 0.05)', padding: '0.75rem', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-green)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>
              <strong>System:</strong> This is an indirect election system where citizens don't vote directly, but their elected representatives do.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="types" className="section">
      <div className="container">
        <div className="text-center mb-10">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 153, 51, 0.1)', color: 'var(--color-saffron)', borderRadius: '2rem', fontWeight: 600, marginBottom: '1rem' }}>
            <Globe size={18} /> Demystifying the Structure
          </div>
          <h2 className="title">Types of Elections in India</h2>
          <p className="subtitle">From deciding the Prime Minister to choosing your local village head, understand the multi-tiered democratic exercises of India.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: '6rem', alignItems: 'flex-start' }}>
          {types.map((type, index) => (
            <div key={index} className="card glass flex flex-col items-center text-center" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }} onClick={() => toggleExpand(index)}>
              <div className="icon-wrapper" style={{ width: '4rem', height: '4rem', marginBottom: '1.5rem' }}>
                {type.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>
                {type.title}
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                {type.shortDesc}
              </p>
              
              <button 
                className="flex items-center gap-2" 
                style={{ background: 'none', border: 'none', color: 'var(--color-saffron)', fontWeight: 600, cursor: 'pointer', marginTop: 'auto' }}
              >
                {expanded === index ? 'Show Less' : 'Learn More'}
                {expanded === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {expanded === index && type.details}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="card glass" style={{ padding: '2rem', overflowX: 'auto', marginBottom: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-navy)', fontSize: '1.75rem' }}>
            Quick Comparison
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(19, 136, 8, 0.1)' }}>
                <th style={{ padding: '1.25rem', textAlign: 'left', borderBottom: '2px solid var(--color-green)' }}>Level</th>
                <th style={{ padding: '1.25rem', textAlign: 'left', borderBottom: '2px solid var(--color-green)' }}>Voters</th>
                <th style={{ padding: '1.25rem', textAlign: 'left', borderBottom: '2px solid var(--color-green)' }}>System</th>
                <th style={{ padding: '1.25rem', textAlign: 'left', borderBottom: '2px solid var(--color-green)' }}>Primary Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)', fontWeight: 600, color: 'var(--color-saffron)' }}>Lok Sabha (Central)</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>Citizens 18+</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>Direct Election</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>National laws, defense, finance</td>
              </tr>
              <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)', fontWeight: 600, color: 'var(--color-saffron)' }}>Vidhan Sabha (State)</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>Citizens 18+ (State)</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>Direct Election</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>State laws, health, education, police</td>
              </tr>
              <tr>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)', fontWeight: 600, color: 'var(--color-saffron)' }}>Local Bodies</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>Citizens 18+ (Local)</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>Direct Election</td>
                <td style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>Local infrastructure, water, sanitation</td>
              </tr>
              <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                <td style={{ padding: '1.25rem', fontWeight: 600, color: 'var(--color-saffron)' }}>Presidential</td>
                <td style={{ padding: '1.25rem' }}>Elected MPs & MLAs</td>
                <td style={{ padding: '1.25rem' }}>Indirect (PR with STV)</td>
                <td style={{ padding: '1.25rem' }}>Head of State, Constitutional duties</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary Box */}
        <div style={{ background: 'linear-gradient(135deg, var(--color-green), #0f6c06)', color: 'white', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white', fontWeight: 700 }}>Summary</h3>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', opacity: 0.95, lineHeight: 1.8 }}>
            India features a robust multi-tiered electoral system. You directly elect representatives for your local municipality/village, your state government, and the central government. In turn, these elected members indirectly elect the President and Vice-President, ensuring democratic representation at every level of the nation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ElectionTypes;
