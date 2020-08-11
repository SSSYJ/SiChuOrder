import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
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
                // onClick={this.props.handleConfirm.bind(this)}
                >
                    Confirm
                </AtButton>
            </View>
        </View>
    );
    
    
}

export default connect(mapStateToProps)(TotalPrice)