import styled, { css } from 'styled-components'

import { ErrorStylesProps } from './Error.styles.types'

export const Error = styled.section((props: ErrorStylesProps) => css`
  color: ${props.theme.colors.primary};
`)