import React from 'react';
import RadioButton from '../Atoms/RadioButton';

type RadioValue = 'get_from_3words' | 'get_from_address';

interface Type {
  onChangeRadio: (value: RadioValue) => void;
}

export default function SelectRadio({ onChangeRadio }: Type) {
  return (
    <>
      <RadioButton value="get_from_3words" name="fetch_type" text="3つの単語から取得する" onChange={onChangeRadio} />
      <RadioButton value="get_from_address" name="fetch_type" text="住所から取得する" onChange={onChangeRadio} />
    </>
  );
}
