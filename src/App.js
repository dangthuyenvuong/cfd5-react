import React from 'react'

import './assets/css/custom.css'

import routers from './routers'
import renderRouters from './core/routerConfig'
import AppProvider from './core/AppProver'

import reducers from './redux/reducers'
import mySaga from './redux/saga'

function App() {

  return (
    <AppProvider reducers={reducers} saga={mySaga}>
      {renderRouters(routers)}
    </AppProvider>
  );

}

export default App;
