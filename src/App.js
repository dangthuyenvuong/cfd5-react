
import { useRef } from 'react';
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

function App() {
  let inputRef = useRef();
  let loginModelRef = useRef()

  function _abcClick() {
    inputRef.current.value = '09498165896'
  }

  function _openLogin() {
    loginModelRef.current.open()
  }

  function _closeLogin() {
    loginModelRef.current.close()
  }


  return (
    <BrowserRouter>
      <Header />
      {/* <Demo /> */}
      {/* <Home /> */}
      {/* <Team /> */}
      {/* <button onClick={_abcClick} style={{ marginTop: 100, marginBottom: 100 }}>ABC</button>
      <button onClick={_openLogin} style={{ marginTop: 100, marginBottom: 100 }}>Open Login</button>
      <button onClick={_closeLogin} style={{ marginTop: 100, marginBottom: 100 }}>Close Login</button> */}
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route exact path="/course" component={KhoaHoc} />
        <Route path="/thong-tin-ca-nhan" component={Profile} />
        <Route path="/project" component={Project} />
        <Route path="/register" component={Register} />
        <Route path="/team" component={Team} />
        <Route path="/payment" component={ThanhToan} />
        <Route path="/course/:slug" component={ChiTietKhoaHoc} />
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
      {/* <Demo num={() => {})} /> */}
      <Footer />
      <Login ref={loginModelRef} />
    </BrowserRouter>
  );

}

export default App;
