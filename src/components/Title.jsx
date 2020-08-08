import React from 'react'
import { View } from '@tarojs/components'
import'./Title.scss'


function Title(props){

    return (
      <View className='title'>{props.title}</View>
    )
}

export default Title