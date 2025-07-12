// src/components/Chat.js
import React from 'react';
import { Container } from 'reactstrap';
import MessageInput from './MessageInput';
import '../App.css'; // Assuming you have a CSS file for styling

const Chat = ({ selectedChat, messages, addMessage, senderName }) => {
    const receiverName = selectedChat || "Receiver";

    return (
        <Container className="chat-container">
            <h5>{selectedChat || 'Select a chat'}</h5>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender === senderName ? 'sent' : 'received'}`}
                    >
                        <strong>{msg.sender}:</strong> {msg.text}
                        <div className="timestamp">{msg.timestamp}</div>
                    </div>
                ))}
            </div>
            <MessageInput addMessage={addMessage} senderName={selectedChat} /> {/* Pass senderName here */}
        </Container>
    );
};

export default Chat;