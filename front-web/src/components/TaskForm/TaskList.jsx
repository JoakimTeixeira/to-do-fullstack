import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { TaskContext } from 'contexts/TaskContext';
import PropTypes from 'prop-types';

export const TaskList = ({ setTitle, setDescription }) => {
  TaskList.propTypes = {
    setTitle: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
  };

  const { tasks, fetchTasks, handleDelete, handleEditForm } = useContext(TaskContext);

  useEffect(() => {
    const fetchDatabase = async () => {
      const databaseTasks = await axios.get('http://localhost:3001/tasks/');
      fetchTasks(databaseTasks.data);
    };
    fetchDatabase();
  }, []);

  return (
    <table className="table table-bordered table-striped bg-white mb-5">
      {tasks.length > 0 && (
        <>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => {
              const { title, description, id } = task;
              return (
                <tr key={id}>
                  <td style={{ width: '30%', maxWidth: '70px', wordWrap: 'break-word' }}>
                    {title}
                  </td>
                  <td style={{ width: '47%', maxWidth: '100px', wordWrap: 'break-word' }}>
                    {description}
                  </td>
                  <td style={{ width: '23%', maxWidth: '40px' }}>
                    <Row className="w-100">
                      <Col md={6}>
                        <button
                          type="submit"
                          className="btn btn-danger m-1"
                          onClick={() => handleDelete(id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                      </Col>
                      <Col md={6}>
                        <button
                          type="submit"
                          className="btn btn-dark m-1"
                          onClick={() => handleEditForm(task, setTitle, setDescription)}
                        >
                          <i className="fas fa-edit" />
                        </button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      )}
    </table>
  );
};
