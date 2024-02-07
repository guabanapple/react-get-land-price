import React, { useState } from 'react';
import Input3Words from '../Molecules/Input3Words';
import InputAddress from '../Molecules/InputAddress';
import SelectRadio from '../Molecules/SelectRadio';
import Skelton from '../Atoms/Skelton';
import { Button } from '../Atoms/SubmitButton';

type RadioValue = 'get_from_3words' | 'get_from_address' | '';
interface Props {
  onSubmit: (type: RadioValue, value: string) => void;
}

export default function FormSet({ onSubmit }: Props) {
  const [selectedValue, setSelectedValue] = useState<RadioValue>('');
  const [inputValue, setInputValue] = useState<string>('');

  const handleRadioSelected = (value: RadioValue) => {
    setSelectedValue(value);
  };

  const getInputValue = (value: string) => {
    setInputValue(value);
  };

  const handleButtonClick = () => {
    console.log(selectedValue, inputValue);
    onSubmit(selectedValue, inputValue);
  };

  return (
    <>
      <SelectRadio onChangeRadio={handleRadioSelected} />
      {selectedValue.length <= 0 && <Skelton props="" />}
      {selectedValue === 'get_from_3words' && <Input3Words getInputValue={getInputValue} />}
      {selectedValue === 'get_from_address' && <InputAddress getInputValue={getInputValue} />}
      <Button onClick={handleButtonClick}>送信</Button>
    </>
  );
}
