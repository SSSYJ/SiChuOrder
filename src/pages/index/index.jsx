import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton,AtTabBar } from 'taro-ui'
import TotalPrice from '../../components/TotalPrice'
// import { AtTabBar } from 'taro-ui'
import TabBar from '../../components/TabBar'
import Item from '../../components/Item'

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
    return (
      <View className='index'>
          <Item />

            <TotalPrice
              price={this.state.price}
              handleConfirm={() => this.setState({current: 1, price: 5})}
              className='totalprice'
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
