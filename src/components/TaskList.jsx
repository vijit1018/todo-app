import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from '../features/tasks/tasksSlice';
import { FaTrash, FaCheck, FaUndo } from 'react-icons/fa';
import { format } from 'date-fns';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const weather = useSelector((state) => state.weather);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 border-red-500';
      case 'medium':
        return 'bg-yellow-100 border-yellow-500';
      case 'low':
        return 'bg-green-100 border-green-500';
      default:
        return 'bg-gray-100 border-gray-500';
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleComplete = (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    dispatch(updateTask(updatedTask));
  };

  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No tasks yet. Add one above!</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 border-l-4 rounded-lg shadow-sm ${getPriorityColor(task.priority)} ${
              task.completed ? 'opacity-70' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleComplete(task)}
                    className={`p-1 rounded-full ${task.completed ? 'bg-green-500 text-white' : 'border border-gray-300'}`}
                  >
                    {task.completed ? <FaCheck size={12} /> : <FaUndo size={12} />}
                  </button>
                  <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.text}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {format(new Date(task.createdAt), 'MMM dd, yyyy HH:mm')}
                </div>
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <FaTrash />
              </button>
            </div>
            {task.text.toLowerCase().includes('outdoor') && weather.data && (
              <div className="mt-2 text-sm bg-white p-2 rounded">
                <p>Weather for outdoor activities: {weather.data.weather[0].description}</p>
                <p>Temperature: {weather.data.main.temp}°C</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;