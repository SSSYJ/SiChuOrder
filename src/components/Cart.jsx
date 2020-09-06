import React from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'

import Title from './Title'
import CartItem from './CartItem'
import TotalPrice from './TotalPrice'
import { removeFromCart, addToCart } from '../actions'

import './Cart.scss'

const mapStateToProps = (state) => ({
  order: state.order,
  totalPrice: state.totalPrice
})

function Cart(props) {
  return (
    <View>
      <Title title='Cart' />
      <View className='menu-content'>
        {props.totalPrice === 0 && 
        <View className='empty-cart'>
          <Text>Your cart is empty...</Text>
        </View>
          
        }
      {props.order.map(cartItem => {
        if (cartItem.name && cartItem.qty > 0) {
          return (
          
            <CartItem
              key={cartItem.name}
              name={cartItem.name}
              price={cartItem.price}
              qty={cartItem.qty}
              del={e => { e.preventDefault(); props.removeFromCart(cartItem.name, cartItem.price, cartItem.qty)}}
              add={e => { e.preventDefault(); props.addToCart(cartItem.name, cartItem.price, cartItem.qty)}}
            />
            )
        }
      })}
      </View>
      
      
      <TotalPrice />
    </View>
  )
}

export default connect(mapStateToProps, {addToCart, removeFromCart})(Cart);