import './renderTask.css';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const renderTask = ({task, taskName, index, onRemove}) => {
    return (
        <div className="tasks">
            <Card border="info" style={{ width: '18rem' }}>
                <Link to={`/tasks/${index}`} target="_blank">
                    {/*<p>{taskName}</p>*/}
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

renderTask.propTypes = {
    taskName: PropTypes.string,
    task: PropTypes.string,
    onRemove: PropTypes.func,
    index: PropTypes.string,
};

export default renderTask;
