import React from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtButton, AtCard } from "taro-ui"
import './MenuItem.scss'


function MenuItem(props) {

  return (
    <View className='menu-item'>
      <AtCard extra={props.price} title={props.name} >
        <View className='at-row'>
        <Image src={props.img} />
          <AtButton  size='small' onClick={props.del}> - </AtButton>
          <Text>{props.qty}</Text>
          <AtButton size='small' onClick={props.add} > + </AtButton>
        </View>
      </AtCard>
    </View>
  )
}

export default MenuItem