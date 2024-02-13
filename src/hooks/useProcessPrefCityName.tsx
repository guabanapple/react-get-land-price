import { useMemo } from 'react';
import useFetch from './useFetch';

interface PrefAndCityType {
  prefecture: string;
  city: string;
}
interface Props {
  coordinates: number[];
}

function useProcessPrefCityName({ coordinates }: Props) {
  const longitude = coordinates[1];
  const latitude = coordinates[0];
  const ROOT_URL = 'http://geoapi.heartrails.com/api/json?method=searchByGeoLocation';
  const ACCESS_URL = `${ROOT_URL}&x=${longitude}&y=${latitude}`;

  const { data, error } = useMemo(() => useFetch({ url: ACCESS_URL }), [ACCESS_URL]);

  const returns = {
    error: '',
    prefAndCity: {} as PrefAndCityType,
  };

  // エラーをキャッチした場合
  if (error !== null) {
    returns.error = 'DOES NOT EXISTS';
    return returns;
  }

  returns.prefAndCity = {
    prefecture: data.response.location[0].prefecture,
    city: data.response.location[0].city,
  };

  return returns;
}

export default useProcessPrefCityName;
