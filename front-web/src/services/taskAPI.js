import Axios from 'axios';

const ROOT_API_URL = 'https://to-do-fullstack-api.herokuapp.com';
const TASKS_API = 'tasks';

const putTask = async (description, id) => {
  const taskId = id.current;

  try {
    await Axios.put(
      `${ROOT_API_URL}/${TASKS_API}/${taskId}`,
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
    const response = await Axios.get(`${ROOT_API_URL}/${TASKS_API}/`);
    const allTasks = response.data;

    return allTasks;
  } catch (error) {
    throw new Error('Unable to fetch tasks');
  }
};

const postTask = async (newTask) => {
  try {
    const response = await Axios.post(`${ROOT_API_URL}/${TASKS_API}/register`, newTask, {
      headers: { 'Content-Type': 'application/json' },
    });
    const task = response.data;

    return task;
  } catch (error) {
    throw new Error('Unable to post task');
  }
};

const deleteTask = async (id) => {
  try {
    await Axios.delete(`${ROOT_API_URL}/${TASKS_API}/${id}`, null);
  } catch (error) {
    throw new Error('Unable to delete task');
  }
};

export { putTask, fetchTasks, postTask, deleteTask };
