import React from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'

import Title from './Title'
import CartItem from './CartItem'
import TotalPrice from './TotalPrice'

const mapStateToProps = (state) => ({
  order: state.order
})
const mapDispatchToProps = dispatch => ({
  dispatch, 
})

function Cart(props) {
  return (
    <View>
      <Title title='Cart' />
      
      {props.order.map(cartItem => {
        <CartItem
          name={cartItem.name}
          price={cartItem.price}
          qty={cartItem.qty}
          del={() => dispatch(removeFromCart(cartItem.name, cartItem.price, cartItem.qty))}
          add={() => dispatch(addToCart(cartItemm.name, cartItem.price, cartItem.qty))}
        />
      })}
      
      <TotalPrice/>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);