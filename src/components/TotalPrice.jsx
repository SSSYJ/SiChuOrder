import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './TotalPrice.scss'


class TotalPrice extends React.Component {
    render() {
        return (
            <View className='price-bar at-row'>
                <View className='price-text at-col at-col-8'>
                    <Text className='dollar-sign'>$</Text>
                    <Text>{this.props.price}</Text>
                </View>
                <View className='confirm-button at-col-3' >
                  <AtButton 
                    type='primary'
                    onClick={this.props.handleConfirm.bind(this)}
                  >
                      Confirm
                  </AtButton>
                </View>
                
                
            </View>
        );
    }
    
}

export default TotalPrice