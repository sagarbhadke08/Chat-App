import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat([...chat, msg]);
    });
  }, [chat]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div>
      <h1>React Chat</h1>
      {chat.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
      <form onSubmit={sendChat}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
