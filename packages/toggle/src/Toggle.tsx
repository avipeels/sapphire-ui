import React from 'react'
import { 
  spacing, 
  borderRadius, 
  backgroundColors, 
  animations 
} from '@sapphire-ui/design-tokens'

export interface ToggleProps {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'primary' | 'secondary'
}

export const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  disabled = false,
  onChange,
  size = 'md',
  variant = 'default'
}) => {
  const [isChecked, setIsChecked] = React.useState(checked)

  const handleToggle = () => {
    if (disabled) return
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange?.(newChecked)
  }

  const sizeStyles = {
    sm: { 
      width: spacing[8], // 32px
      height: spacing[4], // 16px
      thumbSize: spacing[4], // 16px
      thumbTranslate: spacing[4] // 16px
    },
    md: { 
      width: spacing[12], // 48px
      height: spacing[6], // 24px
      thumbSize: spacing[6], // 24px
      thumbTranslate: spacing[6] // 24px
    },
    lg: { 
      width: spacing[16], // 64px
      height: spacing[8], // 32px
      thumbSize: spacing[8], // 32px
      thumbTranslate: spacing[8] // 32px
    }
  }

  const variantStyles = {
    default: isChecked ? backgroundColors.brandPrimary : backgroundColors.secondary,
    primary: isChecked ? backgroundColors.successSubtle : backgroundColors.secondary,
    secondary: isChecked ? backgroundColors.brandSubtle : backgroundColors.secondary
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      style={{
        width: sizeStyles[size].width,
        height: sizeStyles[size].height,
        backgroundColor: variantStyles[variant],
        borderRadius: borderRadius.full,
        transition: `background-color ${animations.duration[200]} ${animations.easing.easeInOut}`,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translateX(${isChecked ? sizeStyles[size].thumbTranslate : '0'})`,
          width: sizeStyles[size].thumbSize,
          height: sizeStyles[size].thumbSize,
          backgroundColor: backgroundColors.primary,
          borderRadius: borderRadius.full,
          transition: `transform ${animations.duration[200]} ${animations.easing.easeInOut}`,
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      />
    </button>
  )
}

export default Toggle
