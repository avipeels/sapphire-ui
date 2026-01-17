import { Toggle } from './Toggle';
const meta = {
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
};
export default meta;
export const Default = {
    args: {
        size: 'lg'
    },
};
