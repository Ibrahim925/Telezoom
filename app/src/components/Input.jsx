import React from 'react';

const Input = ({ sendMessage, setMessage, message }) => {
      return (
            <div>
                  <input id='messageInput' placeholder='Message' value={message} autoFocus={true} autoComplete='off' onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />            
            </div>
      )
}

export default Input;