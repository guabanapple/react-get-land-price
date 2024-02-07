/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface PrefType {
  prefCode: number;
  prefName: string;
}
interface Props {
  prefectureName: string;
  setPrefData: (prefData: PrefType) => void;
}

function FetchPrefCode({ prefectureName, setPrefData }: Props) {
  const URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

  const [prefectures, setPrefectures] = useState<PrefType[]>([]);

  useEffect(() => {
    const access = async () => {
      try {
        const { data: result } = await axios.get(URL, {
          headers: { 'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY },
        });
        setPrefectures(result.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    access();
  }, []);

  useEffect(() => {
    const getPrefData = () => {
      console.log(`length: ${prefectures.length}`);
      const pref = prefectures.find((p: PrefType) => p.prefName === prefectureName);
      setPrefData(pref!);
    };

    getPrefData();
  }, [prefectureName, prefectures, setPrefData]);

  return null;
}

export default FetchPrefCode;
