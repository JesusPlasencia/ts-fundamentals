#!NULL AND UNDEFINED
(() => {
  // let myNumber: number;
  // let myString: string;
  let myNull = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 180;

  let myString: string | undefined = undefined;
  myString = "Jesus Plasencia";

  //VERSION 1
  function hi(name: string | null) {
    let hello = "Hello ";
    if (name) {
      hello += name;
    }
    else {
      hello += "nobody";
    }
    console.log(hello);
  }

  // hi("Jesus");
  // hi(null);

  //VERSION 2
  function hiV2(name: string | null) {
    let hello = "Hello ";
    hello += `${name?.substring(0, 1).toUpperCase()}${name?.substring(1, name?.length).toLowerCase()}` || "nobody"
    console.log(hello);
  }

  hiV2("MaNuEL");
  hiV2(null);

})();
