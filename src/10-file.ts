#!UNION TYPES
(() => {
  let userId: string | number;
  userId = 1010;
  userId = '1010';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string: ${myText.toUpperCase()}`);
    } else {
      console.log(`number: ${myText.toFixed()}`);
    }
  }

  greeting('Sass');
  greeting(1221);
})();
