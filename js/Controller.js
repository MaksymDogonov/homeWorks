"use strict";

const Controller = {
  form: null,
  todoContainer: null,

  initListeners() {
    this.form.addEventListener("submit", this.formHandler.bind(this));
    window.addEventListener("DOMContentLoaded", this.prerenderTodos.bind(this));
  },

  formHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    const data = {};
    this.form
      .querySelectorAll("input, textarea, select")
      .forEach(({ name, value }) => {
        data[name] = value;
      });
    const savedTodoItem = Model.postData(data);
    View.renderItem(savedTodoItem);
  },

  prerenderTodos() {
    const savedData = Model.getData();
    let item = savedData.next();
    while (!item.done) {
      View.renderItem(item.value);
      item = savedData.next();
    }
  },

  init(formSelector, blockSelector) {
    if (typeof formSelector !== "string")
      throw new Error("Form selector should be a string");
    const form = document.querySelector(formSelector);
    if (!(form instanceof HTMLElement))
      throw new Error("Form not valid HTML element");

    if (typeof blockSelector !== "string")
      throw new Error("Block selector should be a string");
    const block = document.querySelector(blockSelector);
    if (!(block instanceof HTMLElement))
      throw new Error("Block not valid HTML element");

    this.form = form;
    this.todoContainer = block;
    View.setContainer(block);

    this.initListeners();
  },

  delete(id) {
    const tempData = Model.getData();
    const filteredTempData = [...tempData].filter((item) => item.id !== id);
    localStorage.setItem(Model.dataKey, JSON.stringify(filteredTempData));
    View.deleteFromPage(id);
  },
};
