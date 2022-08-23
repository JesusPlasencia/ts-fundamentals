import { createProduct, calcStock, products } from './product.service';

createProduct({
  title: "Polera",
  createdAt: new Date(2022, 8, 15),
  stock: 90,
  size: "XL"
});
createProduct({
  title: "Falda",
  createdAt: new Date(2022, 8, 22),
  stock: 120,
  size: "M"
});

let stock = calcStock();

console.log("New Products:", products);
console.log();
console.log("New Stock:", stock);
