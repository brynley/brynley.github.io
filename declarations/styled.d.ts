import 'styled-components'

import { Spacing } from '@styles/spacing/spacing.types'
import { Colors } from '@styles/colors/colors.types'

export type ThemeNames = 'brandPink'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeNames
    colors: Colors
    spacing: Spacing
    globalStyles: GlobalStyleComponent<{}, DefaultTheme>
  }
}