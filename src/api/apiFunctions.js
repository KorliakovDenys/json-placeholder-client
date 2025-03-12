import ApiWrapper from "./apiWrapper.js";

const API = new ApiWrapper();

export const listPostsApi = () => {
  return API.get('/posts');
}

export const createPostApi = (data) => {
  return API.post('/posts', data);
}

export const updatePostApi = (id, data) => {
  return API.put(`/posts/${id}`, data);
}

export const getPostApi = (id) => {
  return API.get(`/posts/${id}`);
}

export const deletePostApi = (id) => {
  return API.delete(`/posts/${id}`);
}