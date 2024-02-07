import React from 'react';
import ShowResultFrom3words from '../Molecules/ShowResultFrom3words';
import ShowResultFromAddress from '../Molecules/ShowResultFromAddress';

type RadioValue = 'get_from_3words' | 'get_from_address' | '';
interface PrefAndCityName {
  prefecture: string;
  city: string;
}
interface Props {
  inputValue: string;
  selectedValue: RadioValue;
  w3wRes: number[] | string;
  prefAndCityName: PrefAndCityName;
  landPrice: number;
}

function ShowResult({ inputValue, selectedValue, w3wRes, prefAndCityName, landPrice }: Props) {
  return selectedValue === 'get_from_3words' ? (
    <ShowResultFrom3words inputValue={inputValue} prefAndCityName={prefAndCityName} landPrice={landPrice} />
  ) : (
    <ShowResultFromAddress inputValue={inputValue} w3wRes={w3wRes} landPrice={landPrice} />
  );
}

export default ShowResult;
