import React, {useContext} from 'react';
import { ChatContext } from '../../Context/ContextProvider';
import './Chatbox.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';


function Chatbox() { 
    const { chats, activeId, input, setInput,
         messagesEndRef, sendMessage, closeSidebar } = useContext(ChatContext);

  const activeChat = chats.find(c => c.id === activeId);

  return (
    // <div>

         <main className="panel" onClick={closeSidebar}>

        <header className="panel-header">{activeChat ? activeChat.title : 'Select or create a chat'}</header>

        <section className="messages">

          {!activeChat && <div className="placeholder">No chat selected.</div>}
          
          {activeChat && activeChat.messages.length === 0 && <div className="placeholder">How can i help you today?</div>}

          {activeChat &&
           activeChat.messages.map(m => (
            <div key={m.id} className={`message ${m.sender === 'me' ? 'me' : 'bot'}`}>
              {/* <div className="message-text"> */}

            <div className = 'markdown'>

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {m.text}
              </ReactMarkdown>
            </div>

                {/* </div> */}
              {/* <div className="message-time">{new Date(m.time).toLocaleTimeString()}</div> */}

            </div>
          ))
          }
          
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
      </main>
      
      // </div>
  )
}

export default Chatbox