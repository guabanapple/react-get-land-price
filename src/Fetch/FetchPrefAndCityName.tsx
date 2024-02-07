/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import axios from 'axios';

const ROOT_URL = 'http://geoapi.heartrails.com/api/json?method=searchByGeoLocation';
interface GeoReverseType {
  prefecture: string;
  city: string;
}
interface Props {
  coordinates: number[];
  setResponse: ({ prefecture, city }: GeoReverseType) => void;
}

export default function FetchPrefAndCityName({ coordinates, setResponse }: Props) {
  const ACCESS_URL = `${ROOT_URL}&x=${coordinates[1]}&y=${coordinates[0]}`;
  useEffect(() => {
    const access = async () => {
      try {
        const { data: response } = await axios.get(ACCESS_URL);
        const prefAndCity = {
          prefecture: response.response.location[0].prefecture,
          city: response.response.location[0].city,
        };
        setResponse(prefAndCity);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    access();
  }, [coordinates]);

  return null;
}
