// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import './App.css'
import api from './api/api'
import ChatInput from './component/ChatInput'

import styles from "./styles.module.css"
import ChatBubble from "./component/ChatBubbles";


//  * We are implementing a chatbot below the the things we know
//  * about a chat. 
//  * 
//  * A chat bot is a tool that give us automated responses to the questions we ask.
//  * 
//  * ### What does a chat bot needs to have.\
//  * - A chatbot need to have a server to generate responses for the questions we ask. Our server is the package `bing-chat-api`.
//  * - It needs to have a way to get questions from the user. For this, we use an input field in this case, we are using a ChatInput.
//  * - It needs to display chat conversations. ChatBubble


function App() {
  const [messages, setMessages] = useLocalStorage("chat-messages", [
    {
      origin: "user",
      text: "This is my test message"
    },
    {
      origin: "bot",
      text: "This is a test response"
    }
  ])

  const [error, setError] = useState(false)

  const [loading, setLoading] = useState(false)
  
  const sendMessage = async (message) => {
    setError(false)

    setLoading(true)
    setMessages((messages) => [...messages, {text: message, origin: "user"}])
    try {
      const response = await api.sendMessage(message)
      setMessages((messages) => [...messages, {text: response, origin: "bot"}])
    } catch(error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const errorComponent = <ChatBubble origin={"bot"} message={"An Error occurred"} error />

  const loadingState = <ChatBubble message="" origin={"bot"} loading />

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
      {error ? errorComponent : null}
      {loading? loadingState: null}
      {messages.reverse().map((item, index) => {
        return <ChatBubble key={`${item.text}-${index}`} origin={item.origin} message={item.text} />
      })}
      </div>
      <ChatInput onSubmit={sendMessage} />
    </div>
  )
}

export default App
