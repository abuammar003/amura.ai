import React, {createContext, useState, useRef, useEffect} from 'react';

const ChatContext = createContext();

function ContextProvider({children}) {    

    const [chats, setChats] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('chat_history') || '[]');
    } catch {
      return [];
    }
  });
  
  const [activeId, setActiveId] = useState(chats.length ? chats[0].id : null);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    // keep activeId valid after chats change
    if (chats.length && !chats.find(c => c.id === activeId)) {
      setActiveId(chats[0].id);
    } else if (!chats.length) {
      setActiveId(null);
    }
  }, [chats, activeId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeId, chats]);

  function createNewChat() {
    const id = Date.now().toString();
    const newChat = { id, title: `Chat ${chats.length + 1}`, messages: [] };
    setChats(prev => [newChat, ...prev]);
    setActiveId(id);
    setInput('');
  }

  function selectChat(id) {
    setActiveId(id);
    setInput('');
  }

  function sendMessage() {
    const text = input.trim();
    if (!text || !activeId) return;
    setChats(prev =>
      prev.map(c =>
        c.id === activeId
          ? { ...c, messages: [...c.messages, { id: Date.now().toString(), sender: 'me', text, time: new Date().toISOString() }] }
          : c
      )
    );
    setInput('');
    // simple simulated reply
    setTimeout(() => {
      setChats(prev =>
        prev.map(c =>
          c.id === activeId
            ? {
                ...c,
                messages: [
                  ...c.messages,
                  { id: Date.now().toString() + '-bot', sender: 'bot', text: 'Auto-reply: ' + text, time: new Date().toISOString() }
                ]
              }
            : c
        )
      );
    }, 700);
  }

  function removeChat(id) {
    setChats(prev => prev.filter(c => c.id !== id));
    if (id === activeId) {
      const remaining = chats.filter(c => c.id !== id);
      setActiveId(remaining.length ? remaining[0].id : null);
    }
  }

  return (
    <div>
        <ChatContext.Provider value={{ chats, activeId, input, setInput, messagesEndRef, createNewChat, selectChat, sendMessage, removeChat }}>
          {children}
        </ChatContext.Provider>
    </div>
  )
}

export  { ContextProvider, ChatContext };

