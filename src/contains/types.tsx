export interface CityType {
  cityCode: number;
  cityName: string;
}

export interface PrefType {
  prefCode: number;
  prefName: string;
}

export interface PrefCityNameType {
  prefecture: string;
  city: string;
}

export type RadioValue = 'get_from_3words' | 'get_from_address' | '';

export interface UserInputs {
  inputValue: string;
  selectedValue: RadioValue;
}

export interface ApiData {
  w3wResponse: number[] | string | null;
  prefCityName: PrefCityNameType | null;
  prefData: PrefType | null;
  cityData: CityType | null;
  landPrice: number | null;
  coordinates: number[] | null;
}
