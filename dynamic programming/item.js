function Item(id, weight, price) {
  this.id = id;
  this.weight = weight;
  this.price = price;
}

const items = {};
items['Гитара'] = new Item(0, 2, 1500);
items['Телефон'] = new Item(1, 1, 1000);
items['Магнитофон'] = new Item(2, 4, 3000);
items['Ноутбук'] = new Item(3, 3, 2000);
items['Ожерелье'] = new Item(4, 1, 950);

module.exports = items;
