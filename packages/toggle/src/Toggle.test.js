import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Toggle } from './Toggle';
describe('Toggle', () => {
    it('renders correctly', () => {
        render(_jsx(Toggle, {}));
        const toggle = screen.getByRole('switch');
        expect(toggle).toBeInTheDocument();
        expect(toggle).toHaveAttribute('aria-checked', 'false');
    });
    it('renders with checked state', () => {
        render(_jsx(Toggle, { checked: true }));
        const toggle = screen.getByRole('switch');
        expect(toggle).toHaveAttribute('aria-checked', 'true');
    });
    it('renders with disabled state', () => {
        render(_jsx(Toggle, {}));
        const toggle = screen.getByRole('switch');
        expect(toggle).toBeDisabled();
    });
    it('calls onChange when clicked', () => {
        const handleChange = vi.fn();
        render(_jsx(Toggle, { onChange: handleChange }));
        const toggle = screen.getByRole('switch');
        fireEvent.click(toggle);
        expect(handleChange).toHaveBeenCalledWith(true);
    });
    it('does not call onChange when disabled', () => {
        const handleChange = vi.fn();
        render(_jsx(Toggle, { onChange: handleChange }));
        const toggle = screen.getByRole('switch');
        fireEvent.click(toggle);
        expect(handleChange).not.toHaveBeenCalled();
    });
    it('applies correct size classes', () => {
        const { rerender } = render(_jsx(Toggle, { size: "md" }));
        let toggle = screen.getByRole('switch');
        expect(toggle).toHaveClass('w-8', 'h-4');
        rerender(_jsx(Toggle, { size: "md" }));
        toggle = screen.getByRole('switch');
        expect(toggle).toHaveClass('w-12', 'h-6');
        rerender(_jsx(Toggle, { size: "lg" }));
        toggle = screen.getByRole('switch');
        expect(toggle).toHaveClass('w-16', 'h-8');
    });
});
