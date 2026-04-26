import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessTimeline from './components/ProcessTimeline';
import ElectionTypes from './components/ElectionTypes';
import HowEVMWorks from './components/HowEVMWorks';
import ImportanceOfVoting from './components/ImportanceOfVoting';
import InteractiveSection from './components/InteractiveSection';
import VoterPledge from './components/VoterPledge';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProcessTimeline />
        <ElectionTypes />
        <HowEVMWorks />
        <ImportanceOfVoting />
        <InteractiveSection />
        <VoterPledge />
      </main>
      <Footer />
    </>
  );
}

export default App;
