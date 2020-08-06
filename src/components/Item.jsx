import React from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton, AtCard, AtGrid } from "taro-ui"
import chicken from '../img/download.jpg'


function Item() {
  return (
    <View>
      <AtGrid data={
        [
          {
            image: chicken,
            value: '大盘鸡  $25'
          },
          {
            image: chicken,
            value: '红烧肉 $20'
          }
        ]
      } />
      
    </View>
  )
}

export default Item