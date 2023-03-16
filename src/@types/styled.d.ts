import "styled-components"
import { dark } from "../styles/themes/darkTheme"

type ThemeType = typeof dark 

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{}
}


