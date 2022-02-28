import { IconNames } from '@assets/icons/icons.types'
import { ColorKeys } from '@styles/colors/colors.types'

export interface IconTypes {
  name: IconNames
  fill?: ColorKeys | 'none'
  stroke?: ColorKeys | 'none'
  className?: string
}