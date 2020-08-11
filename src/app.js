import React, { Component } from 'react'
// import React from 'react'
import { Provider } from '@tarojs/redux'
import { createStore } from 'redux'
import configStore from './store'

import rootReducer from './reducers'
import './app.scss'


const store = createStore(rootReducer)

// class App extends Component {
  
//     render() {
//       return this.props.children
//     }
// }
class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'))
export default App