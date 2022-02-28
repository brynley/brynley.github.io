import React from 'react'

import * as Styled from './styles/Icon.styles'

import { IconTypes } from './Icon.types'


const Icon = ({name, fill = 'monochrome4', stroke = 'none', className}: IconTypes) => {
  return (
    <Styled.Icon className={`${name}IconWrapper ${className}`} fill={fill!} stroke={stroke!} src={`assets/icons/${name}.svg`} wrapper='span' />
  )
}

export default Icon