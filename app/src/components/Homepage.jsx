import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Homepage.css';

const Homepage = () => {
      const [name, setName] = useState('');
      const [room, setRoom] = useState('');

      return (
            <div className='homepagediv'>
                  <h1 id='header'>TELEZOOM</h1>
                  <p id='subtitle'>Created by Ibrahim Khawar</p>
                  <input id='nameInput' placeholder='Username' autoComplete='off' onChange={e => setName(e.target.value)} />
                  <br/>
                  <br/>
                  <input id='roomInput' placeholder='Room' autoComplete='off' onChange={e => setRoom(e.target.value)} />
                  <br/>
                  <br/>
                  <Link to={`/Chat?name=${name}&room=${room}`}>
                        <button id="button" onClick={e => (!name || !room) ? e.preventDefault() : null} disabled={!name || !room} type='submit'>Join</button>
                  </Link>
            </div>
      )
}

export default Homepage;