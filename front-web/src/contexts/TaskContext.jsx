import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  TaskContextProvider.propTypes = { children: PropTypes.node.isRequired };

  const [tasks, setTasks] = useState([]);

  const addTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const fetchTasks = (databaseTasks) => {
    setTasks(databaseTasks);
  };

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3001/tasks/${id}`, null);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTasks, fetchTasks, handleDelete }}>
      {children}
    </TaskContext.Provider>
  );
};
