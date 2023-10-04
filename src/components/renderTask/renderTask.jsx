import './renderTask.css';

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
export default renderTask;
