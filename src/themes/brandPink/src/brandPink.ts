import { DefaultTheme } from 'styled-components'

import spacing from '@styles/spacing'
import breakpoints from '@styles/breakpoints'
import globals from '@styles/globals'

const brandPink: DefaultTheme = {
  name: 'brandPink',
  colors: {
    primary: '#FB2C66',
    secondary: '#C92352',
    tertiary: '#FA8FB0',
    quaternary: '#FFF5F9',
    monochrome1: '#FFFFFF',
    monochrome2: '#F2F2F2',
    monochrome3: '#B3B3B3',
    monochrome4: '#666666',
    monochrome5: '#000000'
  },
  spacing,
  breakpoints,
  globalStyles: globals,
}

export default brandPink
