// import React, {useContext} from 'react';
// import { ChatContext } from '../../Context/ContextProvider';
// import './Chatbox.css';

// // react-markdown: is a React component that converts Markdown text into React elements.
// import ReactMarkdown from 'react-markdown';      
// import remarkGfm from 'remark-gfm';
// import rehypeHighlight from 'rehype-highlight';
// import 'highlight.js/styles/github.css';


// function Chatbox() { 
//     const { chats, activeId, input, setInput,
//          messagesEndRef, sendMessage, closeSidebar } = useContext(ChatContext);

//   const activeChat = chats.find(c => c.id === activeId);

//   return (
//     // <div>

//          <main className="panel" onClick={closeSidebar}>

//         <header className="panel-header">{activeChat ? activeChat.title : 'Select or create a chat'}</header>

//         <section className="messages">

//           {!activeChat && <div className="placeholder">No chat selected.</div>}
          
//           {activeChat && activeChat.messages.length === 0 && <div className="placeholder">How can i help you today?</div>}

//           {activeChat &&
//            activeChat.messages.map(m => (
//             <div key={m.id} className={`message ${m.sender === 'me' ? 'me' : 'bot'}`}>
//               {/* <div className="message-text"> */}

//             <div className = 'markdown'>

//               <ReactMarkdown
//                 remarkPlugins={[remarkGfm]}
//                 rehypePlugins={[rehypeHighlight]}
//               >
//                 {m.text}
//               </ReactMarkdown>
//             </div>

//                 {/* </div> */}
//               {/* <div className="message-time">{new Date(m.time).toLocaleTimeString()}</div> */}

//             </div>
//           ))
//           }
          
//           <div ref={messagesEndRef} />
//         </section>

//         <div className="composer">
//           <input
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
//             placeholder={activeChat ? 'Type a message...' : 'Select a chat to start ...'}
//             disabled={!activeChat}
//           />
//           <button className="btn" onClick={sendMessage} disabled={!activeChat || !input.trim()}>Send</button>
//         </div>
//       </main>
      
//       // </div>
//   )
// }

// export default Chatbox








// =============== Updated UI ====================

import React, { useContext } from 'react';
import { ChatContext } from '../../Context/ContextProvider';
import './Chatbox.css';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import 'highlight.js/styles/github.css';

function Chatbox() {

  const {
    chats,
    activeId,
    input,
    setInput,
    messagesEndRef,
    sendMessage,
    closeSidebar
  } = useContext(ChatContext);

  const activeChat = chats.find(c => c.id === activeId);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() && activeChat) {
      sendMessage();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const suggestions = [
    "Explain React hooks with examples",
    "Help me debug my code",
    "Write a JavaScript function",
    "Give me project ideas"
  ];

  return (
    <main className="panel" onClick={closeSidebar}>

      {/* Chat Header */}
      <header className="panel-header">
        <div className="chat-heading">
          <span className="status-dot"></span>

          <div>
            <h2>{activeChat ? activeChat.title : 'New conversation'}</h2>
            <p>AI Assistant</p>
          </div>
        </div>

        <div className="header-badge">
          <span>✦</span> Amura AI
        </div>
      </header>


      {/* Messages Section */}
      <section className="messages">

        {!activeChat && (
          <div className="empty-state">
            <div className="empty-icon">✦</div>
            <h2>Welcome to Amura.ai</h2>
            <p>Select an existing conversation or create a new chat to get started.</p>
          </div>
        )}


        {activeChat && activeChat.messages.length === 0 && (
          <div className="welcome-state">

            <div className="welcome-icon">✦</div> 

            <h1>What can I help you with?</h1>

            <p>
              Ask anything, explore ideas, or get help with your next project.
            </p>

            <div className="suggestion-grid">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="suggestion-card"
                  onClick={() => setInput(suggestion)}
                >
                  <span>{suggestion}</span>
                  <span className="suggestion-arrow">↗</span>
                </button>
              ))}
            </div>

          </div>
        )}


        {activeChat && activeChat.messages.map(m => (

          <div
            key={m.id}
            className={`message-row ${m.sender === 'me' ? 'user-row' : 'bot-row'}`}
          >

            {/* {m.sender !== 'me' && (
              <div className="message-avatar bot-avatar">✦</div>
            )} */}

            <div className={`message ${m.sender === 'me' ? 'me' : 'bot'}`}>

              <div className="message-label">
                {m.sender === 'me' ? 'You' : 'Amura AI'}
              </div>

              <div className="markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {m.text}
                </ReactMarkdown>
              </div>

            </div>

            {/* {m.sender === 'me' && (
              <div className="message-avatar user-avatar">U</div>
            )} */}

          </div>

        ))}

        <div ref={messagesEndRef} />

      </section>


      {/* Message Composer */}
      <div className="composer-wrapper">

        <form className="composer" onSubmit={handleSubmit}>

          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              activeChat
                ? 'Message Amura AI...'
                : 'Select a chat to start...'
            }
            disabled={!activeChat}
            rows="1"
          />

          <button
            type="submit"
            className="send-btn"
            disabled={!activeChat || !input.trim()}
            aria-label="Send message"
            title="Send message"
          >
            ↑
          </button>

        </form>

        <p className="composer-note">
          Amura AI can make mistakes. Verify important information.
        </p>

      </div>

    </main>
  );
}

export default Chatbox;
