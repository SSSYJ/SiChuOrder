import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
// import { AtTabBar } from 'taro-ui'
import TabBar from '../../components/TabBar'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>

       <TabBar />

      </View>
      
    )
  }
}
