import React from 'react'
import { View } from '@tarojs/components'
import { connect, useDispatch } from 'react-redux'

import Title from './Title'
import Item from './Item'
import chicken from '../img/download.jpg'
import { addToCart, removeFromCart } from '../actions'


const mapStateToProps = (state) => ({
    order: state.order
})

const mapDispatchToProps = dispatch => ({
    dispatch, 
})

const Menu = function (props) {
    const dispatch = useDispatch()
    console.log(props)
    return (
            <View className='menu-content'>
            {props.isMenu &&  
                props.itemList.map((menuItem, menuIndex) => {
                    const orderItem = props.order.find(e => e.name === menuItem.name)
                    var qty = 0;
                    if (orderItem) {
                        qty = orderItem.qty
                    }
                    return (
                        <Item 
                          key={menuItem.name} 
                          name={menuItem.name} 
                          price={`$${menuItem.price}`} 
                          img={chicken} 
                          qty={qty} 
                          del={() => dispatch(removeFromCart(menuItem.name, menuItem.price))}
                          add={() => dispatch(addToCart(menuItem.name, menuItem.price))}
                        />
                    )
                })
            }
            </View>
        
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)