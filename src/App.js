import React from "react"
import TodoList from "./components/TodoList/TodoList";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderPage from "./components/RenderPage/RenderPage";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<TodoList/>}/>
                    <Route path='/tasks/:id' component={<RenderPage/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
