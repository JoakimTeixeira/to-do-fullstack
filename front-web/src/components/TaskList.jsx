import axios from 'axios';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

export const TaskList = ({ tasks, fetchTasks }) => {
  TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        isFinished: PropTypes.bool,
      })
    ).isRequired,
    fetchTasks: PropTypes.func.isRequired,
  };

  useEffect(() => {
    const fetchDatabase = async () => {
      const databaseTasks = await axios.get('http://localhost:3001/tasks/');
      fetchTasks(databaseTasks.data);
    };
    fetchDatabase();
  }, []);

  return (
    <table className="table table-bordered table-striped table-responsive-sm bg-white mb-5">
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
              const { title, description, _id } = task;
              return (
                <tr key={_id}>
                  <td style={{ minWidth: '50px', maxWidth: '120px', wordWrap: 'break-word' }}>
                    {title}
                  </td>
                  <td style={{ minWidth: '70px', maxWidth: '200px', wordWrap: 'break-word' }}>
                    {description}
                  </td>
                  <td style={{ maxWidth: '100px' }}>
                    <Row className="w-100">
                      <Col md={6}>
                        <button type="submit" className="btn btn-danger m-1">
                          <i className="fas fa-trash-alt" />
                        </button>
                      </Col>
                      <Col md={6}>
                        <button type="submit" className="btn btn-dark m-1">
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
