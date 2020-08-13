import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard } from "taro-ui"

function CartItem(props) { 
  return(
    <View>
      <AtCard extra={`$${props.price}`} title={props.name} >
          <View className='at-row'>
            <AtButton  size='small' onClick={props.del}> - </AtButton>
            <Text>{props.qty}</Text>
            <AtButton size='small' onClick={props.add} > + </AtButton>
          </View>
        </AtCard>
    </View>
  );
}

export default CartItem;