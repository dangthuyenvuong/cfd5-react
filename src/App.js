import React, { useState } from 'react'
import {
  BrowserRouter
} from 'react-router-dom'
import './assets/css/custom.css'

import routers from './routers'
import renderRouters from './core/routerConfig'
import AppProvider from './core/AppProver'
// import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <AppProvider store={store}>
      {renderRouters(routers)}
    </AppProvider>
  );

}

export default App;
