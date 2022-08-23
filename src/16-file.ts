#!CREATING TYPE OBJECTS
(() => {
  //TYPES
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products:Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: "Pantalón",
    createdAt: new Date(2001, 8, 25),
    stock: 29,
    size: "M"
  });
  addProduct({
    title: "Jeans",
    createdAt: new Date(2005, 4, 30),
    stock: 20,
    size: "XL"
  });
  addProduct({
    title: "Camisa",
    createdAt: new Date(2019, 4, 23),
    stock: 1,
    size: "S"
  });


  const newProducto: Product = {
    title: "Polera",
    createdAt: new Date(2022, 8, 23),
    stock: 10,
    size: "XL"
  };

  products.push(newProducto);
  console.log(products);

})();
