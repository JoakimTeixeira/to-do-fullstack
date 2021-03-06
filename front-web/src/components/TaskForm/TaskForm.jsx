import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TaskContext } from 'contexts/TaskContext';
import { putTask, fetchTasks, postTask } from 'services/taskAPI';
import { TaskList } from './TaskList';

export const TaskForm = () => {
  const {
    addTask,
    addTasks,
    updateIsEdit,
    isEdit,
    cachedId,
    formSubmitButton,
    titleDisable,
  } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const cleanFields = () => {
    setTitle('');
    setDescription('');
  };

  const updateEditedTask = async () => {
    await putTask(description, cachedId);

    const databaseTasks = await fetchTasks();
    addTasks(databaseTasks);

    titleDisable.current.disabled = false;
    formSubmitButton.current.innerText = 'Submit';
    formSubmitButton.current.classList.remove('btn-dark');
    formSubmitButton.current.classList.add('btn-primary');

    cachedId.current = null;
    updateIsEdit(false);
    cleanFields();
  };

  const updateNewTask = async () => {
    const newTask = {
      title,
      description,
      isFinished: false,
    };

    const databaseTask = await postTask(newTask);

    addTask(databaseTask);
    cleanFields();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && description) {
      if (isEdit) {
        updateEditedTask();
      } else {
        updateNewTask();
      }
    }
  };

  return (
    <>
      <Form className="mt-5 mb-5 bg-light p-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            ref={titleDisable}
            type="text"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={description} onChange={(e) => handleDescription(e)} />
        </Form.Group>
        <Button
          ref={formSubmitButton}
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>

      <TaskList setTitle={setTitle} setDescription={setDescription} />
    </>
  );
};
