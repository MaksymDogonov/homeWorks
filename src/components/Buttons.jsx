import React from "react"
import {v4 as uuidv4} from 'uuid';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
        };
    }

    clickAdd = () => this.setState(({logs}) => {
        const lastElement = logs.at(-1)?.value ?? 0;// ? - if undefined we say don't crash
        return {
            logs: [...logs, {
                uuid: uuidv4(),
                value: lastElement + 1
            }]
        }
    });

    clickRemove = () => this.setState(({logs}) => {
        const lastElement = logs.at(-1)?.value ?? 0;
        return {
            logs: [...logs, {
                uuid: uuidv4(),
                value: lastElement - 1
            }]
        }
    });

    clickDelete = (uuid) => {
        this.setState(({logs}) => {
            return {logs: logs.filter((it) => it.uuid !== uuid)};
        })
    }

    render = () => (
        <div>
            <div className="btn-group font-monospace" role="group">
                <button type="button" className="btn btn-outline-success"
                        onClick={this.clickAdd}>+
                </button>
                <button type="button" className="btn btn-outline-danger"
                        onClick={this.clickRemove}>-
                </button>
            </div>
            <div className="list-group">
                {this.state.logs.map((log) => (
                    <div key={log.uuid}>
                        <button key={log.uuid} type="button" className="list-group-item list-group-item-action"
                                onClick={() => this.clickDelete(log.uuid)}>{log.value}</button>
                    </div>))}
            </div>
        </div>
    )
}

export default Buttons;
