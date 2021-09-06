import React, { PureComponent } from 'react'

import * as Styled from './styles/Error.style'

export default class Error extends PureComponent {
  render() {
    return (
      <Styled.Error>
        <h1>Oops! Page doesn't exist...</h1>
      </Styled.Error>
    )
  }
}
