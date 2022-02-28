import styled, { css } from 'styled-components'

export const Home = styled.section((props) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props.theme.colors.primary};
`)

export const Header = styled.header(() => css`
  position: relative;
  z-index: 1;
  text-align: center;
`)

export const Heading = styled.h1((props) => css`
  display: inline-flex;
  width: 227px;
  font-size: ${props.theme.spacing[7]}px;
  flex-wrap: wrap;
  text-align: center;
  font-family: DMSerifDisplay;
  font-weight: 300;
  color: ${props.theme.colors.monochrome1};

  span {
    &:first-child {
      margin-left: ${props.theme.spacing[3]}px;
    }
    &:nth-child(2) {
      order: 3
    }
    &:nth-child(3) {
      order: 1;
      color: ${props.theme.colors.secondary};
    }
    &:last-child {
      order: 2;
      color: ${props.theme.colors.secondary};
    }
  }

  ${props.theme.mixins.mediaQueries.tablet(css`
    width: 584px;
    font-size: ${props.theme.spacing[18]}px;
    span:first-child {
      margin-left: ${props.theme.spacing[5]}px;
    }
  `)}

  ${props.theme.mixins.mediaQueries.laptop(css`
    width: 811px;
    font-size: ${props.theme.spacing[25]}px;
    span:first-child {
      margin-left: ${props.theme.spacing[7]}px;
    }
  `)}
`)

export const LogoWrapper = styled.span((props) => css`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 150px;
  height: auto;

  ${props.theme.mixins.mediaQueries.tablet(css`
    width: 300px;
  `)}

  ${props.theme.mixins.mediaQueries.laptop(css`
    width: 500px;
  `)}
`)