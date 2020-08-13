import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtButton } from 'taro-ui'
import './TotalPrice.scss'

const mapStateToProps = (state) => ({
    totalPrice: state.totalPrice
})

function TotalPrice(props){
    console.log(props.totalPrice)
    return (
        <View className='price-bar at-row'>
            <View className='price-text at-col at-col-8'>
                <Text className='dollar-sign'>$</Text>
                <Text>{props.totalPrice}</Text>
            </View>

        
            <View className='confirm-button at-col-3' >
                <AtButton 
                  type='primary'
                  onClick={() => Taro.navigateTo({url: '/pages/order/order'})}
                >
                    Confirm
                </AtButton>
            </View>
        </View>
    );
    
    
}

export default connect(mapStateToProps)(TotalPrice)