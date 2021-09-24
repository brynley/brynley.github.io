import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import { brandPink } from './themes'

import Head from './app/components/Head'
import Base from './app/templates/Base'
import Home from './app/pages/Home'
import About from './app/pages/About'
import Error from './app/pages/Error'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={brandPink}>
        <brandPink.globalStyles />
        <Base>
          <Switch>
            <Route exact path={Home.pageInfo.path}>
              <Head pageTitle={Home.pageInfo.title} pagePath={Home.pageInfo.path} />
              <Home />
            </Route>
            <Route path={About.pageInfo.path}>
              <Head pageTitle={About.pageInfo.title} pagePath={About.pageInfo.path} />
              <About />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </Base>
      </ThemeProvider>
    )
  }
}