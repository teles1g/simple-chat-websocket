import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Form, Input } from '@rocketseat/unform';

import { Header, SubHeader, Main } from './styles';

const socket = io('http://localhost:3333', { transports: ['websocket'] });

function Chat() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('receive-message', message => {
      if (data) {
        setData([...data, message]);
      } else {
        setData([message]);
      }
    });
  }, [data]);

  const handleSubmit = message => {
    socket.emit('send-message', message);
  };

  return (
    <>
      <Header>
        <h1>Simple Chat WebSocket</h1>
      </Header>
      <SubHeader>
        <Form onSubmit={handleSubmit}>
          <Input name="message" placeholder="type something..." />
          <button type="submit">Send</button>
        </Form>
      </SubHeader>
      <Main>
        <nav>
          {data &&
            data.map((message, index) => (
              <ul key={index.toString()}>
                <li>{message.message}</li>
              </ul>
            ))}
        </nav>
      </Main>
    </>
  );
}

export default Chat;
