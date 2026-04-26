import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';

describe('App Component', () => {
  beforeEach(() => {
    // Mock matchMedia for Header
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    // Mock IntersectionObserver
    window.IntersectionObserver = vi.fn().mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });

    // Mock window.scrollTo
    window.scrollTo = vi.fn();
  });

  it('renders the application correctly without crashing', () => {
    render(<App />);
    // Check for Header
    expect(screen.getByText('IndiaVotes')).toBeInTheDocument();
    
    // Check for sections by their headings or content
    expect(screen.getByText('The World\'s Largest Democratic Exercise')).toBeInTheDocument(); // Hero
    expect(screen.getByText('Election Process Timeline')).toBeInTheDocument(); // ProcessTimeline
    expect(screen.getByText('Types of Elections in India')).toBeInTheDocument(); // ElectionTypes
    expect(screen.getByText('How EVM Works')).toBeInTheDocument(); // HowEVMWorks
    expect(screen.getByText('Why Your Vote Matters')).toBeInTheDocument(); // ImportanceOfVoting
    expect(screen.getByText('Interactive Learning')).toBeInTheDocument(); // InteractiveSection
  });
});
