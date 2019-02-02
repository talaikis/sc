import React from 'react'
import { Link } from 'react-router-dom'

import { Consumer } from '../../store'
import './CartButton.css'

export default () => (
  <Consumer>
    { (state) => (
      <Link to='/cart'>
        <span className='fa-stack fa-2x has-badge' data-count={state.cart.length}>
          <i className='fa fa-circle fa-stack-2x' />
          <i className='fa fa-shopping-cart fa-stack-1x fa-inverse' />
        </span>
      </Link>
    )}
  </Consumer>
)
