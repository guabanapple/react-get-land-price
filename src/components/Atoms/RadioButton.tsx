import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

type RadioValue = 'get_from_3words' | 'get_from_address';

interface Type {
  name: string;
  value: RadioValue;
  text: string;
  onChange: (value: RadioValue) => void;
}

const StyledRadio = styled.input.attrs((props) => ({
  type: 'radio',
  id: props.id,
}))`
  padding: 8px;
  color: orange;
`;

export default function RadioButton(props: Type) {
  const id = nanoid();
  const { name, value, text, onChange } = props;
  const handleChangeRadio = (v: RadioValue) => {
    onChange(v);
  };
  return (
    <label htmlFor={id}>
      <StyledRadio id={id} name={name} value={value} onChange={() => handleChangeRadio(value)} />
      {text}
    </label>
  );
}
