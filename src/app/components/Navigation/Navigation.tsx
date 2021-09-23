import React, { PureComponent } from "react";

import Icon from '@components/Icon'

import * as Styled from './styles/Navigation.styles'
export default class Navigation extends PureComponent {
  render() {
    return (
      <Styled.Navigation>
        <Styled.LogoWrapper>
          <Icon name='logo' fill='monochrome1' />
        </Styled.LogoWrapper>
        <Styled.NavList>
          <Styled.NavListItem>
            <Styled.NavLink to="/">
              Home
            </Styled.NavLink>
          </Styled.NavListItem>
          <Styled.NavListItem>
            <Styled.NavLink to="/about">
              About
            </Styled.NavLink>
          </Styled.NavListItem>
          <Styled.NavListItem>
            <Styled.NavLink to="/sdfsdf">
              fake
            </Styled.NavLink>
          </Styled.NavListItem>
        </Styled.NavList>
      </Styled.Navigation>
    )
  }
}