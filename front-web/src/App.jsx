import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { TaskForm, TaskList } from 'components';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const fetchTasks = (databaseTasks) => {
    setTasks(databaseTasks);
  };

  return (
    <Container>
      <section className="col-12 col-lg-6 mx-auto">
        <article>
          <TaskForm addTasks={addTasks} />
        </article>
        <article>
          <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </article>
      </section>
    </Container>
  );
}

export default App;
