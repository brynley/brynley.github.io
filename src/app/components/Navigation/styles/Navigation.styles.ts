import styled, { css } from 'styled-components'
import { NavLink as NavLinkDom } from 'react-router-dom'

export const Navigation = styled.nav((props) => css`
  display: flex;
  padding: 0 ${props.theme.spacing[8]}px;
  justify-content: space-between;
  background-color: ${props.theme.colors.primary};
  color: ${props.theme.colors.monochrome1};
`)

export const LogoWrapper = styled(NavLinkDom)((props) => css`
  width: ${props.theme.spacing[10]}px;
  height: ${props.theme.spacing[10]}px;
  margin: ${props.theme.spacing[2]}px 0;
`)

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
`

export const NavListItem = styled.li`
  height: 100%;
  text-decoration: none;
`

export const NavLink = styled(NavLinkDom)((props) => css`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 ${props.theme.spacing[6]}px;
  text-decoration: none;
  color: inherit;
  transform: skew(-15deg);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props.theme.colors.tertiary};
    transform: translateX(-101%);
    z-index: -1;
    transition: all 0.3s ease;
  }
  &:hover {
    &::before {
      transform: translateX(60%);
    }
  }
`)