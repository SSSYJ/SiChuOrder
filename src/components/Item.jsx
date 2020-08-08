import React , {useState} from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton, AtCard } from "taro-ui"
import './Item.scss'


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

  return (
    <View>
      <AtCard extra={props.price} title={props.name} >
        <View className='at-row'>
        <Image src={props.img}/>
          <AtButton  size='small' onClick={deleteQty}> - </AtButton>
          {qty}
          <AtButton size='small' onClick={addQty} > + </AtButton>
        </View>
      </AtCard>
    </View>
  )
}

export default Item