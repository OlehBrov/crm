import axios from "axios";


export const getCustomersData = () => {
  const data = axios.get('https://64625a244dca1a66134434dd.mockapi.io/crm');
  return data;
};
