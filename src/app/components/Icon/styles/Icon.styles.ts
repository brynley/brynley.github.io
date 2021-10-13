import styled, { css, DefaultTheme } from 'styled-components'
import { ReactSVG } from 'react-svg'

import { IconStylesProps } from './Icon.styles.types'

function getStrokeAndFill(props: IconStylesProps) {
  let fillReturn
  let strokeReturn

  if (props.fill === 'none') fillReturn = css`
    fill: 'none';
  `

  if (props.stroke === 'none') strokeReturn = css`
    stroke: 'none';
  `


  return css`
  
  `
}

export const Icon = styled(ReactSVG)<IconStylesProps>((props) => css`
  position: relative;
  width: inherit;
  height: inherit;
  
  span {
    width: inherit;
    height: inherit;

    svg {
      width: inherit;
      height: inherit;
      fill: ${props.fill === 'none' ? 'none' : props.theme.colors[props.fill]};
      stroke: ${props.stroke === 'none' ? 'none' : props.theme.colors[props.stroke]};
    }
  }
`)