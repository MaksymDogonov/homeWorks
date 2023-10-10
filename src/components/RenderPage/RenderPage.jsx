import './renderPage.css';
import {useMatch} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {useSelector} from "react-redux";

const RenderPage = () => {
    const {params} = useMatch('tasks/:id');
    const {title, value} = useSelector((state) => state.tasks.find(it => it.uuid === params.id));

    return (
        <div className="tasks">
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {value}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RenderPage;
