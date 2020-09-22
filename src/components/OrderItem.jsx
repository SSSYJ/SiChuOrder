import React , { useState } from 'react'
import { View,  Text} from '@tarojs/components'
import { AtCard } from "taro-ui"

import './OrderItem.scss'

function OrderItem(props){
  const [isExpanded, setIsExpaned] = useState(false)

  return (
    <View onClick={() => setIsExpaned(!isExpanded)}>  
    <View className='order-item'>
      <AtCard title={"order id:  " + props.id}>
        <View className='at-row'>
          <Text className='at-col'>{props.time}</Text>
          <Text className='at-col total'>{"$" + props.totalPrice}</Text>
        </View>
          {isExpanded && props.orderItems.map((item,id) => 
            <View key={id} className='at-row'>
              <Text className='at-col'>{item.menuItem}</Text> 
              <Text className='at-col'>{item.qty}</Text>
              <Text className='at-col'>${item.qty * item.price}</Text> 
            </View>
          )}
      </AtCard>
   </View>   
   </View>
  )
}

export default OrderItem;