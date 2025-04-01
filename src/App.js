import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <div className="max-w-2xl mx-auto">
                    <WeatherInfo />
                    <TaskInput />
                    <TaskList />
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={!isAuthenticated ? <AuthForm /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;