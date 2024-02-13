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
        住所 :
        {prefAndCityName.prefecture !== null ? (
          <p>
            {prefAndCityName.prefecture} {prefAndCityName.city}
          </p>
        ) : (
          '住所の取得に失敗しました。（対象地点が海外の場合、取得ができません。）'
        )}
      </p>
      <p>
        地価 :{' '}
        {landPrice !== null ? (
          <p>{landPrice}円</p>
        ) : (
          '地価の取得に失敗しました。（対象地点が海外の場合、取得ができません。）'
        )}
      </p>
    </div>
  );
}

export default ShowResultFrom3words;
