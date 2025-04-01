import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import tasksReducer from './features/tasks/tasksSlice';
import weatherReducer from './features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    weather: weatherReducer,
  },
});