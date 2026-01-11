import 'styled-components';
import { Theme } from '@sapphire-ui/design-tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
