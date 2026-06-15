import React from 'react'
import './App.css';
import Chatting from './Components/Chating/Chatting';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ContextProvider } from './Context/ContextProvider';

function App() {

  return (
    <div className='app'>
      {/* <h1>ChatBox</h1> */}
      <Header />

      <ContextProvider>
        <Chatting />
      </ContextProvider>
      
      <Footer />
    </div>
  )
}

export default App
