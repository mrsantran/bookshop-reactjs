import axios, { AxiosError, AxiosResponse } from 'axios';
import Network from '../config/Network';
import BaseConfig from '../config';
import { CUSTOMER_TOKEN } from '../config/Constants';

const getToken = () => {
  const customerToken = localStorage.getItem(CUSTOMER_TOKEN);
  return customerToken;
};

export const isValidToken = () => {
  const token = localStorage.getItem(CUSTOMER_TOKEN);
  return token && Object.keys(token).length !== 0 && token.constructor !== Object;
}

// create an axios instance
const service = axios.create({
  baseURL: Network.API_ROOT_DOMAIN, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: BaseConfig.timeoutMS, // request timeout
  headers: {
    'Content-Type': 'application/json',
  }

});

// request interceptor
service.interceptors.request.use(
  async config => {
    const token = getToken();
    console.log('token -> ', token);
    // alert(JSON.stringify(token))
    // do something before request is sent
    if (token && Object.keys(token).length !== 0 && token.constructor !== Object) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // eslint-disable-next-line require-atomic-updates
      config.headers['X-Authorization'] = token;
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // config.headers['Access-Control-Allow-Origin'] = true;
    // config.headers['Access-Control-Allow-Origin'] = 'http://localhost:5000';
    // config.headers['Access-Control-Allow-Credentials'] = true;
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 1 && res.code !== 20000) {
      // TODO:
      // alert(res.msg || res.message || 'Error');

      // Message({
      //   message: res.msg || res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login

      }
      // Handle exception in middleware
      // return Promise.reject(new Error(res.msg || res.message || 'Error'));
    }
    return res;
  },
  (error: any) => {
    const err = error;
    console.log(`err${err}`); // for debug
    if (err.message === 'Network Error') {
      err.message = 'Network error, please check and try again';
    } else {
      err.message = 'Server error, please try again later';
    }
    return Promise.reject(err);
  }
);

export const fetchData = (url: string, options = {}) => {

  return new Promise((resolve, reject) => {
    return axios(url, options)
      .then((response: AxiosResponse) => {
        response.status !== 200 ? reject(response) : resolve(response)

      })
      // .then((response: AxiosResponse) => response.data)
      // .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => {
        return reject(error);
      });
  });
};

export default service;