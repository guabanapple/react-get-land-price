/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface CityType {
  cityCode: number;
  cityName: string;
}
interface Props {
  prefCode: number;
  cityName: string;
  setCityData: (cityData: CityType) => void;
}

function FetchCityCode({ prefCode, cityName, setCityData }: Props) {
  const URL = `https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=${prefCode}`;

  const [cities, setCities] = useState<CityType[]>([]);

  useEffect(() => {
    const access = async () => {
      try {
        const { data: result } = await axios.get(URL, {
          headers: { 'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY },
        });

        setCities(result.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    access();
  }, [prefCode]);

  useEffect(() => {
    const getPrefData = () => {
      const city = cities.find((c: CityType) => c.cityName === cityName);
      setCityData(city!);
    };

    getPrefData();
  }, [cityName, cities, setCityData]);

  return null;
}

export default FetchCityCode;
