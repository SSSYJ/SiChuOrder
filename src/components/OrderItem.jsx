import React from 'react'
import { View,  Text} from '@tarojs/components'
import { AtCard } from "taro-ui"

import './OrderItem.scss'

function OrderItem(props){

  return (
    <View className='order-item'>
      <AtCard
        title={"order id:  " + props.id}
      >
        <View className='at-row'>
          <Text className='at-col'>{props.time}</Text>
          <Text className='at-col total'>{"$" + props.totalPrice}</Text>
        </View>
      </AtCard>
   </View>   
  )
}

export default OrderItem;