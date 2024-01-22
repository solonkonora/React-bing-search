// eslint-disable-next-line no-unused-vars
import React from "react";

import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ChatBubble = ({ message, origin }) => {
  const direction = origin === "bot" ? "left" : "right";

  return (
    <>
    <div className={styles.errorMessage}>
        <span className={styles.errorMessagemessage}>error message ...</span>
      </div>
    <div className={styles.messageBox}>
        <span className={styles.messageBoxText}>. . . loading</span>
      </div>

    

      <div className={`${styles.container} ${styles[direction]}`}>
        <div className={styles.bubbleContent}>{message}</div>
      </div>
    </>
  );
};

export default ChatBubble;

ChatBubble.propTypes = {
  message: PropTypes.string,
  origin: PropTypes.string,
};
