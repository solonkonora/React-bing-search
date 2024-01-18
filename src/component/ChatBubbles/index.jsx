import PropTypes from "prop-types"
import styles from "styles.module.css"

const ChatBubble = ({message, origin}) => {

    const direction = origin === "bot"?"left": "right"
    return <div className={`${styles.container} ${styles[direction]}`}>
        {message}
    </div>
}

export default ChatBubble;

ChatBubble.propTypes = {
    message: PropTypes.string,
    origin: PropTypes.string
}