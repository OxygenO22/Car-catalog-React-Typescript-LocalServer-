import React, { FC } from 'react'
import { Input } from '../../ui/input/Input';
import { Button } from '../../ui/buttons/Button';

interface IInputField {
  text: string;
  handleInput: any;
  handleSubmit: any;
}

export const InputField: FC<IInputField> = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <Input
        placeholder="Add to do"
        value={text}
        onChange={(e: any) => handleInput(e.target?.value)}
      />
      <Button onClick={handleSubmit} name="Add To Do" />
    </label>
  );
};
