import './renderTask.css';
import PropTypes from "prop-types";

const renderTask = ({task, taskName, onRemove}) => {
    return (
        <div className="tasks">
            <p>{taskName}</p>
            <p>{task}</p>
            <hr/>
            <label>
                <input type="checkbox" className="form_check_input"/>
            </label>
            <hr/>
            <button type="button"
                    className="btn del_btn"
                    onClick={onRemove}>Remove task
            </button>
        </div>
    )
}

renderTask.propTypes = {
    taskName: PropTypes.string,
    task: PropTypes.string,
    onRemove: PropTypes.func,
};

export default renderTask;
