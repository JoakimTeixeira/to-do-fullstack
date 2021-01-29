import React from 'react';
import { Container } from 'react-bootstrap';
import { TaskForm } from 'components/TaskForm';
import { TaskContextProvider } from 'contexts/TaskContext';

function App() {
  return (
    <Container>
      <section className="col-12 col-lg-7 mx-auto">
        <TaskContextProvider>
          <TaskForm />
        </TaskContextProvider>
      </section>
    </Container>
  );
}

export default App;
