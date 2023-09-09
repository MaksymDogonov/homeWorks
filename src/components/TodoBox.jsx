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

    clickAdd = () => {
        this.setState((state) => {
            return {
                ...state,
                tasks: [{
                    uuid: uuidv4(),
                    value: state.newTask
                }, ...state.tasks],
            }
        })
    };

    handleChange = ({target}) => {
        this.setState((state) => {
            return {
                ...state,
                newTask: target.value
            }
        })
    }


    clickDelete = (uuid) => {
        const index = this.state.tasks.findIndex((e) => {
            return e.uuid === uuid
        })
        const newTasks = [...this.state.tasks]
        newTasks.splice(index, 1)
        this.setState({tasks: newTasks})
    };

    render = () => {
        return (
            <div>
                <div className="mb-3">
                    <div className="d-flex">
                        <div className="me-3">
                            <input type="text"
                                   value={this.state.newTask}
                                   className="form-control"
                                   placeholder="I am going..."
                                   onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.clickAdd}>add</button>
                    </div>
                </div>
                <div>
                    {this.state.tasks.map((task) => {
                        return <Item key={task.uuid}
                                     task={task.value}
                                     onRemove={() => this.clickDelete(task.uuid)}/>
                    })}
                </div>
            </div>
        )
    }


}

export default TodoBox;
