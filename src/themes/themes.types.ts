import { Spacing } from '../styles/spacing/spacing.types'
import { Colors } from '../styles/colors/colors.types'

export type ThemeNames = 'brandPink'

export abstract class Theme {
  public abstract name: ThemeNames
  public colors: Colors
  public spacing: Spacing
}