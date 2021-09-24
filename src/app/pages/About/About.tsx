import React, { PureComponent } from 'react'

export default class Login extends PureComponent {
  public static pageInfo = {
    name: 'About',
    title: 'About Brynley',
    path: '/about'
  }

  render() {
    return <h1>About</h1>
  }
}
