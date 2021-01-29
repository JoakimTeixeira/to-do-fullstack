import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

  return (
    <TaskContext.Provider value={{ tasks, addTasks, fetchTasks }}>{children}</TaskContext.Provider>
  );
};
