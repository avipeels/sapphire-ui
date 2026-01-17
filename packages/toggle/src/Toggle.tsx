import React from 'react'
import { theme } from '@sapphire-ui/design-tokens'
import { ThemeProvider } from 'styled-components'
import { StyledToggle, Toggler } from './Toggle.styles'

export interface ToggleProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  size?: string
  variant?: 'default'
}

export const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  onChange,
  size = 'md',
}) => {
  const [isChecked, setIsChecked] = React.useState(checked)

  const handleToggle = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange?.(newChecked)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledToggle
        size={size}
        onClick={handleToggle}
      >
        <Toggler size={size} checked={isChecked}></Toggler>
      </StyledToggle>
    </ThemeProvider>
  )
}

export default Toggle
