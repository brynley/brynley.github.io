import { createGlobalStyle, css } from 'styled-components'

import fonts from '@styles/fonts'

import { Theme } from '@themes/themes.types'

const globals = createGlobalStyle(() => css`
  body {
    margin: 0;
    font-family: OpenSans, Arial, Helvetica, sans-serif;
  }

  ${fonts}
`)

export default globals