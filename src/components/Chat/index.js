import React, { Component } from "react";



class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
      };
    changeInputMessage = event => {
        const {value} = event.target
        this.setState({
          messageInput: value
        });
      };
      sendMessageOnEnter = event => {
        const { messageInput, messages } = this.state;
        
        if (event.key === 'Enter') {
            if (messageInput !== '') {
            this.setState(
              {
                messageInput: '',
                messages: [...messages, { text: messageInput }]
              },
            );
          }
        }
      };
      
  render() {
    const { messages, messageInput } = this.state;

   return <div className='chat'>
   
   <input className="input-message"
  value={ this.state.messageInput }
  onChange={ this.changeInputMessage }
  onKeyPress= { this.sendMessageOnEnter }
   />
   </div>
   
  }
}


export default Chat;