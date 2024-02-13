import { useMemo } from 'react';
import useFetch from './useFetch';

type RadioValue = 'get_from_3words' | 'get_from_address' | '';
interface Props {
  type: RadioValue;
  coordinates?: number[];
  words?: string;
}

function useProcessW3w({ type, coordinates, words }: Props) {
  const API_KEY = process.env.REACT_APP_WHAT3WORDS_API_KEY;
  let ACCESS_URL = '';
  if (type === 'get_from_3words' && words !== undefined) {
    ACCESS_URL = `https://api.what3words.com/v3/convert-to-coordinates?words=${words}&key=${API_KEY}`;
  } else if (type === 'get_from_address' && coordinates !== undefined) {
    const longitude = coordinates[1];
    const latitude = coordinates[0];
    ACCESS_URL = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${latitude},${longitude}&language=ja&key=${API_KEY}`;
  }

  const { data, error } = useMemo(() => useFetch({ url: ACCESS_URL }), [ACCESS_URL]);

  if (!data || error !== null) {
    return null;
  }

  if (type === 'get_from_3words') {
    return [data.coordinates.lat, data.coordinates.lng];
  }
  if (type === 'get_from_address') {
    return data.words;
  }
  return null;
}

export default useProcessW3w;
