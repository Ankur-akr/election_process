import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import HowEVMWorks from '../components/HowEVMWorks';

// Mock IntersectionObserver which might be used by lucide-react or other components
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('HowEVMWorks Component (EVM Simulator)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    
    // Mock AudioContext for the beep sound
    window.AudioContext = vi.fn().mockImplementation(() => ({
      createOscillator: () => ({
        type: 'sine',
        frequency: { setValueAtTime: vi.fn() },
        connect: vi.fn(),
        start: vi.fn(),
        stop: vi.fn(),
      }),
      createGain: () => ({
        gain: { setValueAtTime: vi.fn() },
        connect: vi.fn(),
      }),
      currentTime: 0,
      destination: {},
    }));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders all candidates correctly', () => {
    render(<HowEVMWorks />);
    expect(screen.getByText('Ankur Rai')).toBeInTheDocument();
    expect(screen.getByText('Sumit')).toBeInTheDocument();
    expect(screen.getByText('Jiya')).toBeInTheDocument();
    expect(screen.getByText('NOTA')).toBeInTheDocument();
  });

  it('handles the full voting process with VVPAT simulation', async () => {
    render(<HowEVMWorks />);
    
    // Initial state: VVPAT slip is not showing
    expect(screen.queryByText('Vote Recorded Securely')).not.toBeInTheDocument();
    
    const voteButtons = screen.getAllByRole('button', { name: /Vote for/i });
    const voteJiyaBtn = screen.getByRole('button', { name: 'Vote for Jiya' });
    
    // Simulate user clicking the vote button for Jiya
    fireEvent.click(voteJiyaBtn);
    
    // All buttons should become disabled
    voteButtons.forEach(btn => {
      expect(btn).toBeDisabled();
    });

    // Advance timers by 500ms to trigger VVPAT show
    act(() => {
      vi.advanceTimersByTime(500);
    });
    
    // VVPAT slip should be visible now, showing Jiya's info
    expect(screen.getByText('🕊️')).toBeInTheDocument(); // Jiya's symbol
    expect(screen.getByText('3')).toBeInTheDocument(); // Jiya's ID
    
    // Advance timers by 7000ms to trigger VVPAT hide
    act(() => {
      vi.advanceTimersByTime(7000);
    });
    
    // VVPAT slip should disappear and show "Vote Recorded Securely"
    expect(screen.getByText('Vote Recorded Securely')).toBeInTheDocument();
    
    // Reset Simulator
    const resetBtn = screen.getByRole('button', { name: /Reset Simulator/i });
    fireEvent.click(resetBtn);
    
    // Buttons should be enabled again
    voteButtons.forEach(btn => {
      expect(btn).not.toBeDisabled();
    });
  });
});
