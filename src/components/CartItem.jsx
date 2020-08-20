import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from "taro-ui"

import './CartItem.scss'

function CartItem(props) { 
  return(
    <View className='cart-item at-row'>
      <Text className='at-col-4'>{props.name}</Text>
      <AtButton className='button' size='small' onClick={props.del}> - </AtButton>
      <Text>{props.qty}</Text>
      <AtButton className='button' size='small' onClick={props.add} > + </AtButton>
      <Text>${props.price * props.qty}</Text>
    </View>
  );
}

export default CartItem;