import React from 'react';
import TaskForm from 'components/TaskForm';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="w-50">
      <TaskForm />
    </Container>
  );
}

export default App;
