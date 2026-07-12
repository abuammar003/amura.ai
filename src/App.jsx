import React, { useState } from 'react'
import './App.css';
import Chatting from './Components/Chating/Chatting';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ContextProvider } from './Context/ContextProvider';

function App() {


  return (
    <div className='app'>

   
      <div className="header-app">
        <Header />
      </div>

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
