import { useState } from "react";
import { Input } from "../../ui/input/Input";
import { Button } from "../../ui/buttons/Button";

export const AuthForm = ({title, handleClick}: any) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <Input
        type="email"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Input
        type="password"
        value={pass}
        onChange={(e: any) => setPass(e.target.value)}
        placeholder="password"
      />
      <Button name={title} onClick={() => handleClick(email, pass)} />
    </div>
  );
}
