import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitAppointment = (data) => api.post('/appointments', data);
export const submitContact = (data) => api.post('/contact', data);
export const subscribeNewsletter = (data) => api.post('/newsletter/subscribe', data);

export default api;
