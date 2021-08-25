function nameMenuItem(foodName) {
  return `Delicious ${foodName}`;
}

function createMenuItem(foodName, foodPrice, mealType) {
  var menuItem = {
    name: foodName,
    price: foodPrice,
    type: mealType,
  }
  return menuItem;
}

function addIngredients(ingredient, nameOfArray) {
  if (nameOfArray.includes(ingredient)) {
    return
  }else {
    nameOfArray.push(ingredient);
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, mealType) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: mealType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
