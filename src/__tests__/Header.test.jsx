import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Header from '../components/Header';

describe('Header Component', () => {
  beforeEach(() => {
    // Mock matchMedia
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
    
    // Clear localStorage
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('renders correctly with logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByText('IndiaVotes')).toBeInTheDocument();
    expect(screen.getByText('EVM Simulator')).toBeInTheDocument();
  });

  it('toggles dark mode when button is clicked', () => {
    render(<Header />);
    
    // Initially light mode
    expect(document.documentElement.getAttribute('data-theme')).toBeNull();
    
    // The component has two toggle buttons (desktop and mobile), let's click the first one
    const toggleBtns = screen.getAllByLabelText('Toggle Dark Mode');
    fireEvent.click(toggleBtns[0]);
    
    // Should be dark mode
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    
    // Click again
    fireEvent.click(toggleBtns[0]);
    
    // Should be light mode again
    expect(document.documentElement.getAttribute('data-theme')).toBeNull();
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
