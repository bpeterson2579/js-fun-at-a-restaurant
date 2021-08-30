function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return restaurant
}

function addMenuItem(restaurant, food) {
  var restaurant = restaurant.menus;

  if (food.type === "lunch" && !restaurant.lunch.includes(food)) {
    return restaurant.lunch.push(food);
  }else if (food.type === "breakfast" && !restaurant.breakfast.includes(food)) {
    return restaurant.breakfast.push(food);
  }else if (food.type === "dinner" && !restaurant.dinner.includes(food)) {
    return restaurant.dinner.push(food);
  }
}

function removeMenuItem(restaurant, food, meal) {
  var restaurant = restaurant.menus;

  for (var i = 0; i < restaurant[meal].length; i++) {
    if (restaurant[meal][i].name === food) {
      restaurant[meal].splice(i)
      return `No one is eating our ${food} - it has been removed from the ${meal} menu!`
    }
  }
  return `Sorry, we don't sell ${food}, try adding a new recipe!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
