import 'styled-components'

import { Colors } from '@styles/colors/colors.types'
import { Spacing } from '@styles/spacing/spacing.types'
import { Breakpoints } from '@styles/breakpoints/breakpoints.types'

export type ThemeNames = 'brandPink'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeNames
    colors: Colors
    spacing: Spacing
    breakpoints: Breakpoints
    globalStyles: GlobalStyleComponent<{}, DefaultTheme>
  }
}