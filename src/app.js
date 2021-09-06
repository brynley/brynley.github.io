import React from 'react'
import Head from './app/components/Head'
import Base from './app/templates/Base'
import Home from './app/pages/Home'
import About from './app/pages/About'
import Error from './app/pages/Error'
import { Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <>
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
      </>
    )
  }
}