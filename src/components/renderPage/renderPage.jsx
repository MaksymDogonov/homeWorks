import './renderPage.css';
import {Route, Routes} from "react-router-dom";
// import taskPage from "../../pages/TaskPage/TaskPage";
import renderTask from "../renderTask/renderTask";
import PropTypes from "prop-types";

const renderPage = ({task, taskName, onRemove}) => {
    return (
        <Routes>
            <Route path='tasks/:id' component={renderTask()}/>
        </Routes>
    )
}

renderPage.propTypes = {
    taskName: PropTypes.string,
    task: PropTypes.string,
    onRemove: PropTypes.func,
};
export default renderPage;
