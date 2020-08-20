import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'

import MenuItem from './MenuItem'
// import chicken from '../img/download.jpg'
import { addToCart, removeFromCart, getMenu } from '../actions'


const mapStateToProps = (state) => ({
    order: state.order,
    menu: state.menu
})

const Menu = function (props) {

    console.log(props)
    useEffect(() => {
        props.getMenu()
    }, [props.menu.length])

    return (
        <View className='menu-content'>
            {props.menu.map(menuItem => {
                const orderItem = props.order.find(e => e.name === menuItem.name)
                var qty = 0;
                if (orderItem) {
                    qty = orderItem.qty
                }
                return (
                    <MenuItem
                      key={menuItem.name}
                      name={menuItem.name}
                      price={`$${menuItem.price}`}
                      img={menuItem.thumb}
                      qty={qty}
                      del={e => { e.preventDefault(); props.removeFromCart(menuItem.name, menuItem.price, qty) }}
                      add={e => { e.preventDefault(); props.addToCart(menuItem.name, menuItem.price, qty) }}
                    />
                )
            })}
        </View>

    )
}

export default connect(mapStateToProps, { addToCart, removeFromCart, getMenu })(Menu)