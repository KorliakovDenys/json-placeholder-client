import httpClient from "./httpClient.js";

class ApiWrapper {
  async get(endpoint, config) {
    const response = await httpClient.get(endpoint, config);
    return response.data;
  }

  async post(endpoint, data, config) {
    const response = await httpClient.post(endpoint, data, config);
    return response.data;
  }

  async put(endpoint, data, config) {
    const response = await httpClient.put(endpoint, data, config);
    return response.data;
  }

  async delete(endpoint, config) {
    const response = await httpClient.delete(endpoint, config);
    return response.data;
  }
}

export default ApiWrapper;
