
export interface Service {
  title: string;
  details: string;
  price: string;
  popular?: boolean;
}

export interface County {
  name: string;
  cities: string[];
  hub?: boolean;
}
