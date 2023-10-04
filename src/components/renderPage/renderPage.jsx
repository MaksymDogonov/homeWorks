import './renderPage.css';

const renderPage = ({task, taskName, onRemove}) => {
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
export default renderPage;
