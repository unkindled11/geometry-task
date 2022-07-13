import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://protest-backend.goit.global',
});

const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};

export const signIn = async body => {
  const { data } = await instance.post('/auth/login', body);
  addToken(data.accessToken);
  return data;
};

export const getCurrentUser = async accessToken => {
  addToken(accessToken);
  try {
    const { data } = await instance.get('/user');
    return data;
    // data return {email}
  } catch (error) {
    removeToken();
    throw error;
  }
};

export const logOut = async () => {
  const { data } = await instance.post('/auth/logout');
  removeToken();
  return data;
};

export default instance;
