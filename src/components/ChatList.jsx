// src/components/ChatList.js
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ChatList = ({ chats, selectChat }) => {
  return (
    <ListGroup>
      {chats.map((chat, index) => (
        <ListGroupItem key={index} onClick={() => selectChat(chat)}>
          {chat}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ChatList;