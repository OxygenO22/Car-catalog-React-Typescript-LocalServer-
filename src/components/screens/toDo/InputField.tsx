import { FC } from "react";
import { Input } from "../../ui/input/Input";
import { Button } from "../../ui/buttons/Button";

interface IInputField {
  title: string;
  handleInput: (str: string) => void;
  handleSubmit: () => void;
}

export const InputField: FC<IInputField> = ({ title, handleInput, handleSubmit }) => {
  return (
    <label>
      <Input
        placeholder="Add to do"
        value={title}
        onChange={(e: any) => handleInput(e.target?.value)}
      />
      <Button onClick={handleSubmit} name="Add To Do" />
    </label>
  );
};
