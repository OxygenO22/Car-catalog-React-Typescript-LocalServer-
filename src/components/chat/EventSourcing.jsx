import React, { useEffect, useState } from 'react'
import styles from "./LongPulling.module.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';

export const EventSourcing = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    subscribe();
  }, [])

  const subscribe = async () => {
   const eventSource = new EventSource("http://localhost:5000/connect");
   eventSource.onmessage = function (event) {
    const message = JSON.parse(event.data);
    setMessages(prev => [message, ...prev]);
   }
  }

  const sendMessage = async () => {
    await axios.post("http://localhost:5000/new-messages", {
      message: value,
      id: Date.now()
    })
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Cars Chat</h1>
      <Link style={{color: "white", marginBottom: "20px"}} to="/">Back</Link>

      <div className={styles.form}>
        <input 
          className={styles.input} 
          type="text" 
          placeholder="Message"
          value={value}
          onChange={e => setValue(e.target.value)} 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div >
        {messages.map(mess => 
          <div className={styles.message} key={mess.id}>
            {mess.message}
          </div>
        )}
      </div>
    </div>
  )
}
