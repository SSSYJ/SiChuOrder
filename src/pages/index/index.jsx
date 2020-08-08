import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './index.scss'

import TotalPrice from '../../components/TotalPrice'
import Item from '../../components/Item'
import Title from '../../components/Title'
import chicken from '../../img/download.jpg'

function Index() {
  const [current, setCurrent] = useState(0);
  const [price, setPrice] = useState(0);

  // componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }


    let menu = [
      {
        name:'大盘鸡',
        price:'$25',
        img: chicken
      },
      {
        name: '回锅肉',
        price: '$20',
        img: chicken
      },
      {
        name:'狼牙土豆',
        price:'$10',
        img: chicken
      },
      {
        name:'狼牙土豆',
        price:'$10',
        img: chicken
      },
    ]
    let menuList = menu.map((el, index) => {
       return (<Item key={index} name={el.name} price={el.price} img={el.img} />)
    })
    return (
      <View className='index'>

        <Title title='Menu' />
        <View className='menu-content'>
          {menuList}
        </View>
        

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