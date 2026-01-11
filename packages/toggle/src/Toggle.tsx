import React from 'react'
import { theme } from '@sapphire-ui/design-tokens'
import { ThemeProvider } from 'styled-components'
import { StyledToggle } from './Toggle.styles'

export interface ToggleProps {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  size?: 'sm' | 'lg'
  variant?: 'default'
}

export const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  disabled = false,
  onChange,
  size = 'sm'
}) => {
  const [isChecked, setIsChecked] = React.useState(checked)

  const handleToggle = () => {
    if (disabled) return
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange?.(newChecked)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledToggle
        size={size}
        onClick={handleToggle}
      >toggle</StyledToggle>
    </ThemeProvider>
  )
}

export default Toggle
