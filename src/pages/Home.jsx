// src/pages/Home.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChatList from '../components/ChatList';
import Chat from '../components/Chat';
import CustomNavbar from '../components/Navbar';

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const senderName = "YourName"; // Replace with the actual sender's name

  const chats = ['Elkhateeb', 'Ali', 'Yasser'];

  const addMessage = (msg) => {
    setMessages((prevMessages) => [...prevMessages, msg]);
  };

  return (
    <Container fluid>
      <CustomNavbar />
      <Row>
        <Col xs="4" className="chat-list">
          <ChatList chats={chats} selectChat={setSelectedChat} />
        </Col>
        <Col xs="8">
          <Chat 
            selectedChat={selectedChat} 
            messages={messages} 
            addMessage={addMessage} 
            senderName={senderName} // Pass senderName here
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;