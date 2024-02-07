/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Frame from './components/Templates/Frame';
import FetchW3w from './Fetch/FetctW3w';
import FetchPrefAndCityName from './Fetch/FetchPrefAndCityName';
import FetchPrefCode from './Fetch/FetchPrefCode';
import FetchCityCode from './Fetch/FetchCityCode';
import FetchLandPrice from './Fetch/FetchLandPrice';
import FetchCoordinates from './Fetch/FetchCoordinates';

function App() {
  type RadioValue = 'get_from_3words' | 'get_from_address' | '';
  interface PrefAndCityName {
    prefecture: string;
    city: string;
  }
  interface Pref {
    prefCode: number;
    prefName: string;
  }
  interface City {
    cityCode: number;
    cityName: string;
  }

  const [selectedValue, setSelectedType] = useState<RadioValue>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [w3wResponse, setW3wResponse] = useState<number[] | string>();
  const [prefAndCityName, setPrefAndCityName] = useState<PrefAndCityName>();
  const [prefData, setPrefData] = useState<Pref>();
  const [cityData, setCityData] = useState<City>();
  const [landPrice, setLandPrice] = useState<number>();
  const [coordinates, setCoordinates] = useState<number[]>();

  const handleSubmit = (radioValue: RadioValue, inputText: string) => {
    console.log(`submitted: ${radioValue}, ${inputText}`);
    setSelectedType(radioValue);
    setInputValue(inputText);
  };

  const handleW3wResponse = (response: number[] | string) => {
    setW3wResponse(response);
    console.log(`handle w3w: ${response}`);
  };

  const handleGerReverseResponse = ({ prefecture, city }: PrefAndCityName) => {
    setPrefAndCityName({ prefecture, city });
    console.log(`prefAndCity: ${prefecture}, ${city}`);
  };

  const getCoordinates = (xy: number[]) => {
    const [x, y] = [...xy];
    const reversed = [y, x];
    setCoordinates(reversed);
    console.log(reversed);
  };

  const getPreCode = (pref: Pref) => {
    setPrefData(pref);
    console.log(pref);
  };

  const getCityCode = (city: City) => {
    setCityData(city);
    console.log(city);
  };

  const getLandPrice = (price: number) => {
    setLandPrice(price);
    console.log(price);
  };

  return (
    <div className="App">
      <h3>title</h3>
      <Frame
        inputValue={inputValue}
        selectedValue={selectedValue}
        w3wRes={w3wResponse}
        prefAndCityName={prefAndCityName}
        landPrice={landPrice}
        onSubmit={handleSubmit}
      />

      {selectedValue === 'get_from_3words' && (
        <>
          <FetchW3w type={selectedValue} words={inputValue} setResponse={handleW3wResponse} />
          {Array.isArray(w3wResponse) && (
            <FetchPrefAndCityName coordinates={w3wResponse} setResponse={handleGerReverseResponse} />
          )}

          {prefAndCityName?.prefecture !== undefined && (
            <FetchPrefCode prefectureName={prefAndCityName.prefecture} setPrefData={getPreCode} />
          )}

          {prefData !== undefined && (
            <FetchCityCode prefCode={prefData!.prefCode} cityName={prefAndCityName!.city} setCityData={getCityCode} />
          )}

          {prefData !== undefined && cityData !== undefined && (
            <FetchLandPrice prefCode={prefData.prefCode} cityCode={cityData.cityCode} setLandPrice={getLandPrice} />
          )}
        </>
      )}
      {selectedValue === 'get_from_address' && (
        <>
          <FetchCoordinates address={inputValue} setCoordinates={getCoordinates} />
          {coordinates !== undefined && (
            <>
              <FetchPrefAndCityName coordinates={coordinates} setResponse={handleGerReverseResponse} />
              <FetchW3w type={selectedValue} coordinates={coordinates} setResponse={handleW3wResponse} />
            </>
          )}
          {prefAndCityName?.prefecture !== undefined && (
            <FetchPrefCode prefectureName={prefAndCityName.prefecture} setPrefData={getPreCode} />
          )}

          {prefData !== undefined && (
            <FetchCityCode prefCode={prefData!.prefCode} cityName={prefAndCityName!.city} setCityData={getCityCode} />
          )}

          {prefData !== undefined && cityData !== undefined && (
            <FetchLandPrice prefCode={prefData.prefCode} cityCode={cityData.cityCode} setLandPrice={getLandPrice} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
