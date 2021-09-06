import React, { PureComponent } from "react";
import { NavLink } from 'react-router-dom'

export default class Navigation extends PureComponent {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/sdfsdf">
            fake
          </NavLink>
        </li>
      </ul>
    )
  }
}