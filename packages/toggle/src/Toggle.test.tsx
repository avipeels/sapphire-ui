import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-checked', 'false')
  })

  it('renders with checked state', () => {
    render(<Toggle checked={true} />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toHaveAttribute('aria-checked', 'true')
  })

  it('renders with disabled state', () => {
    render(<Toggle disabled={true} />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toBeDisabled()
  })

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn()
    render(<Toggle onChange={handleChange} />)
    const toggle = screen.getByRole('switch')
    
    fireEvent.click(toggle)
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn()
    render(<Toggle disabled={true} onChange={handleChange} />)
    const toggle = screen.getByRole('switch')
    
    fireEvent.click(toggle)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies correct size classes', () => {
    const { rerender } = render(<Toggle size="sm" />)
    let toggle = screen.getByRole('switch')
    expect(toggle).toHaveClass('w-8', 'h-4')

    rerender(<Toggle size="md" />)
    toggle = screen.getByRole('switch')
    expect(toggle).toHaveClass('w-12', 'h-6')

    rerender(<Toggle size="lg" />)
    toggle = screen.getByRole('switch')
    expect(toggle).toHaveClass('w-16', 'h-8')
  })

  it('applies correct variant classes', () => {
    const { rerender } = render(<Toggle variant="default" checked={true} />)
    let toggle = screen.getByRole('switch')
    expect(toggle).toHaveClass('bg-blue-600')

    rerender(<Toggle variant="primary" checked={true} />)
    toggle = screen.getByRole('switch')
    expect(toggle).toHaveClass('bg-green-600')

    rerender(<Toggle variant="secondary" checked={true} />)
    toggle = screen.getByRole('switch')
    expect(toggle).toHaveClass('bg-purple-600')
  })
})
