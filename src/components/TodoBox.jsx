import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import Item from "./Item";

const TodoBox = () => {
    const [tasks, setTasks] = useState([]);

    const clickAdd = (values) => {
        setTasks((prevTasks) => [
            {
                uuid: uuidv4(),
                value: values.task,
            },
            ...prevTasks,
        ]);
    };

    const clickDelete = (uuid) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.uuid !== uuid));
    };

    return (
        <div>
            <div className="mb-3">
                <Formik initialValues={{ task: '' }} onSubmit={clickAdd}>
                    <Form className="d-flex">
                        <Field
                            id="task"
                            name="task"
                            placeholder="I am going..."
                            className="form-control me-3"
                        />
                        <button type="submit" className="btn btn-primary">
                            add
                        </button>
                    </Form>
                </Formik>
            </div>
            <div>
                {tasks.map((task) => (
                    <Item key={task.uuid} task={task.value} onRemove={() => clickDelete(task.uuid)} />
                ))}
            </div>
        </div>
    );
};

export default TodoBox;
