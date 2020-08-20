import React from 'react'
import { View } from '@tarojs/components'
import Title from './Title'
import Menu from  './Menu'
import TotalPrice from './TotalPrice'

function Home() {
  return (

    <View>
      <Title title='Menu' />
      <Menu />
      <TotalPrice handleConfirm={() =>console.log('confirm')} />
    </View>
  )
}

export default Home;
