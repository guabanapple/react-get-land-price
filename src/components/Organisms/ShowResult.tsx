import React from 'react';
import ShowResultFrom3words from '../Molecules/ShowResultFrom3words';
import ShowResultFromAddress from '../Molecules/ShowResultFromAddress';
import { UserInputs, ApiData } from '../../contains/types';

interface Props {
  userInputs: UserInputs;
  apiData: ApiData;
}

function ShowResult({ userInputs, apiData }: Props) {
  if (userInputs.selectedValue === 'get_from_3words') {
    if (apiData.prefCityName === null || apiData.landPrice === null) return null;
    return (
      <ShowResultFrom3words
        inputValue={userInputs.inputValue}
        prefAndCityName={apiData.prefCityName}
        landPrice={apiData.landPrice}
      />
    );
  }
  if (userInputs.selectedValue === 'get_from_address') {
    if (apiData.w3wResponse === null || apiData.landPrice === null) return null;
    return (
      <ShowResultFromAddress
        inputValue={userInputs.inputValue}
        w3wRes={apiData.w3wResponse}
        landPrice={apiData.landPrice}
      />
    );
  }

  return null;
}

export default ShowResult;
