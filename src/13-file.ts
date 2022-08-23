#!FUNCTIONS
(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  //const p1 = createProductToJson("Polo", new Date(), 12, "XL");
  //console.log(p1);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const p2 = createProductToJsonV2("Polera Celeste", new Date(), 200);
  console.log(p2);
  console.log();
  console.log(p2.title);
  console.log(p2.stock);
  console.log(p2.size);





}
)();
