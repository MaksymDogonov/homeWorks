import React from "react"
import TodoList from "./components/todoList/todoList";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <TodoList/>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
