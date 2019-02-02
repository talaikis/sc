import React from 'react'
import { DataSearch } from '@appbaseio/reactivesearch'

import CartButton from '../CartButton'

export default ({ isSearch }) => (
  <nav className='nav'>
    <div className='title'>Rent Shop</div>
    { isSearch ? <DataSearch
      componentId='SearchSensor'
      dataField='name'
      autosuggest={false}
      placeholder='Search by house names'
      iconPosition='left'
      className='search'
      highlight />
      : null
    }
    <CartButton />
  </nav>
)
