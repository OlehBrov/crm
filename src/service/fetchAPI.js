import axios from "axios";


export const getCustomersData = (page, limit) => {
    const data = axios.get('https://64625a244dca1a66134434dd.mockapi.io/crm', {
        params: {
            page,
            limit,
      }
  });
  return data;
};

export const filterCustomerData = (query) => {
    const data = axios.get('https://64625a244dca1a66134434dd.mockapi.io/crm', {
        params: {
            filter: query
        }
    })
    return data;
}