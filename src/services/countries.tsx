import axios from 'axios';
export const getAll = () => {
  const request = axios.get(
    'https://studies.cs.helsinki.fi/restcountries/api/all'
  );
  return request.then((request) => request.data);
};
