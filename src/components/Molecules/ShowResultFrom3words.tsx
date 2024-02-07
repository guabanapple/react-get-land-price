import React from 'react';

interface PrefAndCityName {
  prefecture: string;
  city: string;
}
interface Props {
  inputValue: string;
  prefAndCityName: PrefAndCityName;
  landPrice: number;
}

function ShowResultFrom3words({ inputValue, prefAndCityName, landPrice }: Props) {
  return (
    <div>
      <h3>結果</h3>
      <p>3単語 : {inputValue}</p>
      <p>
        住所 : {prefAndCityName.prefecture}
        {prefAndCityName.city}
      </p>
      <p>地価 : {landPrice}円</p>
    </div>
  );
}

export default ShowResultFrom3words;
