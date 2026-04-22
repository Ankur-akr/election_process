import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';

const InteractiveSection = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const quizQuestions = [
    {
      question: "What is the minimum voting age in India?",
      options: ["16 Years", "18 Years", "21 Years", "25 Years"],
      answer: 1
    },
    {
      question: "Who conducts the Lok Sabha Elections in India?",
      options: ["State Government", "President of India", "Election Commission of India", "Supreme Court"],
      answer: 2
    },
    {
      question: "What does EVM stand for?",
      options: ["Electronic Voting Machine", "Election Voting Method", "Electronic Voter Module", "Electoral Verification Machine"],
      answer: 0
    }
  ];

  const faqs = [
    { q: "How can I register to vote?", a: "You can register online through the National Voters' Service Portal (NVSP) or by filling Form 6 offline." },
    { q: "What documents are required to vote?", a: "You need a Voter ID card (EPIC). Alternatively, you can use Aadhaar, Passport, Driving License, or PAN Card if your name is on the electoral roll." },
    { q: "Can I vote from anywhere in India?", a: "No, you must vote at the specific polling booth designated for the constituency where you are registered." }
  ];

  const myths = [
    { myth: "My single vote doesn't make a difference.", fact: "Many elections have been decided by a margin of just one or a handful of votes. Every vote counts." },
    { myth: "EVMs can be easily hacked.", fact: "Indian EVMs are standalone machines, not connected to any network (internet or bluetooth), making remote hacking impossible." }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    const correct = index === quizQuestions[currentQuiz].answer;
    setIsAnswerCorrect(correct);
    
    if (correct) setScore(score + 1);

    setTimeout(() => {
      if (currentQuiz < quizQuestions.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
  };

  return (
    <section id="interactive" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Interactive Learning</h2>
          <p className="subtitle">Test your knowledge and clear your doubts about the election process.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          
          {/* Quiz Section */}
          <div className="card glass">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HelpCircle /> Quick Quiz
            </h3>

            {!showResult ? (
              <div>
                <p style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem' }}>
                  Question {currentQuiz + 1} of {quizQuestions.length}:<br />
                  {quizQuestions[currentQuiz].question}
                </p>
                <div className="flex flex-col gap-3">
                  {quizQuestions[currentQuiz].options.map((option, index) => {
                    let bgColor = 'var(--bg-color)';
                    let borderColor = 'var(--border-color)';
                    
                    if (selectedAnswer !== null) {
                      if (index === quizQuestions[currentQuiz].answer) {
                        bgColor = 'rgba(19, 136, 8, 0.2)';
                        borderColor = 'var(--color-green)';
                      } else if (index === selectedAnswer && !isAnswerCorrect) {
                        bgColor = 'rgba(255, 0, 0, 0.1)';
                        borderColor = 'red';
                      }
                    }

                    return (
                      <button 
                        key={index}
                        disabled={selectedAnswer !== null}
                        onClick={() => handleAnswer(index)}
                        style={{
                          padding: '1rem',
                          textAlign: 'left',
                          borderRadius: 'var(--radius-md)',
                          border: `1px solid ${borderColor}`,
                          backgroundColor: bgColor,
                          cursor: selectedAnswer !== null ? 'default' : 'pointer',
                          transition: 'all 0.2s',
                          color: 'var(--text-color)'
                        }}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <TrophyIcon size={64} style={{ color: 'var(--color-saffron)', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quiz Completed!</h4>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>You scored {score} out of {quizQuestions.length}</p>
                <button onClick={resetQuiz} className="btn btn-primary">Try Again</button>
              </div>
            )}
          </div>

          {/* FAQ & Myths Section */}
          <div className="flex flex-col gap-6">
            <div className="card glass">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>
                Frequently Asked Questions
              </h3>
              <div className="flex flex-col gap-2">
                {faqs.map((faq, index) => (
                  <div key={index} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    <button 
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      style={{ width: '100%', textAlign: 'left', padding: '0.5rem 0', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer', color: 'var(--text-color)', display: 'flex', justifyContent: 'space-between' }}
                    >
                      {faq.q}
                      <span>{activeFaq === index ? '-' : '+'}</span>
                    </button>
                    {activeFaq === index && (
                      <p style={{ color: 'var(--text-light)', padding: '0.5rem 0', fontSize: '0.95rem' }}>{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="card glass">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>
                Myth vs Fact
              </h3>
              <div className="flex flex-col gap-4">
                {myths.map((m, index) => (
                  <div key={index} style={{ backgroundColor: 'rgba(255, 153, 51, 0.05)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-saffron)' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <XCircle size={18} color="red" /> Myth: {m.myth}
                    </p>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={18} color="var(--color-green)" /> Fact: {m.fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Extracted simple Trophy component since I forgot to import it
const TrophyIcon = ({ size, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

export default InteractiveSection;
