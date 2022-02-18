import React from 'react';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed.js';
import LoginForm from './Components/LoginForm';


function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <>
    <ChatEngine
    height="100vh"
    projectID="827b5bac-633d-46bd-9490-1137ec5cb517"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
      
    />
    </>
  );
}

export default App;
