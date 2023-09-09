import React from "react"
import {v4 as uuidv4} from 'uuid';
import Item from "./Item";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: '',
            tasks: []
        };
    }

    clickAdd = (event) => {
        this.setState(({tasks})=> {
            return {
                tasks: [{
                    uuid: uuidv4(),
                    value: event.target.value
                },...tasks],
            }
        })
    };

    handleChange = ({target}) => {
        this.setState({newTask: target.value})
    }


    clickDelete = (uuid) => {
        const index = this.state.tasks.findIndex((e) => {
            return e.uuid === uuid
        })
        this.state.tasks.splice(index, 1)
        const newTasks = this.state.tasks
        this.setState({tasks: newTasks})
    };

    render = () => (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input type="text"
                               value={this.state.newTask}
                               required=""
                               className="form-control"
                               placeholder="I am going..."
                               onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.clickAdd}>add</button>
                </form>
            </div>
            {this.state.tasks.map((task) => {
                return <Item key={task.uuid}
                             task={task.value}
                             onRemove={() => this.clickDelete(task.uuid)}/>
            })}
        </div>

    )
}

export default TodoBox;
