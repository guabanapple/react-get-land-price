import { useMemo } from 'react';
import useFetch from './useFetch';

interface Props {
  year?: number;
  prefCode: number;
  cityCode: number;
  displayType?: number;
}

function useProcessLandPrice({ prefCode, cityCode, year = 2021, displayType = 1 }: Props) {
  const ROOT_URL = 'https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?';
  const ACCESS_URL = `${ROOT_URL}&year=${year}&prefCode=${prefCode}&cityCode=${cityCode}&${displayType}`;
  const API_KEY = process.env.REACT_APP_RESAS_API_KEY;

  const { data } = useMemo(
    () => useFetch({ url: ACCESS_URL, headers: API_KEY ? { 'X-API-KEY': API_KEY } : undefined }),
    [ACCESS_URL]
  );

  const landPrice: number | null = data ? data.years.result.years[0].value : null;
  return landPrice;
}

export default useProcessLandPrice;
