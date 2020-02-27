function checkCashRegister(price, cash, cid) {
  let totalInReg = parseFloat(
    cid.reduce((first, next) => (first += next[1]), 0)
  ).toFixed(2);
  console.log(totalInReg);
  let changeInDrawer = cid;
  let regStatus = {
    closed: "CLOSED",
    insufficient_funds: "INSUFFICIENT_FUNDS",
    open: "OPEN"
  };
  let changeRequired = parseFloat(cash - price).toFixed(2);
  const change = parseFloat(cash - price).toFixed(2);
  console.log(changeRequired);

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
      "ONE HUNDRED": 100.0
    };
    let changeToGive = [];
    for (let i = changeInDrawer.length - 1; i >= 0; i--) {
      const denomName = changeInDrawer[i][0];
      const denomTotal = changeInDrawer[i][1];
      const denomValue = denom[denomName];

      let denomAmount = (denomTotal / denomValue).toFixed(2);
      let changeToReturn = 0;
      console.log(denomAmount);

      while (changeRequired >= denomValue && denomAmount > 0) {
        changeRequired -= denomValue;
        changeRequired = changeRequired.toFixed(2);
        denomAmount--;
        changeToReturn++;
      }
git 
      if (changeToReturn > 0) {
        changeToGive.push([denomName, denomValue * changeToReturn]);
      }
    }
    let finalChange = parseFloat(
      changeToGive.reduce((first, next) => (first += next[1]), 0)
    ).toFixed(2);
    console.log(finalChange);
    console.log(change);
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
    ["ONE HUNDRED", 0]
  ])
);
