import spacing from '@styles/spacing'
import globals from '@styles/globals'

import { Theme, ThemeNames } from '@themes/themes.types'

class BrandPink implements Theme {
  public name = 'brandPink' as ThemeNames

  public colors = {
    primary: '#FB2C66',
    secondary: '#C92352',
    tertiary: '#FFF5F9',
    monochrome1: '#FFFFFF',
    monochrome2: '#F2F2F2',
    monochrome3: '#B3B3B3',
    monochrome4: '#666666',
    monochrome5: '#000000'
  }

  public spacing = spacing

  public globalStyles = globals
}

export default new BrandPink()
