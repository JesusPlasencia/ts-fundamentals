#!HANDLING OBJECTS
(() => {
  const login = (data : {username: string, password: string}) => {
    console.log(data);
    //data?.username, data?.password
  }

  // login({
  //   username: "jplasencia",
  //   password: "h4ck3r_s3cr3t"
  // });

  //
  type Sizes = "S" | "M" | "L" | "XL";

  const products:any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: "Pantalón",
    createdAt: new Date(),
    stock: 29,
    size: "M"
  });
  addProduct({
    title: "Jeans",
    createdAt: new Date(),
    stock: 20,
    size: "XL"
  });

  console.log(products);

})();
