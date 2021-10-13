import styled, { css } from 'styled-components'
import { NavLink as NavLinkDom } from 'react-router-dom'

export const Navigation = styled.div((props) => css`
  display: flex;
  align-items: center;
  padding: 0 ${props.theme.spacing[8]}px;
  justify-content: center;
  background-color: ${props.theme.colors.primary};
  color: ${props.theme.colors.monochrome1};

  ${props.theme.mixins.mediaQueries.laptop(css`
    align-items: initial;
    justify-content: space-between;
  `)};
`)

export const LogoWrapper = styled(NavLinkDom)((props) => css`
  width: ${props.theme.spacing[10]}px;
  height: ${props.theme.spacing[10]}px;
  margin: ${props.theme.spacing[2]}px 0;
`)

export const Nav = styled.nav((props) => css`
  position: fixed;
  display: flex;
  align-items: center;
  align-content: stretch;
  background-color: ${props.theme.colors.monochrome1};
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 ${props.theme.spacing[3]}px;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 -${props.theme.spacing[1]}px ${props.theme.spacing[1]}px ${props.theme.colors.monochrome5}10;

  ${props.theme.mixins.mediaQueries.laptop(css`
    position: static;
    display: block;
    align-items: initial;
    background-color: transparent;
    width: auto;
    height: auto;
    border-radius: 0;
  `)};
`)

export const NavList = styled.ul((props) => css`
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  text-transform: none;
  width: 100%;

  ${props.theme.mixins.mediaQueries.laptop(css`
    font-weight: 700;
    text-transform: uppercase;
    height: 100%;
  `)};
`)

export const NavItemIcon = styled.span((props) => css`
  display: block;
  width: ${props.theme.spacing[6]}px;
  height: ${props.theme.spacing[6]}px;
  cursor: pointer;

  ${props.theme.mixins.mediaQueries.laptop(css`
    display: none;
  `)};
`)

export const NavListItem = styled.li`
  height: 100%;
  text-decoration: none;
`

export const NavLink = styled(NavLinkDom)((props) => css`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  text-decoration: none;
  padding: 0 ${props.theme.spacing[6]}px;
  color: ${props.theme.colors.monochrome4};
  font-size: 12px;

  ${props.theme.mixins.mediaQueries.laptop(css`
    position: relative;
    flex-direction: row;
    width: 100%;
    height: 100%;
    color: inherit;
    transform: skew(-15deg);
    overflow: hidden;
    font-size: inherit;

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
  `)};
`)