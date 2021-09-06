import React from 'react'
import Base from './app/templates/Base'
import Home from './app/pages/Home'
import Login from './app/pages/Login'
import Error from './app/pages/Error'
import { BrowserRouter, Route, NavLink , Switch, } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/">
              <Base>
                <Home />
              </Base>
            </Route>
            <Route>
              <Base>
                <Error />
              </Base>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}