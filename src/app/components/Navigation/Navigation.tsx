import React, { PureComponent } from "react"

import Icon from '@components/Icon'

import navItems from './constants/navItems'

import * as Styled from './styles/Navigation.styles'
export default class Navigation extends PureComponent {
  render() {
    return (
      <Styled.Navigation>
        <Styled.LogoWrapper to="/">
          <Icon name='logo' fill='monochrome1' />
        </Styled.LogoWrapper>
        <Styled.NavList>
          {navItems.map((navItem) => {
            return (
              <Styled.NavListItem>
                <Styled.NavLink to={navItem.to}>
                  {navItem.text}
                </Styled.NavLink>
              </Styled.NavListItem>
            )
          })}
        </Styled.NavList>
      </Styled.Navigation>
    )
  }
}