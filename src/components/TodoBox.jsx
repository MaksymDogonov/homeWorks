import React from "react"
import {v4 as uuidv4} from 'uuid';
import Item from "./Item";
import {Field, Form, Formik} from "formik";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    clickAdd = (values) => {
        this.setState((state) => ({
            tasks: [{
                uuid: uuidv4(),
                value: values.task
            }, ...state.tasks],
        }))
    };

    clickDelete = (uuid) => {
        this.setState(({tasks}) => ({
            tasks: tasks.filter((it) => it.uuid !== uuid)
        }));
    };

    render = () => {
        return (
            <div>
                <div className="mb-3">
                    <Formik initialValues={{task: ''}} onSubmit={this.clickAdd}>
                        <Form className="d-flex">
                            <Field id='task'
                                   name='task'
                                   placeholder="I am going..."
                                   className="form-control me-3"
                            />
                            <button type="submit" className="btn btn-primary">add</button>
                        </Form>
                    </Formik>
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
