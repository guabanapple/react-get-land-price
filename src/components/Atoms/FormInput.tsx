/* eslint-disable react/require-default-props */
import React from 'react';
import { nanoid } from 'nanoid';

import styled from 'styled-components';

const StyledInput = styled.input.attrs({
  type: 'text',
})`
  &:focus {
    border: 1px solid gray;
  }
`;

interface Props {
  text: string;
  inputName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => void;
}

// eslint-disable-next-line react/require-default-props
export default function FormInput({ text, inputName, value, onChange }: Props) {
  const id = nanoid();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (inputName !== undefined) {
  //     onChange(e, inputName); // inputNameが指定されている場合
  //   } else {
  //     onChange(e); // inputNameが指定されていない場合
  //   }
  // };

  return (
    <label htmlFor={id}>
      {text}
      {/* <StyledInput id={id} value={value} onChange={handleChange} /> */}
      <StyledInput id={id} value={value} onChange={(e) => onChange(e, inputName)} />
    </label>
  );
}
