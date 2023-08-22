import React from "react"
import Definitions from "./components/Definitions";
const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 },
];



class App extends React.Component {
  render() {
    return (
        <Definitions data={definitions} />
    )
  }
}

export default App;
