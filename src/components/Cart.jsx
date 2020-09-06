import React from 'react'
import { View, Text } from '@tarojs/components'
import { connect, useDispatch } from 'react-redux'

import Title from './Title'
import CartItem from './CartItem'
import TotalPrice from './TotalPrice'
import { removeFromCart, addToCart } from '../actions'

import './Cart.scss'

const mapStateToProps = (state) => ({
  cart: state.cart,
  totalPrice: state.totalPrice
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
        {props.totalPrice <= 0 && 
          <View className='empty-cart'>
            <Text>Your cart is empty...</Text>
          </View>
        }
      {props.cart.map(cartItem => {
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