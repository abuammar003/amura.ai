import React from 'react';
import './Chatting.css';
import Chatbox from '../Chatbox/Chatbox';
import Sidebar from '../Sidebar/Sidebar';

function Chatting() {

 

  return (
    <div className="chatting">

      <div className="sidebar-main">
        <Sidebar />
      </div>

      <div className="chatbox-main">
        <Chatbox />
      </div>        
      
    </div>
  );
}

export default Chatting;






// Functions=>
 // const [chats, setChats] = useState(() => {
  //   try {
  //     return JSON.parse(localStorage.getItem('chat_history') || '[]');
  //   } catch {
  //     return [];
  //   }
  // });
  
  // const [activeId, setActiveId] = useState(chats.length ? chats[0].id : null);
  // const [input, setInput] = useState('');
  // const messagesEndRef = useRef(null);

  // useEffect(() => {
  //   localStorage.setItem('chat_history', JSON.stringify(chats));
  // }, [chats]);

  // useEffect(() => {
  //   // keep activeId valid after chats change
  //   if (chats.length && !chats.find(c => c.id === activeId)) {
  //     setActiveId(chats[0].id);
  //   } else if (!chats.length) {
  //     setActiveId(null);
  //   }
  // }, [chats, activeId]);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [activeId, chats]);

  // function createNewChat() {
  //   const id = Date.now().toString();
  //   const newChat = { id, title: `Chat ${chats.length + 1}`, messages: [] };
  //   setChats(prev => [newChat, ...prev]);
  //   setActiveId(id);
  //   setInput('');
  // }

  // function selectChat(id) {
  //   setActiveId(id);
  //   setInput('');
  // }

  // function sendMessage() {
  //   const text = input.trim();
  //   if (!text || !activeId) return;
  //   setChats(prev =>
  //     prev.map(c =>
  //       c.id === activeId
  //         ? { ...c, messages: [...c.messages, { id: Date.now().toString(), sender: 'me', text, time: new Date().toISOString() }] }
  //         : c
  //     )
  //   );
  //   setInput('');
  //   // simple simulated reply
  //   setTimeout(() => {
  //     setChats(prev =>
  //       prev.map(c =>
  //         c.id === activeId
  //           ? {
  //               ...c,
  //               messages: [
  //                 ...c.messages,
  //                 { id: Date.now().toString() + '-bot', sender: 'bot', text: 'Auto-reply: ' + text, time: new Date().toISOString() }
  //               ]
  //             }
  //           : c
  //       )
  //     );
  //   }, 700);
  // }

  // function removeChat(id) {
  //   setChats(prev => prev.filter(c => c.id !== id));
  //   if (id === activeId) {
  //     const remaining = chats.filter(c => c.id !== id);
  //     setActiveId(remaining.length ? remaining[0].id : null);
  //   }
  // }

  // const activeChat = chats.find(c => c.id === activeId);






// Div Elements=>

{/* <aside className="sidebar">
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
      </aside> */}


      {/* <main className="panel">
        <header className="panel-header">{activeChat ? activeChat.title : 'Select or create a chat'}</header>

        <section className="messages">
          {!activeChat && <div className="placeholder">No chat selected.</div>}
          {activeChat && activeChat.messages.length === 0 && <div className="placeholder">No messages yet.</div>}
          {activeChat && activeChat.messages.map(m => (
            <div key={m.id} className={`message ${m.sender === 'me' ? 'me' : 'bot'}`}>
              <div className="message-text">{m.text}</div>
              <div className="message-time">{new Date(m.time).toLocaleTimeString()}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </section>

        <div className="composer">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
            placeholder={activeChat ? 'Type a message...' : 'Select a chat to start ...'}
            disabled={!activeChat}
          />
          <button className="btn" onClick={sendMessage} disabled={!activeChat || !input.trim()}>Send</button>
        </div>
      </main> */}
