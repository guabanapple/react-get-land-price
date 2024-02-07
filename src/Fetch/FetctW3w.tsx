/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

type RadioValue = 'get_from_3words' | 'get_from_address' | '';
interface Props {
  type: RadioValue;
  coordinates?: number[];
  words?: string;
  setResponse: (response: number[] | string) => void;
}

// 例外処理、エラーハンドリング

export default function FetchW3w({ type, coordinates, words, setResponse }: Props) {
  const apiKey = process.env.REACT_APP_WHAT3WORDS_API_KEY;
  let URL = '';
  if (type === 'get_from_3words' && words !== undefined) {
    URL = `https://api.what3words.com/v3/convert-to-coordinates?words=${words}&key=${apiKey}`;
  } else if (type === 'get_from_address' && coordinates !== undefined) {
    URL = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${coordinates[0]},${coordinates[1]}&language=ja&key=${apiKey}`;
  }

  // 型：anyなので要改善
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleResponseByType = (data: any) => {
    let resultCoordinates = [];
    let resultWords = '';

    if (type === 'get_from_3words') {
      resultCoordinates = [data.coordinates.lat, data.coordinates.lng];
      setResponse(resultCoordinates);
    } else if (type === 'get_from_address') {
      resultWords = data.words;
      setResponse(resultWords);
    }
  };

  useEffect(() => {
    const access = async () => {
      try {
        // const { data } = await axios.get(URL);
        const { data } = await axios.get('http://localhost:4000/data/');
        handleResponseByType(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    access();
  }, [coordinates, words]);

  return null;
}
