import React from "react"
import TodoList from "./components/todoList/todoList";
import {createStore} from "redux";
import {Provider} from "react-redux";

const reducer = (state, action) => {
    switch (action.type){
        default:
            return state
    }
}

const store = createStore(reducer)

const App = () => {
    return (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    )
}

export default App;
