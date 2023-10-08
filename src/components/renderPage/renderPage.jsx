import './renderPage.css';
import {Route, Routes} from "react-router-dom";

const renderPage = ({task, taskName, onRemove}) => {
    return (
        <Routes>
            <Route path={'invoices/:id'}/>
        </Routes>
    )
}
export default renderPage;
