(() => {
  let productTitle: string = 'The amazing Platzi';
  productTitle = 'My amazing Udemy';
  console.log('Product Title:', productTitle);

  const productDescription = "Double Quote Platzi's";
  console.log('Product Description:', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle},
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

  // const myString: String = "BAD PRACTISE";
})();
