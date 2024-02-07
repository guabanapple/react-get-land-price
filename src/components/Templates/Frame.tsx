/* eslint-disable react/require-default-props */
import React from 'react';
import FormSet from '../Organisms/FormSet';
import ShowResult from '../Organisms/ShowResult';

type RadioValue = 'get_from_3words' | 'get_from_address' | '';
interface PrefAndCityName {
  prefecture: string;
  city: string;
}
interface Props {
  inputValue: string;
  selectedValue: RadioValue;
  w3wRes?: number[] | string;
  prefAndCityName?: PrefAndCityName;
  landPrice?: number;
  onSubmit: (selectedValue: RadioValue, inputValue: string) => void;
}

function Frame({ inputValue, selectedValue, w3wRes, prefAndCityName, landPrice, onSubmit }: Props) {
  return (
    <div>
      <FormSet onSubmit={onSubmit} />
      {w3wRes !== undefined && prefAndCityName !== undefined && landPrice !== undefined && (
        <ShowResult
          inputValue={inputValue}
          selectedValue={selectedValue}
          w3wRes={w3wRes}
          prefAndCityName={prefAndCityName}
          landPrice={landPrice}
        />
      )}
    </div>
  );
}

export default Frame;
