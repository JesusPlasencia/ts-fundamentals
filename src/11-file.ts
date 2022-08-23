#!ALIAS
(() => {

  type UserProp = string | number;
  let userId: UserProp;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = "XL";

  function greeting(userId: UserProp, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`Usuario: ${userId.toUpperCase()} - Size: ${size}`);
    } else {
      console.log(`     ID: ${userId.toFixed()} - Size: ${size}`);
    }
  }

  greeting(1010, 'XL');
})();
