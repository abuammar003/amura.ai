import React, { useContext } from 'react';
import './Sidebar.css';
import { ChatContext } from '../../Context/ContextProvider';


function Sidebar() {
    const { chats, activeId, createNewChat,
         selectChat, removeChat } = useContext(ChatContext);

  return (

    <div>
       <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Chats</h3>
          <button className="btn" onClick={createNewChat}>New</button>
        </div>
        <ul className="chat-list">
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
                <div className="chat-excerpt">{last ? (last.sender === 'me' ? 'You: ' : '') + last.text : <em>Empty</em>}</div>
                <button className="remove" onClick={e => { e.stopPropagation(); removeChat(chat.id); }}>×</button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>

  )
}

export default Sidebar