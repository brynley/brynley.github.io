import React from 'react'

import * as Styled from './styles/Icon.styles'

import { IconTypes } from './Icon.types'


const Icon = ({name, fill}: IconTypes) => {
  return (
    <Styled.Icon fill={fill} src={`assets/icons/${name}.svg`} wrapper='span' />
  )
}

export default Icon