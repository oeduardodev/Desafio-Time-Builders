import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

declare module 'aos';


type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
