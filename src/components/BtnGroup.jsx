import React from "react"

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftActive: false,
            rightActive: false,
        };
    }

    render() {
        const {leftActive, rightActive} = this.state;

        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={`btn btn-secondary left ${leftActive ? 'active' : ''}`}
                    onClick={() => {
                        this.setState({
                            rightActive: false,
                            leftActive: true
                        });
                    }}
                >
                    Left
                </button>
                <button
                    type="button"
                    className={`btn btn-secondary right ${rightActive ? 'active' : ''}`}
                    onClick={() => {
                        this.setState({
                            rightActive: true,
                            leftActive: false
                        });
                    }}
                >
                    Right
                </button>
            </div>
        )
    }
}

export default BtnGroup;
