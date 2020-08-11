import React , {useState} from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtButton, AtCard } from "taro-ui"
import './Item.scss'

import { useDispatch, useSelector } from '@tarojs/redux';


function Item(props) {
  let [qty, setQty] = useState(0);



  function addQty() {
    setQty(qty += 1);
  }

  function deleteQty() {
    if (qty > 0){
      setQty(qty -= 1 );
    } else {
      setQty(qty = 0 );
    }
  }

  const addToCart = () => {
    const name = props.name;
    const price = props.price;
    return {
      type: 'ADD_TO_CART',
      payload: {
        name: name,
        price: price,
      }
    }
  }

  const removeFromCart = () => {
    const name = props.name;
    const price = props.price;
    return {
      type: 'REMOVE_FROM_CART',
      payload: {
        name: name,
        price: price,
      }
    }
  }

  // return (
  //   <View className='menu-item'>
  //     <AtCard extra={props.price} title={props.name} >
  //       <View className='at-row'>
  //       <Image src={props.img} />
  //         <AtButton  size='small' onClick={() => dispatch(decrement)}> - </AtButton>
  //         <Text>{counter}</Text>
  //         <AtButton size='small' onClick={() => dispatch(increment)} > + </AtButton>
  //       </View>
  //     </AtCard>
  //   </View>
  // )

  return (
    <View className='menu-item'>
      <AtCard extra={props.price} title={props.name} >
        <View className='at-row'>
        <Image src={props.img} />
          <AtButton  size='small' onClick={deleteQty}> - </AtButton>
          <Text>0</Text>
          <AtButton size='small' onClick={addQty} > + </AtButton>
        </View>
      </AtCard>
    </View>
  )
}

export default Item