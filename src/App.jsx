import React, { useState } from 'react'
import './App.css';
import Chatting from './Components/Chating/Chatting';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ContextProvider } from './Context/ContextProvider';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleTheme() {
    if (isDarkTheme === false) {
      setIsDarkTheme(true);
      
    } else {
      setIsDarkTheme(false);
    }
  }

  return (
    <div className='app'>

      <button className='themeIcon' onClick={handleTheme}> {isDarkTheme ? "Light" : "Dark" } </button>
      {/* <h1>ChatBox</h1> */}
      <Header />

      <ContextProvider>
        <Chatting />
      </ContextProvider>
      
      <div className="footer-app">
        <Footer />
      </div>


    </div>
  )
}

export default App
