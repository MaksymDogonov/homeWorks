import {useState} from "react"
import {Formik, Form} from 'formik';
import RenderTask from "../renderTask/renderTask";
import './todoList.css';
import {v4 as uuidv4} from 'uuid';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const clickAdd = (values) => {
        setTasks((prevTasks) => [
            {
                uuid: uuidv4(),
                title: values.title,
                value: values.task,

            },
            ...prevTasks,
        ]);
    };

    const clickDelete = (uuid) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.uuid !== uuid));
    };
    const clickDeleteAll = () => {
        setTasks((prevTasks) => []);
    };

    return (
        <main className='main'>
            <h1 className='main_text'> TODO LIST </h1>
            <div className='containet'>
                <div className='row'>
                    <div className='col_form'>
                        <Formik initialValues={{task: '', title: ''}} onSubmit={clickAdd}>
                            <Form className='form'>
                                <div className='form_title'>
                                    <label>Task title</label>
                                    <input className='form_title_input' type='text' name='title'/>
                                </div>
                                <div className='form_body'>
                                    <label>Task body</label>
                                    <textarea name='title'></textarea>
                                </div>
                                <div className='buttons'>
                                    <div className='form_buttons'>
                                        <input type='submit' className='btn sub' value='Create Task!'/>
                                        <input type='reset' value='Reset' className='btn res'/>
                                    </div>
                                    <button type='button' className='btn del' onClick={clickDeleteAll}>Delete All</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="col_tasks"></div>
                    {tasks.map((task) => (
                        <RenderTask key={task.uuid} task={task.value} taskName={task.title}
                                    onRemove={() => clickDelete(task.uuid)}/>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default TodoList;
