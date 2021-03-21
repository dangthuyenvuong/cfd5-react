import React, { useState } from 'react'
import {
  BrowserRouter
} from 'react-router-dom'
import './assets/css/custom.css'

import routers from './routers'
import renderRouters from './core/routerConfig'


export let AContext = React.createContext()

function App() {
  let [login, setLogin] = useState(false)
  function handleLogin() {
    setLogin(true)
  }
  return (
    <AContext.Provider value={{ login, handleLogin }}>
      <BrowserRouter>
        {renderRouters(routers)}
      </BrowserRouter>
    </AContext.Provider>
  );

}

export default App;
