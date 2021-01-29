import React from 'react';
import { Container } from 'react-bootstrap';
import { TaskForm, TaskList } from 'components';
import { TaskContextProvider } from 'contexts/TaskContext';

function App() {
  return (
    <Container>
      <section className="col-12 col-lg-6 mx-auto">
        <TaskContextProvider>
          <article>
            <TaskForm />
          </article>
          <article>
            <TaskList />
          </article>
        </TaskContextProvider>
      </section>
    </Container>
  );
}

export default App;
