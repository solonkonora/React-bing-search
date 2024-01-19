import React, { useState } from 'react';
import styles from './styles.module.css';

const ChatInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={styles.button}>
          <span className={styles.buttonText}>Send</span>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;