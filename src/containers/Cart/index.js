import React from 'react'
import { Link } from 'react-router-dom'

import { Consumer } from '../../store'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const EmptyCart = () => (
  <div className='container'>
    <Header />
    <Sidebar />
    <p>You have nothing in your cart. <Link to='/'>Continue shopping?</Link></p>
  </div>
)

const total = (cart) => {
  let sum = 0
  // eslint-disable-next-line
  cart.map((el, i) => {
    sum += el.price
  })
  return sum
}

const CartWithItems = ({ cart }) => {
  return (
    <div className='container'>
      <Header />
      <Sidebar />
      <p>You have {cart.length} items in your cart with total price of ${total(cart)}. <Link to='/checkout'>Checkout?</Link></p>
    </div>
  )
}

export default () => (
  <Consumer>
    { (state) => (
      state.cart.length === 0 ? <EmptyCart /> : <CartWithItems cart={state.cart} />
    )}
  </Consumer>
)
