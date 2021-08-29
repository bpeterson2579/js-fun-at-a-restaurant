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
  var restaurantLunch = restaurant.menus.lunch;
  var restaurantBreakfast = restaurant.menus.breakfast;
  var restaurantDinner = restaurant.menus.dinner;

  if (food.type === "lunch" && !restaurantLunch.includes(food)) {
    return restaurantLunch.push(food);
  }else if (food.type === "breakfast" && !restaurantBreakfast.includes(food)) {
    return restaurantBreakfast.push(food);
  }else if (food.type === "dinner" && !restaurantDinner.includes(food)) {
    return restaurantDinner.push(food);
  }
  // var restaurant = restaurant.menus;
  //
  // for (var i = 0; i < restaurant[food.type].length; i++) {
  //   if (food.type === restaurant[food.type][i] && !restaurant[food.type][i].includes(food)) {
  //     return restaurant[food.type].push(food);
  //   }
  // }
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
