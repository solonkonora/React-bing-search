// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ChatInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
{/* <div className={styles.errorMessage}>
        <span className={styles.errorMessagemessage}>error message ...</span>
      </div>

      <div className={styles.messageBox}>
        <span className={styles.messageBoxText}>. . . loading</span>
      </div> */}

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
    </>
  );
};

ChatInput.propTypes = {
  onSendMessage: PropTypes.func,
};

export default ChatInput;
