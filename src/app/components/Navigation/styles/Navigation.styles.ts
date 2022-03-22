import styled, { css } from 'styled-components'
import { NavLink as NavLinkDom } from 'react-router-dom'

export const Navigation = styled.div((props) => css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 ${props.theme.spacing[8]}px;
  background-color: ${props.theme.colors.primary};
  color: ${props.theme.colors.monochrome1};
  box-sizing: border-box;
`)

export const NavigationWrapper = styled.div((props) => css`
  justify-content: space-between;
  display: flex;
  max-width: ${props.theme.breakpoints.desktop}px;
  margin: 0 auto;
  box-sizing: border-box;
`)

export const LogoWrapper = styled(NavLinkDom)((props) => css`
  width: ${props.theme.spacing[10]}px;
  height: ${props.theme.spacing[10]}px;
  margin: ${props.theme.spacing[2]}px 0;
`)

export const Nav = styled.nav((props) => css`
  padding: 0 ${props.theme.spacing[3]}px;
  box-sizing: border-box;
`)

export const NavList = styled.ul((props) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  list-style: none;
  font-weight: 700;
  text-transform: uppercase;
  color: inherit;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`)

export const NavListItem = styled.li((props) => css`
  text-decoration: none;
  margin-right: ${props.theme.spacing[20]}px;

  &:last-child {
    margin-right: 0;
  }
`)

export const NavLink = styled(NavLinkDom)((props) => css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  height: 100%;
`)