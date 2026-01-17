import 'styled-components'
import { Theme } from '@sapphireui/design-tokens'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
