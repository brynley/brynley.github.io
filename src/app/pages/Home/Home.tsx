import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
  public static pageInfo = {
    name: 'Home',
    title: 'Brynley Langman',
    path: '/'
  }

  render() {
    return <h1>Home</h1>
  }
}
