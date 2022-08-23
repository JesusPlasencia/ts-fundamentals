#!Booleans

(() => {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log('Is New:', isNew);
  isNew = true;
  console.log('Is New:', isNew);

  console.log();

  const random = Math.random();
  console.log('Random Number:', random);

  isNew = random > 0.5 ? true : false;
  console.log('Is New:', isNew);

  // const myBoolean: Boolean = true; // BAD PRACTISE (use boolean instead)
})();
