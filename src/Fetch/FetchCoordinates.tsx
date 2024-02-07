import { useEffect } from 'react';
import axios from 'axios';

interface Props {
  address: string;
  setCoordinates: (xy: number[]) => void;
}

const ROOT_URL = 'https://msearch.gsi.go.jp/address-search/AddressSearch?q=';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FetchCoordinates({ address, setCoordinates }: Props) {
  const ACCESS_URL = ROOT_URL + address;

  useEffect(() => {
    const access = async () => {
      const { data: geometry } = await axios.get(ACCESS_URL);
      console.log(geometry);
      setCoordinates(geometry[0].geometry.coordinates);
    };
    access();
  }, [address]);

  return null;
}

export default FetchCoordinates;
