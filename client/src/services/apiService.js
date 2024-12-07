import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/', // Replace with your server's base URL
});

export const fetchEvents = async () => {
  try {
    const response = await api.get('/events');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const fetchEventDetails = async (id) => {
  try {
    const response = await api.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
};

// Add more API calls as needed...
