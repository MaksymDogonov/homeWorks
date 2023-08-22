import React from "react"
import Card from "./components/Card";

class App extends React.Component {
    render() {
        return (
            <>
                <Card title='title'/>
                <Card text='text'/>
                <Card title='title' text='text'/>
            </>
        )
    }
}

export default App;
