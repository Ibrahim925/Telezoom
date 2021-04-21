import React, { useState, useEffect } from 'react';
import queryString from 'querystring';
import io from 'socket.io-client';

// Importing CSS file
import '../css/Chat.css';

// Importing components
import RoomInfo from './RoomInfo.jsx';
import Input from './Input.jsx';

// Connection options to allow data transfer across multiple origins
const connectionOptions =  {
      "force new connection" : true,
      "reconnectionAttempts": "Infinity", 
      "timeout" : 10000,                  
      "transports" : ["websocket"]
};

let socket;

const Chat = ({ location }) => {
      const [name, setName] = useState('');
      const [room, setRoom] = useState('');
      const [message, setMessage] = useState('');
      const [messages, setMessages] = useState([]);
      const [top, setTop] = useState(0);

      useEffect(() => {
            window.scroll({
                  top: top + 100,
                  behavior: 'smooth'
            })
            setTop(top + 100)
      }, [messages])

      useEffect(() => {
            socket = io('https://telezoom.herokuapp.com/', connectionOptions);
            const parsed = queryString.parse(location.search);
            const name = parsed['?name'];
            const room = parsed['room'];

            setName(name);
            setRoom(room);

            socket.emit('join', { name: name, room: room });
      }, [location.search]);

      useEffect(() => {
            socket.on('message', message => {
                  console.log("MESSAGE: " + JSON.stringify(message))
                  setMessages(messages => [...messages, message]);
            });
      }, []);

      const sendMessage = (event) => {
            event.preventDefault();

            if (message) {
                  socket.emit('send message', message);
                  setMessage('');
            }
      }

      console.log(messages);

      return (
            <div className='chatDiv'>
                  <RoomInfo room={room} />
                  <Input sendMessage={sendMessage} setMessage={setMessage} message={message} />
                  {messages.map((message, key) => <p key={key} id={message['user'] === 'You' && message['user'] !== 'Admin' ? 'myMessage' : 'otherMessage'}>{message['user'] !== 'Admin' ? message['user'] + ': ' : null}{message['text']}</p>)}
                  {/* {users.map((user, key) => <p key={key} style={{color: 'white'}}>{user.name}</p>)} */}
            </div>
      )
}

export default Chat;