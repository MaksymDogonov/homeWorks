import './renderTask.css';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const renderTask = ({task, taskName, onRemove}) => {
    return (
        <div className="tasks">
            <Link to={"https://google.com/"}>
                <p>{taskName}</p>
            </Link>
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
