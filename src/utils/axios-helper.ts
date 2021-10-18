import axios from 'axios';
const endpoints: string = process.env.REACT_APP_API_URL

const axiosInstance = axios.create({
  baseURL: endpoints
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Accept: 'application/json',
      'Content-Type': config.headers.isFormData ? 'multipart/form-data' : 'application/json',
      locale: 'en',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error.response.data.errors[0].message);
  },
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      window.location.reload();
    }
    const _error = error.response.data.errors[0].message;
    return Promise.reject(_error);
  },
);

const fetch = axiosInstance;

export default fetch;
