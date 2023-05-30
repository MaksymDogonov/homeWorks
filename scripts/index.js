"use strict";

void (function () {
  const form = document.querySelector("#todoForm");
  const divContainer = document.querySelector("#todoItems");
  const inputs = Array.from(
    form.querySelectorAll("input:not([type=reset]), textarea ")
  );
  const INFO_KEY = "todoCards";
  const ATR_KEY = "data-id";
  let actualID = 1;

  const todoItem = ({ id, title, description }) => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute(ATR_KEY, id);
    wrapper.classList.add("col-4");
    wrapper.innerHTML = `<div class='taskWrapper'>
                            <div class='taskHeading'>${title}</div>
                            <div class='taskDescription'>${description}</div>
                            <button class='delete'>Delete</button>
                         </div>`;
    return wrapper;
  };

  const createTodoItem = (domEl) => {
    if (!(domEl instanceof HTMLElement)) alert("is not  HTML element");
    divContainer.prepend(domEl);
  };

  const getTodoItems = () => {
    const tempData = JSON.parse(localStorage.getItem(INFO_KEY));
    if (!tempData) return [];
    return tempData;
  };

  const saveTodoItem = (saveInfo) => {
    const tempData = getTodoItems();
    const clonSaveInfo = { ...saveInfo, id: actualID };
    tempData.push(clonSaveInfo);
    localStorage.setItem(INFO_KEY, JSON.stringify(tempData));
    actualID += 1;
    return getTodoItems().at(-1);
  };

  const deleteFromDOM = ({ id }) => {
    divContainer.querySelector(`[${ATR_KEY} = '${id}']`).remove();
  };

  const deleteByID = (id) => {
    const tempData = getTodoItems();
    const index = tempData.findIndex((item) => item.id === id);
    const deleteItem = tempData.splice(index, 1);
    localStorage.setItem(INFO_KEY, JSON.stringify(tempData));
    return deleteItem[0];
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = inputs.reduce((accum, { name, value }) => {
      accum[name] = value;
      return accum;
    }, {});
    const saveInfo = saveTodoItem(data);
    createTodoItem(todoItem(saveInfo));
  });

  divContainer.addEventListener("click", (event) => {
    event.stopPropagation();

    if (!event.target.closest(".delete")) return console.log("111");
    const itemId = Number(
      event.target.closest(`[${ATR_KEY}]`).getAttribute(ATR_KEY)
    );
    const deleteEL = deleteByID(itemId);
    deleteFromDOM(deleteEL);
  });

  const loadedInfo = () => {
    const data = getTodoItems();
    if (!data.length) return;
    actualID = Number(data.at(-1).id) + 1;
    data.forEach((item) => {
      const pattern = todoItem(item);
      createTodoItem(pattern);
    });
    document.removeEventListener("DOMContentLoaded", loadedInfo);
  };
  document.addEventListener("DOMContentLoaded", loadedInfo);
})();
