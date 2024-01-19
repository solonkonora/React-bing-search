//A chatbot  is a tool that gives automated responses to the questions asked

//### what does the chat bot need to have
//*- a server to generate responses for the questions asked (server here is the package installed, ie bing-chat-api)
//*- it needs a way to get input from the users, we will use a text field here
//*- needs to display chat conversations

import React from "react"
import { useLocalStorage } from "@uidotdev/usehooks"  // this hook contains about 149 useCasese
import './App.module.css'
import api from './api/api'
import styles from "./styles.module.css"
import ChatBubble from './component/ChatBubbles'
import ChatInput from "./component/ChatInput"


function App() {
  const [messages, setMessages] = useLocalStorage("chat-messages", [

    {origin: "user",
       text: "this is my test message"
    },
    {origin: "bot",
      text: "this is my test message"
    }
])


  const sendMessage = async (message) => {
    setMessages ([...messages, {text: message, origin: "user"}])
    const response = await api.sendMessage(message)
    setMessages ([...messages, {text: response, origin: "bot"}])
  }


  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
  {messages.reverse().map((item, index) => {
    return <ChatBubble
        key={`${item.text}-${index}`}
        origin={item.origin}
        message={item.text}
      />
  })}
  </div>
  <ChatInput onSendMessage={sendMessage}/>
</div>
)
}

export default App
