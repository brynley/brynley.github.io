import styled, { css } from 'styled-components'
import { ReactSVG } from 'react-svg'

import { IconStylesProps } from './Icon.styles.types'

export const Icon = styled(ReactSVG)((props: IconStylesProps) => css`
  position: relative;
  width: inherit;
  height: inherit;
  
  span {
    width: inherit;
    height: inherit;

    svg {
      width: inherit;
      height: inherit;
      fill: ${props.fill ? props.theme.colors[props.fill] : props.theme.colors.monochrome4};
    }
  }
`)