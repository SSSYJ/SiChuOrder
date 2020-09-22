import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'

import Title from './Title'
import OrderItem from './OrderItem'
import { getOrders } from '../actions'

import './MyOrders.scss'

const mapStateToProps = (state) => ({
  orders: state.orders
})

function MyOrders(props) {

  useEffect(() => {
    props.getOrders()
}, [props.orders.length])

  return (
    <View>
      <Title title='My Orders' />
      <View className='my-orders'>
        {props.orders.map(orderItem =>  
          <OrderItem 
            key={orderItem.id}
            id={orderItem.id}
            time={orderItem.time}
            totalPrice={orderItem.totalPrice}
            orderItems={orderItem.orderItems}
          />
        )}
      </View>
    </View>
  )
}

export default connect(mapStateToProps, {getOrders})(MyOrders);
