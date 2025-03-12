import appConfig from "../app/appConfig.js";
import axios from 'axios';

const API_URL = appConfig.apiUrl;
const IS_DEBUG = appConfig.isDebug;

const httpClient = axios.create({baseURL: API_URL});

if (IS_DEBUG) {
  httpClient.interceptors.request.use((config) => {
      console.debug(`>> ${ config.url }`, config?.data);
      return config;
    },
    (error) => {
      console.error('Request error:', error);
      return Promise.reject(error);
    });

  httpClient.interceptors.response.use((response) => {
      console.debug(`<< ${ response.config.url }`, response);
      return response;
    },
    (error) => {
      console.error('Response error:', error);
      return Promise.reject(error);
    });
}

export default httpClient;