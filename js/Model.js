"use strict";

const Model = {
  storage: null,
  dataKey: "data_key",
  currentId: 1,

  getData() {
    return (JSON.parse(this.storage.getItem(this.dataKey)) || []).values();
  },

  getDataById(id) {
    const data = this.getData();
    let item = data.next();
    while (!item.done) {
      if (item.value.id === id) {
        return item.value;
      }
      item = data.next();
    }

    return undefined;
  },

  postData(data) {
    const savedData = [...this.getData()];
    const dataToSave = { ...data, id: this.currentId };
    savedData.push(dataToSave);
    this.storage.setItem(this.dataKey, JSON.stringify(savedData));
    const savedItem = this.getDataById(this.currentId);
    this.currentId += 1;
    return savedItem;
  },

  init(storage, dataKey) {
    this.storage = storage;

    if (typeof dataKey === "string") {
      this.dataKey = dataKey;
    }

    const savedData = [...this.getData()];
    if (!savedData.length) return;
    this.currentId = savedData.at(-1).id + 1;
  },
};
