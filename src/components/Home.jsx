import React from 'react'
import { View } from '@tarojs/components'

import Title from './Title'
import Menu from  './Menu'
import TotalPrice from './TotalPrice'



function Home(props) {

  return (
    <View>
      <Title title='Menu' />
      <Menu itemList={props.items} />
      <TotalPrice handleConfirm={() =>setPrice(5)} />
    </View>
  )
}

export default Home;