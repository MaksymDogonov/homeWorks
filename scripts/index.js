"use strict";

void (function () {
    const form = document.querySelector("#todoForm");
    const divContainer = document.querySelector("#todoItems");
    const inputs = Array.from(form.querySelectorAll("input:not([type=reset]), textarea "));
    const INFO_KEY = "todoCards";

    const todoItem = ({title, description}) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = `<div class='col-4'>
                              <div class='taskWrapper'>
                                <div class='taskHeading'>${title}</div>
                                <div class='taskDescription'>${description}</div>
                              </div>
                             </div>`;
        return wrapper;
    };

    const createTodoItem = (domEl) => {
        divContainer.prepend(domEl);
    }

    const getTodoItems = () => {
        const info = JSON.parse(localStorage.getItem(INFO_KEY));
        if (!info) return [];
        return info;
    }
    console.log(getTodoItems())//

    const saveTodoItem = (saveInfo) => {
        const tempData = getTodoItems();
        tempData.push(saveInfo);
        localStorage.setItem(INFO_KEY, JSON.stringify([tempData]));
        return getTodoItems().at(-1);
    };

    form.addEventListener("submit", event => {
        event.preventDefault();
        event.stopPropagation();
        const data = inputs.reduce((accum, {name, value}) => {
            accum[name] = value
            return accum;
        }, {});
        const saveEl = saveTodoItem(data);
        createTodoItem(todoItem(saveEl));
    });

    const loadedInfo = () => {
        const data = getTodoItems();
        if(!data.length) return;

        data.forEach(item =>{
            const temp = todoItem(item);
            createTodoItem(temp);
        })
        document.removeEventListener('DOMContentLoaded', loadedInfo);
    }
    document.addEventListener('DOMContentLoaded', loadedInfo);
})();