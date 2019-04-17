import React from 'react';
import Message from 'components/Message';
import './Chat.css';

class Chat extends React.Component {
  state = { messageInput: '', 
  messages: [] };

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState(prevState => ({
        messageInput: '',
        messages: [...prevState.messages, { text: this.state.messageInput }]
      }));
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <Message key={message.text + index} text={message.text} />
            ))}
          </div>
        </div>
        <input
          type="text"
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
      </div>
    );
  }
}

export default Chat;