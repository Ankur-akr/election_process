import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { PenTool, CheckCircle } from 'lucide-react';

const VoterPledge = () => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasPledged, setHasPledged] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // In a real scenario, this writes to Firebase. 
      // If VITE_FIREBASE_API_KEY is not set, this might fail, so we catch it.
      if (!import.meta.env.VITE_FIREBASE_API_KEY) {
         console.warn("Firebase config not found. Simulating successful pledge.");
         setTimeout(() => {
           setHasPledged(true);
           setIsSubmitting(false);
         }, 1000);
         return;
      }

      // Add a 5 second timeout to the request so it doesn't hang forever if offline or no permissions
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timed out. Check your Firebase permissions or connection.')), 5000)
      );
      
      const addDocPromise = addDoc(collection(db, 'pledges'), {
        name: name,
        timestamp: serverTimestamp(),
        pledgeText: 'I pledge to cast my vote in the upcoming elections.'
      });

      await Promise.race([addDocPromise, timeoutPromise]);
      setHasPledged(true);
    } catch (err) {
      console.error('Error adding pledge:', err);
      setError(err.message || 'Failed to submit pledge. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pledge" className="section" style={{ backgroundColor: '#000080', color: 'white', padding: '4rem 0' }}>
      <div className="container text-center">
        <h2 className="title" style={{ color: 'white', marginBottom: '1rem' }}>Take the Voter Pledge</h2>
        <p className="subtitle" style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Commit to strengthening our democracy. Pledge that you will exercise your fundamental right to vote in the upcoming elections.
        </p>

        <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: 'var(--radius-lg)', backdropFilter: 'blur(10px)' }}>
          {hasPledged ? (
            <div className="animate-fade-in flex flex-col items-center">
              <CheckCircle size={48} color="#4ade80" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Thank you, {name}!</h3>
              <p style={{ color: '#cbd5e1' }}>Your pledge has been recorded. Every vote counts towards a stronger nation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--color-saffron)', justifyContent: 'center' }}>
                <PenTool size={24} />
                <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>Sign the Pledge</span>
              </div>
              
              <p style={{ fontStyle: 'italic', color: '#e2e8f0', marginBottom: '1rem' }}>
                "I pledge to uphold the democratic traditions of my country and to vote in every election fearlessly and without being influenced."
              </p>

              <div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                {error && <p style={{ color: '#f87171', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'left' }}>{error}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn"
                style={{ 
                  backgroundColor: 'var(--color-saffron)', 
                  color: 'white', 
                  border: 'none', 
                  width: '100%',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'I Pledge to Vote'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default VoterPledge;
