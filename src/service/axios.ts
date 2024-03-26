import axios from 'axios';
import {AxiosRequestConfig} from 'axios';

const instance = axios.create({
  baseURL:
    'https://ghost-8a72b-default-rtdb.asia-southeast1.firebasedatabase.app/',
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function (status) {
    return status < 400 || status === 401;
  },
});

instance.interceptors.response.use();

export const onSuccess = (response: any) => {
  console.log('onSuccess');
  return response.data;
};

export const onError = (error: any) => {
  console.log('onError');
  const {data, status} = error?.response;
  return {
    status,
    data,
    message: data.message,
  };
};

export const request = async (option: AxiosRequestConfig) => {
  return instance(option).then(onSuccess).catch(onError);
};
