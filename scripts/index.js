"use strict";

void (function () {
  const form = document.querySelector("#todoForm");
  const divForNewCards = document.querySelector("#todoItems");
  const inputs = Array.from(
    form.querySelectorAll("input:not([type=reset]), textarea ")
  );
  const INFO_KEY = "formInfo";

  const createTodoItem = ({ title, description }) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class='col-4'>
                          <div class='taskWrapper'>
                            <div class='taskHeading'>${title}</div>
                            <div class='taskDescription'>${description}</div>
                          </div>
                         </div>`;
    divForNewCards.appendChild(wrapper); //
    return wrapper; //
  };

  const getInfo = () => {
    const data = JSON.parse(localStorage.getItem(INFO_KEY));
    if (!data) return [];
    return data;
  };

  const saveData = getInfo(data);

  createTodoItem(saveData);

  const loadedInfo = () => {
    const data = getInfo();
    if (!data.length) return;

    data.forEach((todoItem) => {
      const temp = createTodoItem(todoItem);
      createTodoItem(temp);
    });
    document.removeEventListener(loadedInfo);
  };

  const saveTodoItem = (dataSave) => {
    const tempData = getInfo();
    tempData.push(dataSave);
    localStorage.setItem(INFO_KEY, JSON.stringify(tempData));
    return getInfo().at(-1);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const info = {};

    inputs.forEach(({ name, value }) => (info[name] = value));
    localStorage.setItem(INFO_KEY, JSON.stringify(info));
    return info;
  });
  document.addEventListener(loadedInfo);
})();
