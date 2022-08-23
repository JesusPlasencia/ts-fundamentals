#!FUNCTIONS' RETURN
(() => {

  const calculateTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach(item => {
      total += item;
    });
    return total.toString();
  }

  // const rta = calculateTotal([1, 2, 3, 5, 6, 7]);
  // console.log(rta);

  const printTotal = (prices: number[]) : void => {
    const rta = calculateTotal(prices);
    console.log(prices);
    console.log(`Function Void: ${rta}`);
  }

  printTotal([1, 2, 3, 5, 6, 7]);

})();
