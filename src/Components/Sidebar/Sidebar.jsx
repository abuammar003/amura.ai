import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { ChatContext } from '../../Context/ContextProvider';
import { FaRegPenToSquare } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";



function Sidebar() {

    const { chats, activeId, createNewChat,
         selectChat, removeChat, toggleSidebar, isSidebarOpen } = useContext(ChatContext);

   

  return (

    <div className='sidebar-container'>
          
          <button className="button toggle" onClick={toggleSidebar}>
            {isSidebarOpen ?  <RxCross2 /> : <HiMenu /> }
          </button>

       {/* {isSidebarOpen &&    */}
      {/*  <aside className="sidebar"> */}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>

        <div className="sidebar-header">

            <h1 className='amura sidebar-title'><span>✦</span>Amura.ai</h1>

            <button className="button newMsg" onClick={createNewChat}>
              <FaRegPenToSquare />
              <span> Chat</span>
            </button>

        </div>


        <ul className="chat-list">

          <h5 className='chat-history'>Chat History</h5>

          {chats.length === 0 && <li className="empty">No chats yet. Create one.</li>}
          
          
          {chats.map(chat => {
            const last = chat.messages[chat.messages.length - 1];
            return (
              
              <li
                key={chat.id}
                className={`chat-item ${chat.id === activeId ? 'active' : ''}`}
                onClick={() => selectChat(chat.id)}
              >
                <div className="chat-title">{chat.title}</div>
                <div className="chat-excerpt">{last ? (last.sender === 'me' ? 'You: ' : '') + last.text.slice(0, 50) : <em>Empty</em>}</div>
                <button className="remove" onClick={e => { e.stopPropagation(); removeChat(chat.id); }}>×</button>
              </li>
            );
          })}
        </ul>

          {/* <button className="button newMsg" onClick={createNewChat}> <FaRegPenToSquare /> Chat</button> */}


      </aside>
        {/* } */}

    </div>

  )
}

export default Sidebar