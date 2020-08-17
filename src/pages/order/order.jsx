import React, { useState } from 'react'
import { View, Label } from '@tarojs/components'
import { AtForm, AtInput, AtTextarea, AtRadio, AtCard, AtButton } from 'taro-ui'

import './order.scss'

export default function Order() {
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
                    菜品
                </AtCard>
            </View>
            <AtForm
              onSubmit={e => console.log(e)}
            >
                <Label className='comment-label' for='comment-textarea'>备注</Label>
                <AtTextarea 
                  className='comment-textarea'
                  value={comment}
                  onChange={value => setComment(value)}
                  maxLength={200}
                  placeholder='Enter comments here'
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
                <Label className='pay-method-label' for='pay-method-radio'>支付方式</Label>
                <AtRadio className='pay-method-radio'
                  options={[
                    { label: '微信支付', value: 'wechatpay'},
                    { label: '现金支付', value: 'cashpay' },
                    { label: '银行转账', value:'bankpay'},
                  ]}
                  value={payMethod}
                  onClick={value => setPayMethod(value)}
                />
                <AtButton type='primary'>
                    提交订单
                </AtButton>
            </AtForm>
        </View>
    )
}