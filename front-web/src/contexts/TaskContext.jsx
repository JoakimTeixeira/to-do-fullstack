import React, { createContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from 'services/taskAPI';

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  TaskContextProvider.propTypes = { children: PropTypes.node.isRequired };

  const [tasks, setTasks] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const cachedId = useRef('');
  const formSubmitButton = useRef('');
  const titleDisable = useRef(false);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const addTasks = (databaseTasks) => {
    setTasks(databaseTasks);
  };

  const updateIsEdit = (boolean) => {
    setIsEdit(boolean);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleEditForm = (task, setTitle, setDescription) => {
    setTitle(task.title);
    setDescription(task.description);
    setIsEdit(true);
    titleDisable.current.disabled = true;
    cachedId.current = task.id;

    formSubmitButton.current.innerText = 'Edit Task';
    formSubmitButton.current.classList.remove('btn-primary');
    formSubmitButton.current.classList.add('btn-dark');
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        addTasks,
        updateIsEdit,
        handleDelete,
        handleEditForm,
        isEdit,
        cachedId,
        formSubmitButton,
        titleDisable,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
