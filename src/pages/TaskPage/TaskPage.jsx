// import {useParams} from "react-router-dom";

// const TaskPage = () => {
//     let index = useParams().id;
// }

import PropTypes from "prop-types";

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

renderPage.propTypes = {
    taskName: PropTypes.string,
    task: PropTypes.string,
    onRemove: PropTypes.func,
};
export default renderPage;
