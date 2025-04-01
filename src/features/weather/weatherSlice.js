import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const API_KEY = '6fca5090b260eb7bbc29216ca1ee2d2d'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      return response.data;
    } catch (error) {
      // Improved error handling
      if (error.response) {
        // The request was made and the server responded with a status code
        return rejectWithValue(error.response.data.message || 'Failed to fetch weather');
      } else if (error.request) {
        // The request was made but no response was received
        return rejectWithValue('Network error - no response from server');
      } else {
        // Something happened in setting up the request
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearWeatherError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearWeatherError } = weatherSlice.actions;
export default weatherSlice.reducer;