/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { stat } from 'fs';
import Frame from './components/Templates/Frame';
import { CityType, PrefType, PrefCityNameType, RadioValue, UserInputs, ApiData } from './contains/types';
import {
  useProcessW3w,
  useProcessCoordinates,
  useProcessPrefCityName,
  useProcessPrefData,
  useProcessCityData,
  useProcessLandPrice,
} from './hooks/hooks';

function App() {
  const defaultUserInput: UserInputs = {
    inputValue: '',
    selectedValue: '',
  };
  const [userInputs, setUserInputs] = useState<UserInputs>(defaultUserInput);
  const [apiData, setApiData] = useState<ApiData>();

  const handleSubmit = (userInputValues: UserInputs) => {
    setUserInputs({
      inputValue: userInputValues.inputValue,
      selectedValue: userInputValues.selectedValue,
    });
  };

  const getLandData = (error: string, prefAndCity: PrefCityNameType) => {
    if (error === 'DOES NOT EXISTS') {
      setApiData((prevData) => ({
        ...prevData!,
        prefData: null,
        cityData: null,
        landPrice: null,
      }));
    } else {
      const prefData = useProcessPrefData({ prefectureName: prefAndCity.prefecture });
      const cityData = useProcessCityData({ prefCode: prefData.prefCode, cityName: prefAndCity.city });
      const landPrice = useProcessLandPrice({ prefCode: prefData.prefCode, cityCode: cityData.cityCode });
      setApiData((prevData) => ({
        ...prevData!,
        prefData,
        cityData,
        landPrice,
      }));
    }
  };

  if (userInputs.selectedValue !== '') {
    if (userInputs.selectedValue === 'get_from_3words') {
      const w3wRes = useProcessW3w({ type: userInputs.selectedValue, words: userInputs.inputValue });
      if (w3wRes === null) {
        setApiData((prevData) => ({
          ...prevData!,
          prefCityName: null,
          prefData: null,
          cityData: null,
          landPrice: null,
        }));
      }
      const { error, prefAndCity } = useProcessPrefCityName(w3wRes.coordinates);
      getLandData(error, prefAndCity);
    } else if (userInputs.selectedValue === 'get_from_address') {
      const coordinates = useProcessCoordinates({ address: userInputs.inputValue });
      const w3wRes = useProcessW3w({ type: userInputs.selectedValue, coordinates });
      const { error, prefAndCity } = useProcessPrefCityName(w3wRes.coordinates);
      getLandData(error, prefAndCity);
    }
  }
  return (
    <div className="App">
      <h3>title</h3>

      <Frame userInputs={userInputs || defaultUserInput} apiData={apiData} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
