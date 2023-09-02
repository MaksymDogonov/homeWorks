import React from "react"

class ListGroup extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {React.Children.map(this.props.children, (element) => {
                    return <li className="list-group-item">{element}</li>
                })}
            </ul>
        )
    }
}

export default ListGroup;
