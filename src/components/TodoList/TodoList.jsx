import {Formik, Form, Field} from 'formik';
import RenderTask from "../RenderTask/RenderTask";
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {TaskType} from "../../store";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './todoList.css';


const TodoList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch()

    const clickAdd = (values, {resetForm}) => {
        dispatch({
                type: TaskType.ADD_TASK, payload: {
                    uuid: uuidv4(),
                    title: values.title,
                    value: values.task,
                }
            }
        );
        resetForm();
    };

    const clickDelete = (uuid) => {
        dispatch({type: TaskType.REMOVE_TASK, payload: uuid});
    };

    const clickDeleteAll = () => {
        dispatch({type: TaskType.REMOVE_ALL_TASKS});
    };


    return (
        <main className='main'>
            <h1 className='main_text'> TODO LIST </h1>
            <div className='containet'>
                <div className='line'>
                    <div className='col_form'>
                        <Card className='card' border="primary">
                        <Formik initialValues={{task: '', title: ''}} onSubmit={clickAdd}>
                            <Form className='form'>
                                <div className='form_title'>
                                    <label>Task title</label>
                                    <Field className='form_title_input' type='text' name='title' required/>
                                </div>
                                <div className='form_body'>
                                    <label>Task body</label>
                                    <Field
                                        name="task"
                                        render={({field}) => (
                                            <textarea {...field} />
                                        )}
                                    />
                                </div>
                                <div className='buttons'>
                                    <div className='form_buttons'>
                                        <Button variant="primary"
                                                type='submit' className='btn sub'>Create Task</Button>{' '}
                                        <Button variant="warning" type='reset' className='btn res'>Reset</Button>{' '}
                                    </div>
                                    <Button variant="danger" type='button' className='btn del' onClick={clickDeleteAll}>Delete All</Button>{' '}
                                </div>
                            </Form>
                        </Formik>
                        </Card>
                    </div>
                    <div className="col_tasks">
                        {tasks.map((task) => (
                            <RenderTask key={task.uuid} index={task.uuid} task={task.value} taskName={task.title}
                                        onRemove={() => clickDelete(task.uuid)}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TodoList;
