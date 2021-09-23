import styled, { css } from 'styled-components'
import { NavLink as NavLinkDom } from 'react-router-dom'

import { NavigationStylesProps } from './Navigation.styles.types'

export const Navigation = styled.nav((props: NavigationStylesProps) => css`
  display: flex;
  padding: ${props.theme.spacing[4]}px ${props.theme.spacing[3]}px;
  justify-content: space-between;
  background-color: ${props.theme.colors.primary};
  color: ${props.theme.colors.monochrome1};
`)

export const LogoWrapper = styled.span((props: NavigationStylesProps) => css`
  width: ${props.theme.spacing[10]}px;
  height: ${props.theme.spacing[10]}px;
`)

export const NavList = styled.ul((props: NavigationStylesProps) => css`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
`)

export const NavListItem = styled.li((props: NavigationStylesProps) => css`
  text-decoration: none;
  margin-right: ${props.theme.spacing[4]}px;

  &:last-child {
    margin-right: 0;
  }
`)

export const NavLink = styled(NavLinkDom)((props: NavigationStylesProps) => css`
  text-decoration: none;
  color: inherit;
`)