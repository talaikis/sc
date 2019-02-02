import 'react-app-polyfill/ie11'
import React from 'react'
import { ReactiveBase, ResultCard } from '@appbaseio/reactivesearch'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { mutate } from '../../store'

export default () => (
  <div className='container'>
    <ReactiveBase app='airbeds-test-app' credentials='X8RsOu0Lp:9b4fe1a4-58c6-4089-a042-505d86d9da30'
      theme={{ primaryColor: '#FF3A4E' }}>
      <Header isSearch />
      <Sidebar isSearch />
      <ResultCard
        className='right-col'
        componentId='SearchResult'
        dataField='name'
        size={12}
        onData={(data) => ({
          image: data.image,
          title: data.name,
          description: (
            <div onClick={() => mutate((draft) => { draft.cart.push(data) })}>
              <div className='price'>${data.price}</div>
              <p className='info'>{data.room_type} · {data.accommodates} guests</p>
              <p className='info'>Add to Cart</p>
            </div>
          )
        })}
        pagination
        react={{ and: ['SearchSensor', 'GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'] }}
        innerClass={{
          resultStats: 'result-stats',
          list: 'list',
          listItem: 'list-item',
          image: 'image'
        }} />
    </ReactiveBase>
  </div>
)
