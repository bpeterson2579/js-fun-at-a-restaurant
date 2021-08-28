function takeOrder(order, deliveries) {
  if (deliveries.length < 3) {
    return deliveries.push(order);
  }
}

function refundOrder(orderNum, deliveries) {
  for (var i = 0; i < deliveries.length; i++) {
    if (deliveries[i].orderNumber === orderNum) {
      deliveries.splice(i, 1);
    }
  }
}

function listItems(deliveries) {
  var items = ""
  for (var i = 0; i < deliveries.length; i++) {
    if (i === deliveries.length - 1) {
      items += `${deliveries[i].item}`;
    }else {
      items += `${deliveries[i].item}, `;
    }
  }
  return items;
}

function searchOrder(deliveryOrders, food) {
  var isOrdered = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === food) {
      isOrdered = true;
    }
  }
  return isOrdered;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
