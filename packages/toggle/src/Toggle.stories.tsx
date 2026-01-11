import type { Meta, StoryObj } from '@storybook/react'
import { Toggle, ToggleProps } from './Toggle'

const meta: Meta<ToggleProps> = {
  title: 'Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['md', 'lg'],
    }
  },
}

export default meta
type Story = StoryObj<ToggleProps>

export const Default: Story = {
  args: {
    size: 'lg'
  },
}

