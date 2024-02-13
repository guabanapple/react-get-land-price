import { useMemo } from 'react';
import useFetch from './useFetch';

interface CityType {
  cityCode: number;
  cityName: string;
}
interface Props {
  prefCode: number;
  cityName: string;
}

function useProcessCityData({ prefCode, cityName }: Props) {
  const ACCESS_URL = `https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=${prefCode}`;
  const API_KEY = process.env.REACT_APP_RESAS_API_KEY;

  const { data } = useMemo(
    () => useFetch({ url: ACCESS_URL, headers: API_KEY ? { 'X-API-KEY': API_KEY } : undefined }),
    [ACCESS_URL]
  );
  const cityData: CityType = data.find((c: CityType) => c.cityName === cityName);

  return cityData;
}

export default useProcessCityData;
