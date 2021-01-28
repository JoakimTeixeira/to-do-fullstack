import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description) {
      const newTask = {
        title,
        description,
        isFinished: false,
      };

      axios.post('http://localhost:3001/tasks/register', newTask, {
        headers: { 'Content-Type': 'application/json' },
      });

      cleanFields();
    }
  };

  return (
    <Form className="mt-5 bg-light p-5">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => handleTitle(e)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => handleDescription(e)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
