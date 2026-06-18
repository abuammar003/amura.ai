import React, {createContext, useState, useRef, useEffect} from 'react';
import {generateResponse} from "../api";

const ChatContext = createContext();

function ContextProvider({children}) {    

    const [chats, setChats] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('chat_history') || '[]');
    } catch {
      return [];
    }
  });
  

  // ?  
  const [activeId, setActiveId] = useState(chats.length ? chats[0].id : null);

  //Stores what user Types.
  const [input, setInput] = useState('');

  //Used to Automatic Scrolling.
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(chats));
  }, [chats]);


  //works as e.g- we have Chat1, Chat2, Chat3=> if we are Active on Chat2 & we Delete it then it automatically goes to Chat3 (top on it).
  useEffect(() => {
    // keep activeId valid after chats change
    if (chats.length && !chats.find(c => c.id === activeId)) {
      setActiveId(chats[0].id);
    } else if (!chats.length) {
      setActiveId(null);
    }
  }, [chats, activeId]);


  // Auto Scroll to the Latest Message.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeId, chats]);


  //Creates New Chat.
  function createNewChat() {
    const id = Date.now().toString();      //Creates Unique ID.
    // console.log(id)

    const newChat = { id, title: `Chat ${chats.length + 1}`, messages: [] };   //{id=123, Chat1, msgs:[]}
    setChats(prev => [newChat, ...prev]);  //Stores new Chat on Begenning.
    setActiveId(id);   //Opens Newly created chat.
    setInput('');    //Clear input box.
  }

  //Selects Active Chat.
  function selectChat(id) {
    setActiveId(id);    // Click on Chat2 in sidebar - Chat2 will Opens.
    setInput('');
  }


  async function sendMessage() {
    const text = input.trim();   //Removes Extra Spaces => " hello " becomes "hello".

    if (!text || !activeId) return;    //if no text in input field or No Chats Msg will not be sent.


    
    //New Functionality (Wiith AI API key).

    //User Message.
    setChats(prev =>
      prev.map(c =>
        c.id === activeId
          ? { ...c, messages: [...c.messages, { id: Date.now().toString(), 
            sender: 'me', 
            text, 
            time: new Date().toISOString() }] }
          : c
      )
    );
    setInput('');

    // AI Reply.
    const aiReply = await generateResponse(text);

    // setTimeout(() => {
      setChats(prev =>
        prev.map(c =>
          c.id === activeId
            ? {
                ...c,
                messages: [
                  ...c.messages,
                  { id: Date.now().toString() + '-bot', 
                    sender: 'bot',
                     text: aiReply, 
                     time: new Date().toISOString() }
                ]
              }
            : c
        )
      );
    // }, 700);
  }


    
    // //Prev. Functionality (Wiithout AI API key).
    //   setChats(prev =>
    //   prev.map(c =>
    //     c.id === activeId
    //       ? { ...c, messages: [...c.messages, { id: Date.now().toString(), sender: 'me', text, time: new Date().toISOString() }] }
    //       : c
    //   )
    // );
    // setInput('');

    // // simple simulated reply/Auto Reply.
    // setTimeout(() => {
    //   setChats(prev =>
    //     prev.map(c =>
    //       c.id === activeId
    //         ? {
    //             ...c,
    //             messages: [
    //               ...c.messages,
    //               { id: Date.now().toString() + '-bot', sender: 'bot', text: 'Auto-reply: ' + text, time: new Date().toISOString() }
    //             ]
    //           }
    //         : c
    //     )
    //   );
    // }, 700);



  function removeChat(id) {
    setChats(prev => prev.filter(c => c.id !== id));
    if (id === activeId) {
      const remaining = chats.filter(c => c.id !== id);
      setActiveId(remaining.length ? remaining[0].id : null);
    }
  }


   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
      function toggleSidebar() {
          if(isSidebarOpen === true) {
          setIsSidebarOpen(false);
          } else {
          setIsSidebarOpen(true);
          }
      }

      function closeSidebar() {
        if(isSidebarOpen === true) {
          setIsSidebarOpen(false);
        }
      }


  return (
    <div>
        <ChatContext.Provider value={{ chats, activeId, input, setInput, messagesEndRef, createNewChat, selectChat, sendMessage, removeChat,  isSidebarOpen, toggleSidebar, closeSidebar }}>
          {children}
        </ChatContext.Provider>
    </div>
  )
}

export  { ContextProvider, ChatContext };

