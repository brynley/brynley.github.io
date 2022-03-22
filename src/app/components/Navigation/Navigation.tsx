import React from "react"

import Icon from '@components/Icon'

import navItems from './constants/navItems'

import * as Styled from './styles/Navigation.styles'

const Navigation = () => {
  function handleMenuClick() {
    console.log('open menu')
  }

  return (
    <Styled.Navigation>
      <Styled.NavigationWrapper>
        <Styled.LogoWrapper to="/">
          <Icon name='logo' fill='monochrome1' />
        </Styled.LogoWrapper>
        <Styled.Nav>
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
        </Styled.Nav>
      </Styled.NavigationWrapper>
    </Styled.Navigation>
  )
}

export default Navigation
