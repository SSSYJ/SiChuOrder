import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton,AtTabBar } from 'taro-ui'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>


        <AtTabBar
          fixed
          tabList={[
            { title: 'Menu', iconType: 'list' },
            { title: 'Cart', iconType: 'shopping-cart' },
            { title: 'My Orders', iconType: 'user' }
          ]}
          // onClick={this.handleClick.bind(this)}
          // current={this.state.current}
        />
       

      </View>
      
    )
  }
}
