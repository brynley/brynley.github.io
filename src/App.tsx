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
        <Head/>
        <main>
          <Base>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
          </Base>
        </main>
      </ThemeProvider>
    )
  }
}