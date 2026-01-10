import React from 'react'

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

  const sizeClasses = {
    sm: 'w-8 h-4',
    md: 'w-12 h-6',
    lg: 'w-16 h-8'
  }

  const variantClasses = {
    default: isChecked ? 'bg-blue-600' : 'bg-gray-300',
    primary: isChecked ? 'bg-green-600' : 'bg-gray-300',
    secondary: isChecked ? 'bg-purple-600' : 'bg-gray-300'
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        relative inline-flex flex-shrink-0 cursor-pointer rounded-full
        border-2 border-transparent transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <span
        className={`
          pointer-events-none inline-block h-full w-full rounded-full
          bg-white shadow transform ring-0 transition duration-200 ease-in-out
          ${isChecked ? 'translate-x-full' : 'translate-x-0'}
        `}
        style={{
          width: size === 'sm' ? '16px' : size === 'md' ? '24px' : '32px',
          height: size === 'sm' ? '16px' : size === 'md' ? '24px' : '32px',
          transform: isChecked 
            ? size === 'sm' ? 'translateX(16px)' : size === 'md' ? 'translateX(24px)' : 'translateX(32px)'
            : 'translateX(0)'
        }}
      />
    </button>
  )
}

export default Toggle
