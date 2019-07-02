import React from 'react'
import { Provider } from 'react-redux'

import Header from './components/commons/header'
import PropspectsLayout from './layout/propspectsLayout'
import store from './store'

import './App.css'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <PropspectsLayout />
      </Provider>
    </div>
  )
}

export default App
