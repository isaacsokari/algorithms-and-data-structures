/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */

function checkCashRegister(price, cash, cid) {
  let totalInReg = parseFloat(
    cid.reduce((first, next) => (first += next[1]), 0)
  ).toFixed(2);
  console.log(totalInReg);
  let changeInDrawer = cid;
  let regStatus = {
    closed: "CLOSED",
    insufficient_funds: "INSUFFICIENT_FUNDS",
    open: "OPEN",
  };
  let changeRequired = parseFloat(cash - price).toFixed(2);
  const change = parseFloat(cash - price).toFixed(2);
  // console.log(changeRequired);

  if (Number(changeRequired) === Number(totalInReg)) {
    return { status: regStatus.closed, change: cid };
  }

  if (Number(changeRequired) > Number(totalInReg)) {
    return { status: regStatus.insufficient_funds, change: [] };
  }

  if (Number(changeRequired) < Number(totalInReg)) {
    const denom = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1.0,
      FIVE: 5.0,
      TEN: 10.0,
      TWENTY: 20.0,
      "ONE HUNDRED": 100.0,
    };
    let changeToGive = [];
    for (let i = changeInDrawer.length - 1; i >= 0; i--) {
      const denomName = changeInDrawer[i][0];
      const denomTotal = changeInDrawer[i][1];
      const denomValue = denom[denomName];

      let denomAmount = (denomTotal / denomValue).toFixed(2);
      let changeToReturn = 0;
      // console.log(denomAmount);

      while (changeRequired >= denomValue && denomAmount > 0) {
        changeRequired -= denomValue;
        changeRequired = changeRequired.toFixed(2);
        denomAmount--;
        changeToReturn++;
      }
      if (changeToReturn > 0) {
        changeToGive.push([denomName, denomValue * changeToReturn]);
      }
    }
    let finalChange = parseFloat(
      changeToGive.reduce((first, next) => (first += next[1]), 0)
    ).toFixed(2);
    // console.log(finalChange);
    // console.log(change);
    if (Number(finalChange) != change) {
      return { status: regStatus.insufficient_funds, change: [] };
    }
    return { status: regStatus.open, change: changeToGive };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
