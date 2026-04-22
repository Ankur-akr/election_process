import React from 'react';
import { Landmark, MapPin, Building, Award } from 'lucide-react';

const ElectionTypes = () => {
  const types = [
    {
      title: 'General Elections (Lok Sabha)',
      description: 'Members of Parliament (MPs) are elected to the Lok Sabha. The leader of the majority party becomes the Prime Minister.',
      icon: <Landmark size={32} />
    },
    {
      title: 'State Assembly (Vidhan Sabha)',
      description: 'Members of Legislative Assembly (MLAs) are elected for the state. The leader of the majority party becomes the Chief Minister.',
      icon: <MapPin size={32} />
    },
    {
      title: 'Local Body Elections',
      description: 'Elections for Panchayats (villages) and Municipalities (cities) to manage local administration.',
      icon: <Building size={32} />
    },
    {
      title: 'Presidential & Vice-Presidential',
      description: 'Indirect elections where elected MPs and MLAs vote to elect the President and Vice-President of India.',
      icon: <Award size={32} />
    }
  ];

  return (
    <section id="types" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Types of Elections</h2>
          <p className="subtitle">Understanding the different levels of democratic exercises in India.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {types.map((type, index) => (
            <div key={index} className="card glass text-center">
              <div className="icon-wrapper">
                {type.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>
                {type.title}
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="card" style={{ padding: '2rem', overflowX: 'auto' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-saffron)', fontSize: '1.5rem' }}>
            Quick Comparison
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(19, 136, 8, 0.1)' }}>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--color-green)' }}>Type</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--color-green)' }}>Purpose</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--color-green)' }}>Voters</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--color-green)' }}>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: 600 }}>Lok Sabha</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Elect MPs (Central Govt)</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Citizens 18+</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>5 Years</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--bg-color)' }}>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: 600 }}>Vidhan Sabha</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Elect MLAs (State Govt)</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Citizens 18+ (State)</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>5 Years</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: 600 }}>Local Bodies</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Local Administration</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Citizens 18+ (Local)</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>5 Years</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--bg-color)' }}>
                <td style={{ padding: '1rem', fontWeight: 600 }}>Presidential</td>
                <td style={{ padding: '1rem' }}>Head of State</td>
                <td style={{ padding: '1rem' }}>Elected MPs & MLAs</td>
                <td style={{ padding: '1rem' }}>5 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ElectionTypes;
