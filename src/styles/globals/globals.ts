import { createGlobalStyle, css } from 'styled-components'

import fonts from '@styles/fonts'

const globals = createGlobalStyle((props) => css`
  body {
    margin: 0;
    font-family: OpenSans, Arial, Helvetica, sans-serif;
    font-weight: 400;
    background-color: ${props.theme.colors.quaternary};
  }

  ${fonts}
`)

export default globals