import { FlattenSimpleInterpolation, css } from 'styled-components'

import breakpoints from '@styles/breakpoints'

function tablet(styles: FlattenSimpleInterpolation) {
  return css`
    @media (min-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `
}

function laptop(styles: FlattenSimpleInterpolation) {
  return css`
    @media (min-width: ${breakpoints.laptop}) {
      ${styles}
    }
  `
}

function desktop(styles: FlattenSimpleInterpolation) {
  return css`
    @media (min-width: ${breakpoints.desktop}) {
      ${styles}
    }
  `
}

export default { tablet, laptop, desktop }