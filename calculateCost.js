function calculateCost(books) {
  let finalCost = 0;
  const baskets = [];

  let currentBasket = 0;

  books.forEach((book, idx) => {
    const prevBook = books[idx - 1];
    if (book === prevBook) {
      if (baskets[currentBasket + 1]) {
        baskets[currentBasket + 1].push(book);
      } else {
        baskets[currentBasket + 1] = [book];
      }
      currentBasket += 1;
    }

    if (book !== prevBook) {
      currentBasket = 0;
      if (baskets[currentBasket] && baskets[currentBasket].length === 4) {
        baskets.forEach((basket, bidx) => {
          if (basket.length === 3) {
            currentBasket = bidx;
          }
        });
      }

      if (baskets[currentBasket]) {
        baskets[currentBasket].push(book);
      } else {
        baskets[currentBasket] = [book];
      }
    }
  });

  baskets.forEach((set) => {
    const discountPerUnits = {
      1: 0,
      2: 0.05,
      3: 0.10,
      4: 0.20,
      5: 0.25,
    };
    const setLen = set.length;
    finalCost += (8 * setLen * (1 - discountPerUnits[setLen]));
  });

  return +finalCost.toFixed(2);
}

export default calculateCost;
