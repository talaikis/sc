import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Cart from '../../containers/Cart'
import Home from '../../containers/Home'
import Checkout from '../../containers/Checkout'
import { Provider } from '../../store'

export default () => (
  <Provider>
    <Router>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
      </Fragment>
    </Router>
  </Provider>
)
