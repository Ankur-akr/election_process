import React, { useEffect, useRef } from 'react';
import { Megaphone, Map, Users, FileSignature, Search, UserMinus, Mic, Inbox, Calculator, Trophy, Building2 } from 'lucide-react';

const ProcessTimeline = () => {
  const timelineData = [
    { id: 1, title: 'Announcement of Elections', description: 'The Election Commission announces the schedule, dates, and phases of the elections.', icon: <Megaphone size={24} /> },
    { id: 2, title: 'Delimitation of Constituencies', description: 'Dividing the entire country/state into constituencies based on population.', icon: <Map size={24} /> },
    { id: 3, title: 'Preparation of Electoral Roll', description: 'Updating the voter list by including new eligible voters and removing ineligible ones.', icon: <Users size={24} /> },
    { id: 4, title: 'Filing of Nominations', description: 'Candidates submit their nomination papers and required affidavits to the returning officer.', icon: <FileSignature size={24} /> },
    { id: 5, title: 'Scrutiny of Nominations', description: 'Verification of the submitted documents by the returning officer.', icon: <Search size={24} /> },
    { id: 6, title: 'Withdrawal of Candidates', description: 'Candidates are given a specific window to withdraw their nominations if they wish.', icon: <UserMinus size={24} /> },
    { id: 7, title: 'Election Campaign', description: 'Political parties and candidates campaign to present their manifestos to the voters.', icon: <Mic size={24} /> },
    { id: 8, title: 'Polling', description: 'Voters cast their vote securely using EVMs and VVPAT machines.', icon: <Inbox size={24} /> },
    { id: 9, title: 'Counting of Votes', description: 'EVMs are opened, and votes are counted under the supervision of the Election Commission.', icon: <Calculator size={24} /> },
    { id: 10, title: 'Declaration of Results', description: 'The candidate with the highest number of valid votes in a constituency is declared the winner.', icon: <Trophy size={24} /> },
    { id: 11, title: 'Formation of Government', description: 'The party or coalition with a majority forms the government.', icon: <Building2 size={24} /> },
  ];

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="title">The Election Process</h2>
          <p className="subtitle">Step-by-step guide to how elections are conducted in India.</p>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '100%', backgroundColor: 'rgba(255, 153, 51, 0.2)', borderRadius: '2px', top: 0 }}></div>

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className="timeline-item" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '3rem', 
                flexDirection: isEven ? 'row' : 'row-reverse',
                position: 'relative',
                opacity: 0,
                transform: `translateX(${isEven ? '-50px' : '50px'})`,
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}>
                
                {/* Content Box */}
                <div style={{ width: '45%', textAlign: isEven ? 'right' : 'left' }}>
                  <div className="card glass" style={{ padding: '1.5rem', display: 'inline-block', width: '100%' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-saffron)' }}>
                      Step {item.id}: {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  backgroundColor: 'var(--color-saffron)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: 'var(--shadow-md)',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}>
                  {item.icon}
                </div>

                {/* Empty Space for alignment */}
                <div style={{ width: '45%' }}></div>
              </div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .timeline-item.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column !important;
            text-align: center !important;
            transform: translateY(30px) !important;
          }
          .timeline-item > div:first-child {
            width: 100% !important;
            text-align: center !important;
            margin-top: 4rem;
          }
        }
      `}} />
    </section>
  );
};

export default ProcessTimeline;
