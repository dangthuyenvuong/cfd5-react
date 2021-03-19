
import React, { useRef, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './assets/css/custom.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Contact from './pages/Contact';
import Home from './pages/Home'
import KhoaHoc from './pages/KhoaHoc';
import Project from './pages/Project';
import Team from './pages/Team';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ChiTietKhoaHoc from './pages/ChiTietKhoaHoc';
import ThanhToan from './pages/ThanhToan';
import Page404 from './pages/Page404';
import Email from './pages/Email';
import Demo from './pages/Demo';



export let AContext = React.createContext()

function App() {
  let inputRef = useRef();
  let loginModelRef = useRef()
  let [login, setLogin] = useState(false)

  function _abcClick() {
    inputRef.current.value = '09498165896'
  }

  function _openLogin() {
    loginModelRef.current.open()
  }

  function _closeLogin() {
    loginModelRef.current.close()
  }

  function handleLogin() {
    setLogin(true)
  }
  return (
    <AContext.Provider value={{ login, handleLogin }}>
      <BrowserRouter>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route exact path="/course" component={KhoaHoc} />
          <Route path="/thong-tin-ca-nhan" component={Profile} />
          <Route path="/project" component={Project} />
          <Route path="/register" component={Register} />
          <Route path="/team" component={Team} />
          <Route path="/payment" component={ThanhToan} />
          <Route path="/course/:slug" render={(props) => <ChiTietKhoaHoc {...props} />} />
          <Route exact path="/"><Home /></Route>
          <Route exact path="/email" component={Email} />
          <Route exact path="/demo" component={Demo} />
          <Route component={Page404} />
        </Switch>

      </BrowserRouter>
    </AContext.Provider>
  );

}

export default App;
