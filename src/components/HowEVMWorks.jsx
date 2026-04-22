import React, { useState, useEffect } from 'react';
import { Cpu, Printer, ShieldCheck, CheckCircle2 } from 'lucide-react';

const HowEVMWorks = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showVvpat, setShowVvpat] = useState(false);
  const [vvpatSlip, setVvpatSlip] = useState(null);

  const candidates = [
    { id: 1, name: "Ankur Rai", party: "Development Party", symbol: "🌞" },
    { id: 2, name: "Sumit", party: "Progressive Alliance", symbol: "🌱" },
    { id: 3, name: "Jiya", party: "National Unity", symbol: "🕊️" },
    { id: 4, name: "NOTA", party: "None of the Above", symbol: "❌" }
  ];

  const handleVote = (candidate) => {
    if (hasVoted) return;
    
    setSelectedCandidate(candidate.id);
    setHasVoted(true);
    
    // Play a beep sound (using web audio api for a simple beep)
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // Beep pitch
      
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Volume
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      setTimeout(() => oscillator.stop(), 2000); // Long beep for EVM
    } catch (e) {
      console.log("Audio not supported");
    }

    // Trigger VVPAT
    setTimeout(() => {
      setVvpatSlip(candidate);
      setShowVvpat(true);
      
      // Hide VVPAT slip after 7 seconds
      setTimeout(() => {
        setShowVvpat(false);
      }, 7000);
    }, 500);
  };

  const resetSimulation = () => {
    setHasVoted(false);
    setSelectedCandidate(null);
    setShowVvpat(false);
    setVvpatSlip(null);
  };

  return (
    <section id="evm" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="title">How EVM Works</h2>
          <p className="subtitle">Understanding the Electronic Voting Machine and Voter Verifiable Paper Audit Trail (VVPAT).</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Explanation Section */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <div style={{ color: 'var(--color-saffron)', flexShrink: 0 }}>
                <Cpu size={40} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>The Ballot Unit (EVM)</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                  The EVM is a secure, standalone machine with no internet or Bluetooth connectivity. It displays the serial number, candidate name, party symbol, and a blue button to cast your vote.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ color: 'var(--color-green)', flexShrink: 0 }}>
                <Printer size={40} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>The VVPAT System</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                  When you press the blue button, the VVPAT machine prints a physical slip containing the serial number, name, and symbol of the candidate you voted for. It is visible through a transparent window for 7 seconds before dropping into a secure box.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ color: 'var(--color-navy)', flexShrink: 0 }}>
                <ShieldCheck size={40} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>Security & Verification</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                  A loud "BEEP" sound confirms your vote is recorded. The VVPAT slip acts as a physical verification of your electronic vote, ensuring complete transparency.
                </p>
              </div>
            </div>
            
            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,153,51,0.1)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-saffron)' }}>
              <p style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Interactive Simulation 👉</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Try the EVM simulator to experience how a vote is cast and verified.</p>
            </div>
          </div>

          {/* Interactive Simulation Section */}
          <div className="flex flex-col gap-6" style={{ background: '#f1f5f9', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
            <div className="text-center mb-2">
              <h3 style={{ color: '#334155', fontWeight: 700, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>EVM Simulator</h3>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: hasVoted ? '#22c55e' : '#ef4444', margin: '0.5rem auto 0', transition: 'background-color 0.3s' }}></div>
              <p style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.25rem' }}>{hasVoted ? 'READY FOR NEXT VOTER' : 'READY TO VOTE'}</p>
            </div>

            {/* The EVM Ballot Unit */}
            <div style={{ backgroundColor: 'var(--border-color)', border: '4px solid var(--text-light)', borderRadius: '8px', padding: '1rem', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}>
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex items-center gap-2 mb-3" style={{ backgroundColor: 'var(--card-bg)', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                  <div style={{ width: '30px', textAlign: 'center', fontWeight: 'bold', color: 'var(--text-light)' }}>{candidate.id}</div>
                  <div style={{ flex: 1, borderRight: '1px solid var(--border-color)', paddingRight: '0.5rem' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-color)' }}>{candidate.name}</div>
                  </div>
                  <div style={{ width: '50px', textAlign: 'center', fontSize: '1.5rem', borderRight: '1px solid var(--border-color)', paddingRight: '0.5rem' }}>
                    {candidate.symbol}
                  </div>
                  
                  {/* Red Light Indicator */}
                  <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: selectedCandidate === candidate.id ? '#ef4444' : '#94a3b8', margin: '0 0.5rem', boxShadow: selectedCandidate === candidate.id ? '0 0 8px #ef4444' : 'none', transition: 'background-color 0.1s' }}></div>
                  
                  {/* Blue Voting Button */}
                  <button 
                    onClick={() => handleVote(candidate)}
                    disabled={hasVoted}
                    style={{ 
                      width: '40px', 
                      height: '25px', 
                      backgroundColor: '#3b82f6', 
                      borderRadius: '12px', 
                      border: 'none', 
                      borderBottom: '4px solid #1d4ed8',
                      cursor: hasVoted ? 'not-allowed' : 'pointer',
                      transform: selectedCandidate === candidate.id ? 'translateY(4px)' : 'none',
                      borderBottomWidth: selectedCandidate === candidate.id ? '0px' : '4px',
                      opacity: hasVoted && selectedCandidate !== candidate.id ? 0.5 : 1
                    }}
                    aria-label={`Vote for ${candidate.name}`}
                  ></button>
                </div>
              ))}
            </div>

            {/* VVPAT Display Area */}
            <div style={{ height: '180px', backgroundColor: '#334155', borderRadius: '8px', padding: '1rem', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '4px solid #1e293b' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', position: 'absolute', top: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>VVPAT Window</div>
              
              {showVvpat && vvpatSlip ? (
                <div className="animate-fade-in" style={{ backgroundColor: '#fef08a', padding: '1rem', width: '80%', textAlign: 'center', fontFamily: 'monospace', color: 'black', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', border: '1px dashed #ca8a04' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{vvpatSlip.id}</div>
                  <div style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{vvpatSlip.symbol}</div>
                  <div style={{ fontWeight: 'bold' }}>{vvpatSlip.name}</div>
                </div>
              ) : hasVoted ? (
                <div className="flex flex-col items-center animate-fade-in" style={{ color: '#4ade80' }}>
                  <CheckCircle2 size={32} />
                  <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>Vote Recorded Securely</p>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Slip dropped in box</p>
                </div>
              ) : (
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Awaiting Vote...</div>
              )}
            </div>

            {hasVoted && !showVvpat && (
              <button 
                onClick={resetSimulation}
                className="btn btn-outline" 
                style={{ width: '100%', marginTop: '1rem' }}
              >
                Reset Simulator for Next Voter
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowEVMWorks;
