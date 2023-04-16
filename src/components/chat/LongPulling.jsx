import React, { useEffect, useState } from 'react'
import styles from "./LongPulling.module.scss";
import axios from 'axios';
import { RouteButton } from '../ui/buttons/RouteButton';
import { MainTitle } from '../ui/title/MainTitle';
import { Button } from '../ui/buttons/Button';

export const LongPulling = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    subscribe();
  }, [])

  const subscribe = async () => {
    try {
      const {data} = await axios.get("http://localhost:5000/get-messages");
      setMessages(prev => [data, ...prev]);
      await subscribe();
    } catch (e) {
      setTimeout(() => {
        subscribe();
      }, 500)
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
      <MainTitle name="Chat - Long Pulling" />
      <RouteButton path="/" name="Back" />

      <div className={styles.form}>
        <input 
          className={styles.input} 
          type="text" 
          placeholder="Message"
          value={value}
          onChange={e => setValue(e.target.value)} 
        />
        <Button onClick={sendMessage} name="Send message" />
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
