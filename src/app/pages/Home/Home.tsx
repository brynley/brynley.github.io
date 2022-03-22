import React from 'react'

import Icon from '@components/Icon'

import * as Styled from './styles/Home.styles'

const Home = () => {
    return (
      <Styled.Home>
        <Styled.Header>
          <Styled.HeaderWrapper>
            <Styled.Heading><span>Brynley</span><span>Langman</span><span>Creative</span><span>Engineer</span></Styled.Heading>
            {/* Explore using accelerometer on mobile here */}
            <Styled.LogoWrapper>
              <Icon name='logo' fill='monochrome1'/>
            </Styled.LogoWrapper>
          </Styled.HeaderWrapper>
        <Styled.ProfileImage/>
        </Styled.Header>
      </Styled.Home>
    )
}

export default Home