import React, { PureComponent } from "react";
import Navigation from '../../components/Navigation'

export default class Base extends PureComponent {

  render() {
    return (
      <main>
        <Navigation />
        {this.props.children}
      </main>
    )
  }
}