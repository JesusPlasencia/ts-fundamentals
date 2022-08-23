#!Any
(() => {
  let myDynamicVar: any;
  myDynamicVar = null;
  myDynamicVar = 20;
  myDynamicVar = {};

  myDynamicVar = 'Hi';
  //cast (1)
  let newWord = (myDynamicVar as string).toLowerCase();
  console.log(newWord);

  //cast (2)
  myDynamicVar = 1000;
  const newNumber = (<number>myDynamicVar).toFixed();
  console.log(newNumber);
})();
