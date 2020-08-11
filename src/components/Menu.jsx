import React from 'react'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import Title from './Title'
import Item from './Item'
import chicken from '../img/download.jpg'


const mapStateToProps = state => ({
    order: state.order
})


const Menu = function (props) {
    return (
        <View className='menu-container'>
            <Title title='Menu' />
            <View className='menu-content'>
                {props.order.map((item, index) =>
                    <Item 
                      key={index} 
                      name={item.name} 
                      price={item.price} 
                      img={chicken} 
                      qty={item.qty} 
                    />
                )}
            </View>
        </View>
        
    )
}

export default connect(mapStateToProps)(Menu)