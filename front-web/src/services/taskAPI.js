import Axios from 'axios';

const putTask = async (description, id) => {
  const taskId = id.current;

  try {
    await Axios.put(
      `https://to-do-fullstack-api.herokuapp.com/tasks/${taskId}`,
      { description },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    throw new Error('Unable to update tasks');
  }
};

const fetchTasks = async () => {
  try {
    const response = await Axios.get('https://to-do-fullstack-api.herokuapp.com/tasks/');
    const allTasks = response.data;

    return allTasks;
  } catch (error) {
    throw new Error('Unable to fetch tasks');
  }
};

const postTask = async (newTask) => {
  try {
    const response = await Axios.post(
      'https://to-do-fullstack-api.herokuapp.com/tasks/register',
      newTask,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const task = response.data;

    return task;
  } catch (error) {
    throw new Error('Unable to post task');
  }
};

const deleteTask = async (id) => {
  try {
    await Axios.delete(`https://to-do-fullstack-api.herokuapp.com/tasks/${id}`, null);
  } catch (error) {
    throw new Error('Unable to delete task');
  }
};

export { putTask, fetchTasks, postTask, deleteTask };
