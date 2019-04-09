import { api } from 'directual';


export const getResidenceById = id =>
  api
    .structure('dataResidence')
    .sendData('getResidence', { id })
    .then((response) => {
      if (response.status.toLowerCase() === 'ok') {
        return response.result[0];
      }
      return '';
    })
    .catch((err) => {
      console.warn(err);
    });
