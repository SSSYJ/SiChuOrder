import React from 'react'
import { View } from '@tarojs/components'
import './Item.scss'
import Title from './Title'
import Menu from './Menu'


function Home(props) {

  return (
    <View className='home'>
      <Title title='Menu' />
      <Menu isMenu itemList={props.itemList} />
    </View>
  )
}

export default Home