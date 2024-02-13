import { useMemo } from 'react';
import useFetch from './useFetch';

interface PrefType {
  prefCode: number;
  prefName: string;
}
interface Props {
  prefectureName: string;
}

function useProcessPrefData({ prefectureName }: Props) {
  const API_KEY = process.env.REACT_APP_RESAS_API_KEY;
  const ACCESS_URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
  const { data } = useMemo(
    () => useFetch({ url: ACCESS_URL, headers: API_KEY ? { 'X-API-KEY': API_KEY } : undefined }),
    [prefectureName]
  );

  const prefData: PrefType = data.find((p: PrefType) => p.prefName === prefectureName);

  return prefData;
}

export default useProcessPrefData;
