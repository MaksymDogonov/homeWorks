import {useState} from "react"
import {Formik, Form, Field} from 'formik';
import RenderPage from "../renderPage/renderPage";
import './todoList.css';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
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
        <main className='main'>
            <h1 className='main_text'> TODO LIST </h1>
            <div className='containet'>
                <div className='row'>
                    <div className='col_form'>
                        <Formik initialValues={{ task: '' }} onSubmit={clickAdd}>
                            <Form className='form'>
                                <div className='form_title'>
                                    <label>Task title</label>
                                    <input type='text' name='title'/>
                                </div>
                                <div className='form_body'>
                                    <label>Task body</label>
                                    <textarea name='title'></textarea>
                                </div>
                                <div className='buttons'>
                                    <div className='form_buttons'>
                                        <input type='submit' className='btn ' value='Create Task!'/>
                                        <input type='reset' value='Reset' className='btn'/>
                                    </div>
                                    <button type='button' className='btn'>Delete All</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className='col_tasks'>
                        {tasks.map((task) => (
                            <RenderPage key={task.uuid} task={task.value} taskName={} onRemove={() => clickDelete(task.uuid)} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TodoList;
