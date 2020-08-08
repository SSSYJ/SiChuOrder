import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton,AtTabBar } from 'taro-ui'
import TotalPrice from '../../components/TotalPrice'
import Item from '../../components/Item'
import Title from '../../components/Title'

import chicken from '../../img/download.jpg'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      price: 10 ,
    }
  }
  
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
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
      }
    ]
    let menuList = menu.map(el => {
       return (<Item name= {el.name} price={el.price} img={el.img}/>)
    })
    return (
      <View className='index'>
        <Title title='Menu'/>
        {menuList}

        <TotalPrice
          price={this.state.price}
          handleConfirm={() => this.setState({current: 1, price: 5})}
        />

        <AtTabBar
          fixed
          tabList={[
            { title: 'Menu', iconType: 'list' },
            { title: 'Cart', iconType: 'shopping-cart' },
            { title: 'My Orders', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
       


      </View>
      
    )
  }
}
