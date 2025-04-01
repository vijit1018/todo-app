import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, clearWeatherError } from '../features/weather/weatherSlice';
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from 'react-icons/wi';

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);
  const defaultCity = 'London'; // Default city to fetch weather for

  useEffect(() => {
    dispatch(fetchWeather(defaultCity));
    
    // Clear any previous errors when component unmounts
    return () => {
      dispatch(clearWeatherError());
    };
  }, [dispatch]);

  const getWeatherIcon = (weatherId) => {
    if (!weatherId) return <WiDaySunny size={48} />;
    if (weatherId >= 200 && weatherId < 300) return <WiThunderstorm size={48} />;
    if (weatherId >= 300 && weatherId < 600) return <WiRain size={48} />;
    if (weatherId >= 600 && weatherId < 700) return <WiSnow size={48} />;
    if (weatherId >= 700 && weatherId < 800) return <WiCloudy size={48} />;
    return <WiDaySunny size={48} />;
  };

  const handleRetry = () => {
    dispatch(fetchWeather(defaultCity));
  };

  if (loading) return <div className="text-center py-4">Loading weather...</div>;
  
  if (error) return (
    <div className="bg-red-50 p-4 rounded-lg mb-6">
      <div className="text-red-500 text-center">
        <p>Error fetching weather: {error}</p>
        <button 
          onClick={handleRetry}
          className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );

  return (
    data && (
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Current Weather in {data.name}</h3>
        <div className="flex items-center gap-4">
          <div className="text-blue-500">
            {getWeatherIcon(data.weather[0]?.id)}
          </div>
          <div>
            <p className="text-xl font-bold">{Math.round(data.main?.temp)}°C</p>
            <p className="capitalize">{data.weather[0]?.description}</p>
            <p className="text-sm">Humidity: {data.main?.humidity}%</p>
          </div>
        </div>
      </div>
    )
  );
};

export default WeatherInfo;