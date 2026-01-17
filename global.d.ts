import { Theme } from '@sapphireui/design-tokens';

// Global theme augmentation for styled-components across the entire Sapphire UI project
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export {};
