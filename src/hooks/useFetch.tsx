import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  url: string;
  headers?: { 'X-API-KEY': string } | undefined;
}

function useFetch({ url, headers }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        setData(response.data);
        setError(null);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        if (e.response) {
          setError(e.response.data.message);
        } else {
          setError('データ取得に失敗しました。');
        }
      }
    };

    fetchData();
  }, [url, headers]);

  return { data, error };
}

export default useFetch;
