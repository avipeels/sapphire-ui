# @sapphire-ui/toggle

A customizable toggle component for React applications.

## Installation

```bash
npm install @sapphire-ui/toggle
```

## Usage

```tsx
import { Toggle } from '@sapphire-ui/toggle'

function App() {
  const [checked, setChecked] = useState(false)

  return (
    <Toggle
      checked={checked}
      onChange={setChecked}
      size="md"
      variant="default"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the toggle is checked |
| `disabled` | `boolean` | `false` | Whether the toggle is disabled |
| `onChange` | `(checked: boolean) => void` | `undefined` | Callback when toggle state changes |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the toggle |
| `variant` | `'default' \| 'primary' \| 'secondary'` | `'default'` | Color variant of the toggle |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the component
npm run build

# Run tests
npm run test

# Start Storybook
npm run storybook
```
