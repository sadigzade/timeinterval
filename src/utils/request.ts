const API_URL = "https://64a88d62dca581464b85dc01.mockapi.io";

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const request = async (endpoint: string, options = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, options);
  return checkResponse(res);
};
