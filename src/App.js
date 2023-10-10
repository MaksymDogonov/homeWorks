import React from "react"
import TodoList from "./components/TodoList/TodoList";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderPage from "./components/RenderPage/RenderPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<TodoList />),
    },
    {
        path: "/tasks/:id",
        element: <RenderPage />,
    },
]);

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App;
