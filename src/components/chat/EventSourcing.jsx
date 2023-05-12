import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/buttons/Button";
import styles from "./LongPulling.module.scss";
import { Input } from "../ui/input/Input";
import { Header } from "../ui/header/Header";

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
      <Header place="chatES" />

      <div className={styles.form}>
        <Input 
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
