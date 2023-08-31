import React from "react"
import Progress  from "./components/Progress";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Progress percentage={40} />
            </div>
        )
    }
}

export default App;
