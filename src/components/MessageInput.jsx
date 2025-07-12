// src/components/MessageInput.js
import React, { useState } from 'react';
import { Input, Button, InputGroup } from 'reactstrap';

const MessageInput = ({ addMessage, senderName }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      const timestamp = new Date().toLocaleTimeString(); // Get current time
      addMessage({ text: message, sender: senderName, timestamp }); // Use dynamic senderName
      setMessage('');
    }
  };

  return (
    <InputGroup>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <Button color="primary" onClick={sendMessage}>
        Send
      </Button>
    </InputGroup>
  );
};

export default MessageInput;