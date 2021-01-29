import React, { useState } from 'react'
import { Provider } from 'react-redux'

import Header from './components/commons/header'
import ClientsLayout from './layout/clientsLayout'
import PropspectsLayout from './layout/propspectsLayout'
import store from './store'

import './App.css'

function App() {
  const [tab, setTab] = useState<'propspects' | 'clients'>('propspects')

  return (
    <div className='App'>
      <Provider store={store}>
        <Header selected={tab} setTab={setTab} />
        {
          tab === 'propspects'
            ? <PropspectsLayout />
            : <ClientsLayout />
        }
      </Provider>
    </div>
  );
};

export default App
