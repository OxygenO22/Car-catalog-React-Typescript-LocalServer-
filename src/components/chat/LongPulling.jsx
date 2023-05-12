import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/buttons/Button";
import styles from "./LongPulling.module.scss";
import { Input } from "../ui/input/Input";
import { Header } from "../ui/header/Header";

export const LongPulling = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = async () => {
    try {
      const {data} = await axios.get("http://localhost:5001/get-messages");
      setMessages(prev => [data, ...prev]);
      await subscribe();
    } catch (e) {
      setTimeout(() => {
        subscribe();
      }, 500);
    }
  };

  const sendMessage = async () => {
    await axios.post("http://localhost:5001/new-messages", 
    {
      message: value,
      id: Date.now()
    });
  };

  return (
    <div className={styles.wrapper}>
      <Header place="chatLP" />

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
