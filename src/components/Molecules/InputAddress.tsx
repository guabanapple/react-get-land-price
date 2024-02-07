import React, { useState } from 'react';
import FormInput from '../Atoms/FormInput';

interface Props {
  getInputValue: (inputValue: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function InputAddress({ getInputValue }: Props) {
  const [inputValue, setInputValue] = useState<string>('');

  // inputNameはエラーハンドリングのため使用、要改善
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setInputValue(e.currentTarget.value);
    getInputValue(e.currentTarget.value);
  };

  return (
    <fieldset>
      <legend>住所を入力してください</legend>
      <FormInput inputName="" text="住所" value={inputValue} onChange={handleInputChange} />
    </fieldset>
  );
}
