
import { useRef } from 'react';
import './assets/css/custom.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Contact from './pages/contact';
import Demo from './pages/demo';
import Home from './pages/home'
import Team from './pages/team';

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
    <>
      <Header />
      {/* <Home /> */}
      {/* <Team /> */}
      <button onClick={_abcClick} style={{ marginTop: 100, marginBottom: 100 }}>ABC</button>
      <button onClick={_openLogin} style={{ marginTop: 100, marginBottom: 100 }}>Open Login</button>
      <button onClick={_closeLogin} style={{ marginTop: 100, marginBottom: 100 }}>Close Login</button>
      <Contact ref={inputRef} />
      {/* <Demo num={() => {})} /> */}
      <Footer />
      <Login ref={loginModelRef} />
    </>
  );

}

export default App;
