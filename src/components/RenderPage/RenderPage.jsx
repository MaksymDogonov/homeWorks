import './renderPage.css';
import {Link, Route, Routes} from "react-router-dom";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {TaskType} from "../../store";



const RenderPage = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch()

    const getTasks = () => {
        dispatch(dispatch({type: TaskType.GET_TASKS}));
    }
    console.log(getTasks)
    const {task, taskName, index, onRemove} = getTasks();

    const renderTaskPage = ({task, taskName, index, onRemove}) => {
        console.log(tasks)
        return (
            <div className="tasks">
                <Card border="info" style={{ width: '18rem' }}>
                    <Link to={`/tasks/${index}`} target="_blank">
                        <Card.Header>{taskName}</Card.Header>
                    </Link>

                    <Card.Body>
                        <Card.Text>
                            {task}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="danger" type="button"
                            className="btn del_btn"
                            onClick={onRemove}>Remove task</Button>{' '}
                </Card>
            </div>
        )
    }

    return (
        <Routes>
            <Route path='tasks/:id' element={renderTaskPage(task, taskName, index, onRemove)}/>
        </Routes>
    )
}

RenderPage.propTypes = {
    taskName: PropTypes.string,
    task: PropTypes.string,
    index: PropTypes.string,
    onRemove: PropTypes.func,
};
export default RenderPage;
