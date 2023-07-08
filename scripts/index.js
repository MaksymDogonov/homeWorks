"use strict";
(function () {
  class Hamburger {
    constructor(size, filling) {
      this.size = size;
      this.filling = filling;
      this.objToppings = {};
    }

    static SIZE_SMALL = {
      price: 50,
      calories: 20,
    };

    static SIZE_BIG = {
      price: 100,
      calories: 40,
    };

    static STUFFING_CHEESE = {
      price: 10,
      calories: 20,
    };

    static STUFFING_SALAD = {
      price: 20,
      calories: 5,
    };

    static STUFFING_POTATO = {
      price: 15,
      calories: 10,
    };

    static TOPPING_SAUCE = {
      price: 15,
      calories: 0,
    };

    static TOPPING_MAYO = {
      price: 20,
      calories: 5,
    };

    addTopping(item) {
      if (Object.values(this.objToppings).length !== 0) {
        this.objToppings = {
          price: this.objToppings.price + item.price,
          calories: this.objToppings.calories + item.calories,
        };
        return this.objToppings;
      }
      return (this.objToppings = item);
    }

    calculateCalories() {
      const calories =
        this.size.calories + this.filling.calories + this.objToppings.calories;

      return `${calories}`;
    }

    calculatePrice() {
      const price =
        this.size.price + this.filling.price + this.objToppings.price;

      return `${price}`;
    }
  }

  const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE
  );

  console.log(hamburger.addTopping(Hamburger.TOPPING_MAYO));
  console.log("Calories: " + hamburger.calculateCalories());
  console.log("Price: " + hamburger.calculatePrice());
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  console.log("Price with sauce: " + hamburger.calculatePrice());
})();
