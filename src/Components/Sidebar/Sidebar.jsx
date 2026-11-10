// import React, { useContext, useState } from 'react';
// import './Sidebar.css';
// import { ChatContext } from '../../Context/ContextProvider';
// import { FaRegPenToSquare } from "react-icons/fa6";
// import { HiMenu } from "react-icons/hi";
// import { RxCross2 } from "react-icons/rx";



// function Sidebar() {

//     const { chats, activeId, createNewChat,
//          selectChat, removeChat, toggleSidebar, isSidebarOpen } = useContext(ChatContext);

   

//   return (

//     <div className='sidebar-container'>
          
//           <button className="button toggle" onClick={toggleSidebar}>
//             {isSidebarOpen ?  <RxCross2 /> : <HiMenu /> }
//           </button>

//        {/* {isSidebarOpen &&    */}
//       {/*  <aside className="sidebar"> */}
//         <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>

//         <div className="sidebar-header">

//             <h1 className='amura sidebar-title'><span>✦</span>Amura.ai</h1>

//             <button className="button newChat" onClick={createNewChat}>
//               <FaRegPenToSquare />
//               <span> Chat</span>
//             </button>

//         </div>


//         <ul className="chat-list">

//           <h5 className='chat-history'>Chat History</h5>

//           {chats.length === 0 && <li className="empty">No chats yet. Create one.</li>}
          
          
//           {chats.map(chat => {
//             const last = chat.messages[chat.messages.length - 1];
//             return (
              
//               <li
//                 key={chat.id}
//                 className={`chat-item ${chat.id === activeId ? 'active' : ''}`}
//                 onClick={() => selectChat(chat.id)}
//               >
//                 <div className="chat-title">{chat.title}</div>
//                 <div className="chat-excerpt">{last ? (last.sender === 'me' ? 'You: ' : '') + last.text.slice(0, 50) : <em>Empty</em>}</div>
//                 <button className="remove" onClick={e => { e.stopPropagation(); removeChat(chat.id); }}>×</button>
//               </li>
//             );
//           })}
//         </ul>

//           {/* <button className="button newMsg" onClick={createNewChat}> <FaRegPenToSquare /> Chat</button> */}


//       </aside>
//         {/* } */}

//     </div>

//   )
// }

// export default Sidebar








// =========== Updated UI ==================

import React, { useContext } from 'react';
import './Sidebar.css';

import { ChatContext } from '../../Context/ContextProvider';

import { FaRegPenToSquare } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FiMessageSquare, FiTrash2 } from "react-icons/fi";

function Sidebar() {

    const {
        chats,
        activeId,
        createNewChat,
        selectChat,
        removeChat,
        toggleSidebar,
        isSidebarOpen
    } = useContext(ChatContext);


    return (

        <div className="sidebar-container">

            {/* Mobile Toggle Button */}
            <button
                className="sidebar-toggle"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                {isSidebarOpen ? <RxCross2 /> : <HiMenu />}
            </button>


            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={toggleSidebar}
                ></div>
            )} 


            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>

                {/* Sidebar Header */}
                <div className="sidebar-header">

                    <h1 className="sidebar-title">
                        <span>✦</span> Amura.ai
                    </h1>

                    <button
                        className="new-chat-btn"
                        onClick={createNewChat}
                    >
                        <FaRegPenToSquare />
                        <span>New Chat</span>
                    </button>

                </div>


                {/* Chat History */}
                <div className="history-section">

                    <h5 className="chat-history">
                        YOUR CONVERSATIONS
                    </h5>

                    <ul className="chat-list">

                        {chats.length === 0 && (
                            <li className="empty">
                                No conversations yet.
                            </li>
                        )}


                        {chats.map(chat => {

                            const last = chat.messages[chat.messages.length - 1];

                            return (

                                <li
                                    key={chat.id}
                                    className={`chat-item ${chat.id === activeId ? 'active' : ''}`}
                                    onClick={() => selectChat(chat.id)}
                                >

                                    <FiMessageSquare className="chat-icon" />

                                    <div className="chat-info">

                                        <div className="chat-title">
                                            {chat.title}
                                        </div>

                                        <div className="chat-excerpt">
                                            {last
                                                ? (last.sender === 'me' ? 'You: ' : '') + last.text.slice(0, 45)
                                                : 'New conversation'
                                            }
                                        </div>

                                    </div>


                                    <button
                                        className="remove"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeChat(chat.id);
                                        }}
                                        aria-label="Delete conversation"
                                        title="Delete conversation"
                                    >
                                        <FiTrash2 />
                                    </button>

                                </li>

                            );

                        })}

                    </ul>

                </div>


                {/* Sidebar Footer */}
                <div className="sidebar-footer">

                    <div className="footer-brand-icon">
                        ✦
                    </div>

                    <div className="footer-brand-info">
                        <span>Amura AI</span>
                        <small>Your AI companion</small>
                    </div>

                </div>

            </aside>

        </div>

    );

}

export default Sidebar;
