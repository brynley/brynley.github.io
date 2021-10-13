import React from 'react'

import * as Styled from './styles/Icon.styles'

import { IconTypes } from './Icon.types'


const Icon = ({name, fill = 'monochrome4', stroke = 'none'}: IconTypes) => {
  return (
    <Styled.Icon className={`${name}IconWrapper`} fill={fill!} stroke={stroke!} src={`assets/icons/${name}.svg`} wrapper='span' />
  )
}

export default Icon