import styled, { css } from 'styled-components'

export const Home = styled.section((props) => css`
  background-color: ${props.theme.colors.primary};
`)

export const Header = styled.header((props) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  max-width: ${props.theme.breakpoints.desktop}px;
  margin: 0 auto;
  padding: 0 ${props.theme.spacing[4]}px;

  ${props.theme.mixins.mediaQueries.laptop(css`
    height: 100vh;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0;
  `)}
`)

export const HeaderWrapper = styled.div((props) => css`
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0;

  ${props.theme.mixins.mediaQueries.laptop(css`
    margin: ${props.theme.spacing[25]}px ${props.theme.spacing[13]}px 0 0;
  `)}
`)

export const Heading = styled.h1((props) => css`
  display: inline-flex;
  width: 281px;
  font-size: ${props.theme.spacing[7]}px;
  flex-wrap: wrap;
  text-align: center;
  /* font-family: DMSerifDisplay; */
  font-weight: 300;
  font-style: italic;
  text-transform: uppercase;
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
    width: 562px;
    font-size: ${props.theme.spacing[14]}px;
    span:first-child {
      margin-left: ${props.theme.spacing[5]}px;
    }
  `)}

  ${props.theme.mixins.mediaQueries.laptop(css`
    width: 723px;
    font-size: ${props.theme.spacing[18]}px;
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

export const ProfileImage = styled.div((props) => css`
  position: absolute;
  bottom: 100px;
  left: 100px;
  width: 300px;
  height: 300px;
  background-image: url('assets/images/profile.jpg');
  background-position: center;
  background-size: cover;
  box-shadow: 20px 15px 0 ${props.theme.colors.secondary};
  transform: translate(0);
  transition: all 0.5s ease;

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 25px 20px 0 ${props.theme.colors.secondary};
  }
`)