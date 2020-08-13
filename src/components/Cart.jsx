import React from 'react'
import { View } from '@tarojs/components'

import Title from './Title'
import Menu from  './Menu'
import TotalPrice from './TotalPrice'

function Cart(props) {
  return (
    <View>
      <Title title='Cart' />
      <Menu itemList={props.items} />
      <TotalPrice handleConfirm={() => console.log(5)} />
    </View>
  )
}

export default Cart;