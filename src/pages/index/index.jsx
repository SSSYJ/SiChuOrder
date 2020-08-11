import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Button } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { useDispatch, useSelector } from 'react-redux';

import './index.scss'

import TotalPrice from '../../components/TotalPrice'
import Item from '../../components/Item'
import Title from '../../components/Title'
import chicken from '../../img/download.jpg'
import { increment, decrement } from '../../actions'



const Index = function (props) {


  const [current, setCurrent] = useState(0);
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector(state => state.test)

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

    // var num = 'empty'
    // if (counter) {
    //   num = `${counter.num}`
    // }

    return (
      <View className='index'>

        <Title title='Menu' />
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <View>{counter}</View>
        <Button onClick={() => dispatch(increment())}>+</Button>
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
  // connect((state) => ({
  //   test: state.test
  // }), (dispatch) => ({
  // add() {
  //   dispatch(increment())
  // },
  // dec() {
  //   dispatch(decrement())
  // },
  // }))(Index)
export default Index;