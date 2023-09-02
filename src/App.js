import React from "react"
import Alert  from "./components/Alert";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Alert type="warning" text="what is love?" />;
            </div>
        )
    }
}

export default App;
