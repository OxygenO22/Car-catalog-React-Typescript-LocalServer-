import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/buttons/Button";
import { MainTitle } from "../ui/title/MainTitle";
import { RouteButton } from "../ui/buttons/RouteButton";
import styles from "./LongPulling.module.scss";

export const EventSourcing = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = async () => {
    const eventSource = new EventSource("http://localhost:5000/connect");
    eventSource.onmessage = function (event) {
      const message = JSON.parse(event.data);
      setMessages(prev => [message, ...prev]);
    };
  };

  const sendMessage = async () => {
    await axios.post("http://localhost:5000/new-messages", 
    {
      message: value,
      id: Date.now()
    });
  };

  return (
    <div className={styles.wrapper}>
      <MainTitle name="Chat - Event Sourcing" />
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
  );
};
