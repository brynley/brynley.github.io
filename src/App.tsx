import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import { brandPink } from './themes'

import Base from './app/templates/Base'
import Home, { homePageInfo } from './app/pages/Home'
import About from './app/pages/About'
import Error from './app/pages/Error'

const App = () => {
  return (
    <ThemeProvider theme={brandPink}>
      <brandPink.globalStyles />
      
        <Switch>
          <Route exact path={homePageInfo.path}>
            <Base pageTitle={homePageInfo.title} pagePath={homePageInfo.path}>
              <Home />
            </Base>
          </Route>
          <Route path={About.pageInfo.path}>
            <Base pageTitle={About.pageInfo.title} pagePath={About.pageInfo.path}>
              <About />
            </Base>
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      
    </ThemeProvider>
  )
}

export default App
