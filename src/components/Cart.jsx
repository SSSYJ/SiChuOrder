import React from 'react'
import { View } from '@tarojs/components'
import { connect, useDispatch } from 'react-redux'

import Title from './Title'
import CartItem from './CartItem'
import TotalPrice from './TotalPrice'
import { removeFromCart, addToCart } from '../actions'

const mapStateToProps = (state) => ({
  order: state.order
})
const mapDispatchToProps = dispatch => ({
  dispatch, 
})

function Cart(props) {
  const dispatch = useDispatch()
  return (
    <View>
      <Title title='Cart' />
      <View className='menu-content'>
      {props.order.map(cartItem => {
        if (cartItem.name && cartItem.qty > 0) {
          return (
          
            <CartItem
              key={cartItem.name}
              name={cartItem.name}
              price={cartItem.price}
              qty={cartItem.qty}
              del={() => dispatch(removeFromCart(cartItem.name, cartItem.price, cartItem.qty))}
              add={() => dispatch(addToCart(cartItem.name, cartItem.price, cartItem.qty))}
            />
            )
        }
      })}
      </View>
      
      
      <TotalPrice />
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);