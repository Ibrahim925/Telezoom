import React from 'react';

import '../css/RoomInfo.css';

const RoomInfo = (props) => {
      return (
            <div className='roomInfoDiv'>
                  <h1 id='roomInfoHeader'>Telezoom Room: {props.room}</h1>
                  <div className='exitDiv'>
                        <a href="/">x</a>
                  </div>
            </div>
      )
}

export default RoomInfo;