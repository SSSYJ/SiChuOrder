import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './index.scss'

import TotalPrice from '../../components/TotalPrice'
import chicken from '../../img/download.jpg'
import Menu from '../../components/Menu'



const Index = function () {

  const [current, setCurrent] = useState(0);
  const [price, setPrice] = useState(0);

    let itemList = [
      {
        name:'大盘鸡',
        price: 25,
        img: chicken
      },
      {
        name: '回锅肉',
        price: 20,
        img: chicken
      },
      {
        name:'狼牙土豆',
        price: 10,
        img: chicken
      },
      {
        name:'狼牙土豆2',
        price: 10,
        img: chicken
      },
    ]

    return (
      <View className='index'>


        <Menu isMenu itemList={itemList} />

        <TotalPrice
          price={price}
          handleConfirm={() => setPrice(5)}
        />

        <AtTabBar
          fixed
          tabList={[
            { title: 'Menu', iconType: 'list' },
            { title: 'Cart', iconType: 'shopping-cart' },
            { title: 'My Orders', iconType: 'user' }
          ]}
          onClick={(value) => setCurrent(value)}
          current={current}
          className='tab-bar'
        />
      </View>
    )
  }
export default Index;