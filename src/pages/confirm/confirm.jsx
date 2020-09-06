import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtForm, AtInput, AtTextarea, AtRadio, AtCard, AtButton, AtToast} from 'taro-ui'
import { reset } from '../../actions'

import './Confirm.scss'

const mapStateToProps = (state) => ({
  cart: state.cart,
  total: state.totalPrice
})


function Order(props) {

    const [comment, setComment] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [payMethod, setPayMethod] = useState('wechatpay')
    const [isSubmitted, setSubmitted] = useState(false)
    const [hasError, setError] = useState(false)

    const handleConfirm = () => {
      console.log("start")
      var Fly = require("../../../wx")
      var fly = new Fly
      console.log(comment, phone,address,payMethod)

      fly.post('https://sichu.herokuapp.com/api/orders/', {
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!! userID
        "userId": "aaaaaaaaaaaaaaa",
        //!!!!!!!!!!!!!!!!!!!!!!
        "time": Date(),
        "comment": comment,
        "phone": phone,
        "address": address,
        "paymentMethod": payMethod,
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!! items
        "items": [15],
      })
      .then(function (response) {
        console.log(response);
        setSubmitted(true);
        props.reset();
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Redirect to order detail page
        Taro.redirectTo({ url: '../index/index'});
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });

      console.log("end")
    }

    return (
        <View className='order-container'>
            <View className='order-detail'>
                <AtCard title='Order Details' isFull>
                  {props.cart.map(item => {
                      if (item.name && item.qty > 0) {
                        return (
                          <View key={item.name} className='at-row'>
                            <Text className='at-col-6'> {item.name} </Text>
                            <Text className='at-col-3'> {item.qty} </Text>
                            <Text className='at-col-3'>  ${item.qty * item.price}</Text> 
                          </View>
                        )
                      }
                    })}   
                    <View className='total'>Total: ${props.total}</View>     
                </AtCard>
            </View>
            <View className='info'>
              <AtForm onSubmit={handleConfirm}>
                  <AtTextarea 
                    className='comment-textarea'
                    value={comment}
                    onChange={value => setComment(value)}
                    maxLength={200}
                    placeholder='添加备注 Please enter comments here'
                  />
                  <AtInput 
                    required
                    border
                    name='phone'
                    title='Phone'
                    type='phone'
                    value={phone}
                    onChange={value => setPhone(value)}
                  />
                  <AtInput 
                    required
                    border
                    name='address'
                    title='Address'
                    type='text'
                    value={address}
                    onChange={value => setAddress(value)}
                  />
                  <View className='pay-method'>
                    <View className='pay-method-label'for='pay-method-radio'> 
                      Payment Method
                    </View>
                    <AtRadio className='pay-method-radio'
                      options={[
                        { label: 'Wechat', value: 'WE'},
                        { label: 'E-transfer', value: 'BA'},
                        { label: 'Cash', value: 'CA' },
                      ]}
                      value={payMethod}
                      onClick={value => setPayMethod(value)}
                    />
                  </View>
                  <AtButton type='primary' onClick={handleConfirm}> Submit </AtButton>
                  {isSubmitted && <AtToast isOpened text='Success!' icon='' />}
                  {hasError && <AtToast isOpened text='Error!' icon='' />}
                  
              </AtForm>
            </View>
        </View>
    )
}

export default connect(mapStateToProps, 
  {reset})(Order); 