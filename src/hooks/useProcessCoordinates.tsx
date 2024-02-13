import { useMemo } from 'react';
import useFetch from './useFetch';

interface Props {
  address: string;
}

function useProcessCoordinates({ address }: Props) {
  const ACCESS_URL = `https://msearch.gsi.go.jp/address-search/AddressSearch?q=${address}`;
  const { data } = useMemo(() => useFetch({ url: ACCESS_URL }), [ACCESS_URL]);
  const { coordinates }: { coordinates: number[] } = data[0].geometry;

  return coordinates;
}

export default useProcessCoordinates;
