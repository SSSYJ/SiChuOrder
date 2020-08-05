import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

function TabBar() {
  return (
    <View>
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

export default TabBar