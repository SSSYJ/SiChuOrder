import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './index.scss'

import Home from '../../components/Home'
import Cart from '../../components/Cart'
import MyOrders from '../../components/MyOrders'


const Index = function () {

  const [current, setCurrent] = useState(0);

    return (
      <View className='index'>
        <View className='page-body'>
          {current === 0 && <Home />}
          {current === 1 && <Cart />}
          {current === 2 && <MyOrders />}
        </View>
  

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