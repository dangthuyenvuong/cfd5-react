import React, { useState } from 'react'
import {
  BrowserRouter
} from 'react-router-dom'
import './assets/css/custom.css'

import routers from './routers'
import renderRouters from './core/routerConfig'
import AppProvider from './core/AppProver'



function App() {

  return (
    <AppProvider>
      {renderRouters(routers)}
    </AppProvider>
  );

}

export default App;
