import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import css from '../css/nav.css'
export default class Nav extends Component {
  render() {
    return (
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">News</Link></li>
        <li><Link to="/product">Product</Link></li>
        </ul>
    )
  }
}
