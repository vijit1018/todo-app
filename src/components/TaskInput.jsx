import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('medium');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = {
        id: uuidv4(),
        text: taskText,
        priority,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      dispatch(addTask(newTask));
      setTaskText('');
      setPriority('medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
        >
          <FaPlus /> Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;