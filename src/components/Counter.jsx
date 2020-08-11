import React from 'react'
import { connect } from 'react-redux'
import { View, Button } from '@tarojs/components'
import { increment, decrement } from '../actions'

const mapStateToProps = state => ({
    counter: state.test
})

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(increment()),
    minus: () => dispatch(decrement())
})


function Counter(props) {
    return (
        <View className='counter'>
            <Button onClick={props.minus}>-</Button>
            <View>{props.counter}</View>
            <Button onClick={props.add}>+</Button>
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
