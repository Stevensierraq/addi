import React from 'react'

import Header from './components/commons/header'

import PropspectForm from './modules/propspects/form'

import './App.css'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      start app
      <PropspectForm />
    </div>
  )
}

export default App
