"use strict";

void (function () {
  const form = document.querySelector("#todoForm");
  const divContainer = document.querySelector("#todoItems");
  const inputs = Array.from(
    form.querySelectorAll("input:not([type=reset]), textarea ")
  );
  const INFO_KEY = "todoCards";

  const todoItem = ({ id, title, description }) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class='col-4'>
                              <div class='taskWrapper'>
                                <div class='taskHeading'>${title}</div>
                                <div class='taskDescription'>${description}</div>
                                <button id='delete-${id}'>Delete</button>
                              </div>
                             </div>`;

    return wrapper;
  };

  divContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.id.includes("delete-")) {
      const itemId = Number(clickedElement.id.replace("delete-", ""));
      console.log("Clicked id:", itemId);
    }
  });

  const createTodoItem = (domEl) => {
    divContainer.prepend(domEl);
  };

  const getTodoItems = () => {
    const info = JSON.parse(localStorage.getItem(INFO_KEY));
    if (!info) return {};
    return info;
  };

  const saveTodoItem = (saveInfo) => {
    const tempData = getTodoItems();
    const lastItemIndex = Object.keys(tempData).at(-1) || 0;
    const newItemIndex = Number(lastItemIndex) + 1;
    tempData[newItemIndex] = saveInfo;
    localStorage.setItem(INFO_KEY, JSON.stringify(tempData));
    return newItemIndex;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = inputs.reduce((accum, { name, value: description }) => {
      accum[name] = description;
      return accum;
    }, {});
    const id = saveTodoItem(data);
    createTodoItem(todoItem({ id, ...data }));
  });

  const loadedInfo = () => {
    const data = getTodoItems();
    if (Object.keys(data).length === 0) return;

    Object.entries(data).forEach(([id, data]) => {
      const temp = todoItem({ id, ...data });
      createTodoItem(temp);
    });
    document.removeEventListener("DOMContentLoaded", loadedInfo);
  };
  document.addEventListener("DOMContentLoaded", loadedInfo);
})();
