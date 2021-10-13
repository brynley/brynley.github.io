import { FlattenSimpleInterpolation, css } from 'styled-components'

import breakpoints from '@styles/breakpoints'

const tablet = (styles: FlattenSimpleInterpolation) => css`
  @media (min-width: ${breakpoints.tablet}px) {
    ${styles}
  }
`

const laptop = (styles: FlattenSimpleInterpolation) => css`
  @media (min-width: ${breakpoints.laptop}px) {
    ${styles}
  }
`

const desktop = (styles: FlattenSimpleInterpolation) => css`
  @media (min-width: ${breakpoints.desktop}px) {
    ${styles}
  }
`

export default { tablet, laptop, desktop }