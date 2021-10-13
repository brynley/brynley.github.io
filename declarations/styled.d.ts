import 'styled-components'

import { Colors } from '@styles/colors/colors.types'
import { Spacing } from '@styles/spacing/spacing.types'
import { Breakpoints } from '@styles/breakpoints/breakpoints.types'
import { Mixins } from '@styles/mixins/mixins.types'

export type ThemeNames = 'brandPink'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeNames
    colors: Colors
    spacing: Spacing
    breakpoints: Breakpoints
    mixins: Mixins
    globalStyles: GlobalStyleComponent<{}, DefaultTheme>
  }
}