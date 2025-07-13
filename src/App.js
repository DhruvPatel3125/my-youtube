import React from 'react'
import './index.css'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'

const App = () => {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Body/>
    </Provider>
    </>

  )
}

export default App
