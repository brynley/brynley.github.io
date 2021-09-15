import styled, { css } from 'styled-components'

import { ErrorStyleProps } from './Error.style.types'

export const Error = styled.section((props: ErrorStyleProps) => css`
  color: ${props.theme.colors.primary};
`)