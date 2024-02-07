import { useEffect } from 'react';
import axios from 'axios';

interface Props {
  prefCode: number;
  cityCode: number;
  setLandPrice: (price: number) => void;
}
const YEAR = 2021;
const ROOT_URL = 'https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?';

export default function FetchLandPrice({ prefCode, cityCode, setLandPrice }: Props) {
  const config = {
    year: YEAR,
    prefCode,
    cityCode,
    displayType: 1,
  };
  const ACCESS_URL = `${ROOT_URL}&year=${config.year}&prefCode=${config.prefCode}&cityCode=${config.cityCode}&displayType=1`;

  useEffect(() => {
    const access = async () => {
      try {
        const { data: years } = await axios.get(ACCESS_URL, {
          headers: { 'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY },
        });
        setLandPrice(years.result.years[0].value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    access();
  }, [prefCode, cityCode]);

  return null;
}
