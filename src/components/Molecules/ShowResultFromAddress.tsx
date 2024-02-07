import React from 'react';

interface Props {
  inputValue: string;
  w3wRes: number[] | string;
  landPrice: number;
}

function ShowResultFromAddress({ inputValue, w3wRes, landPrice }: Props) {
  return (
    <div>
      <h3>結果</h3>
      <p>住所 : {inputValue}</p>
      <p>3単語 : {w3wRes}</p>
      <p>地価 : {landPrice}円</p>
    </div>
  );
}

export default ShowResultFromAddress;
