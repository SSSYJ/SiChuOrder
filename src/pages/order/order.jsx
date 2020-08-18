import React, { useState } from 'react'
import { View, Label, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtForm, AtInput, AtTextarea, AtRadio, AtCard, AtButton} from 'taro-ui'

import './Order.scss'

const mapStateToProps = (state) => ({
  order: state.order,
  total: state.totalPrice
})


function Order(props) {

    const [comment, setComment] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [payMethod, setPayMethod] = useState('wechatpay')

    return (
        <View className='order-container'>
            <View className='order-detail'>
                <AtCard
                  title='订单详情'
                  extra='08/25 21:30'
                  isFull
                >
                  {props.order.map(item => {
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
                    <View className='total'>
                      Total: ${props.total}
                    </View>     
                </AtCard>
            </View>
            <View className='info'>
              <AtForm
                onSubmit={e => console.log(e)}
              >
                {/* <AtCard title='备注 Comment' isFull>
                  <AtTextarea 
                      className='comment-textarea'
                      value={comment}
                      onChange={value => setComment(value)}
                      maxLength={200}
                      placeholder='Enter comments here'
                  />
                </AtCard> */}
                  {/* <Label className='comment-label' for='comment-textarea'>备注</Label> */}
                  <AtTextarea 
                    className='comment-textarea'
                    value={comment}
                    onChange={value => setComment(value)}
                    maxLength={200}
                    placeholder='添加备注 Enter comments here'
                  />
                  <AtInput 
                    required
                    border
                    name='phone'
                    title='联系电话'
                    type='phone'
                    value={phone}
                    onChange={value => setPhone(value)}
                  />
                  <AtInput 
                    required
                    border
                    name='address'
                    title='收货地址'
                    type='text'
                    value={address}
                    onChange={value => setAddress(value)}
                  />
                  <View className='pay-method'>
                    <View className='pay-method-label'for='pay-method-radio'> 
                      支付方式
                    </View>
                    <AtRadio className='pay-method-radio'
                      options={[
                        { label: '微信支付', value: 'wechatpay'},
                        { label: '现金支付', value: 'cashpay' },
                        { label: '银行转账', value: 'bankpay'},
                      ]}
                      value={payMethod}
                      onClick={value => setPayMethod(value)}
                    />
                  </View>
                  <AtButton type='primary'> 提交订单 </AtButton>
              </AtForm>
            </View>
        </View>
    )
}

export default connect(mapStateToProps)(Order); 