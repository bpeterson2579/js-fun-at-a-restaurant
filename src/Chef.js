class Chef {
  constructor(name, restaurantObj) {
    this.name = name;
    this.restaurant = restaurantObj;
  }
  greetCustomer(customer, isMorning) {
    if (isMorning) {
      return `Good morning, ${customer}!`
    }else {
      return `Hello, ${customer}!`;
    }
  }
  checkForFood(food) {
    if (this.restaurant.menus[food.type].includes(food)) {
      return `Yes, we're serving ${food.name} today!`
    }else {
      return `Sorry, we aren't serving ${food.name} today.`
    }
  }
}

module.exports = Chef;
