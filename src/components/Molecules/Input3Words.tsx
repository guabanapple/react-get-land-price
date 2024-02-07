import React, { useState } from 'react';
import FormInput from '../Atoms/FormInput';

interface Props {
  getInputValue: (inputValue: string) => void;
}
interface Values {
  input1: string;
  input2: string;
  input3: string;
}

export default function Input3Words({ getInputValue }: Props) {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const setInputValue = (values: Values) => {
    const inputValue = `${values.input1}.${values.input2}.${values.input3}`;
    getInputValue(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setInputValues((prevInputValues) => {
      const newValues = { ...prevInputValues, [inputName]: e.target.value };
      setInputValue(newValues);
      return newValues;
    });
  };

  return (
    <fieldset>
      <legend>検索する単語を3つ入力してください。</legend>
      <FormInput inputName="input1" value={inputValues.input1} onChange={handleInputChange} text="単語1" />
      <FormInput inputName="input2" value={inputValues.input2} onChange={handleInputChange} text="単語2" />
      <FormInput inputName="input3" value={inputValues.input3} onChange={handleInputChange} text="単語3" />
    </fieldset>
  );
}
