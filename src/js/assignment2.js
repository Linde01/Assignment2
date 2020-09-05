const products = [
  {
    id: 1,
    name: "Lenovo",
    price: 10400,
  },
  {
    id: 2,
    name: "Iphone X",
    price: 74300,
  },
  {
    id: 3,
    name: "Mouse",
    price: 800,
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1800,
  },
  {
    id: 5,
    name: "Sony heaset",
    price: 19500,
  },
  {
    id: 6,
    name: "Acer Laptop",
    price: 25400,
  },
];

var reservedProducts = [
  {
    id: 2,
    name: "Iphone X",
    price: 74800,
  },
  {
    id: 5,
    name: "Sony headset",
    price: 19500,
  },
];

products.forEach((product) => {
  product.reserved = reservedProducts.find(function (reservedProduct, i) {
    if (reservedProduct.id === product.id) {
      return true;
    }
  });
});

var nProducts = products.filter(function (pro, i) {
  if (pro.reserved == undefined) {
    delete pro.reserved;
    return pro;
  }
});

console.log(nProducts);
