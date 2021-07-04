function checkCashRegister(price, cash, cid) {
  let status = "OPEN";

  // Count available change in drawer
  let changeInDrawer = 0;
  for (var i = 0; i < cid.length; i++) {
    changeInDrawer += cid[i][1]*100
  }

  // Gets change due and checks if no change needed
  let changeDue = cash*100 - price*100;
  if (changeDue === 0 || changeDue == changeInDrawer) {
    return {status: "CLOSED", change: [...cid]}
  }

  // New array for pushing change
  let change = []
  cid.map((a,b) => {
    change.push([a[0], 0])
  })
  //Iterate through checking if changeDue is available in denotations
  if (changeInDrawer >= changeDue) {
    // Hundreds
    while (cid[8][1]*100 > 0 && changeDue / (100*100) >= 1) {
      cid[8][1] -= 100
      changeDue -= 10000
      change[8][1] += 100
    }
    // Twenties
    while (cid[7][1]*100 > 0 && changeDue / (20*100) >= 1) {
      cid[7][1] -= 20
      changeDue -= 2000
      change[7][1] += 20
    }
    // Tens
    while (cid[6][1]*100 > 0 && changeDue / (10*100) >= 1) {
      cid[6][1] -= 10
      changeDue -= 1000
      change[6][1] += 10
    }
    // Fives
    while (cid[5][1]*100 > 0 && changeDue / (5*100) >= 1) {
      cid[5][1] -= 5
      changeDue -= 500
      change[5][1] += 5
    }
    // Dollar
    while (cid[4][1]*100 > 0 && changeDue / (1*100) >= 1) {
      cid[4][1] -= 1
      changeDue -= 100
      change[4][1] += 1
    }
    // Quarter
    while (cid[3][1]*100 > 0 && changeDue / (0.25*100) >= 1) {
      cid[3][1] -= 0.25
      changeDue -= 25
      change[3][1] += 0.25
    }
    // Dime
    while (cid[2][1]*100 > 0 && changeDue / (0.1*100) >= 1) {
      cid[2][1] -= 0.10
      changeDue -= 10
      change[2][1] += 0.10
    }
    // Nickel
    while (cid[1][1]*100 > 0 && changeDue / (0.05*100) >= 1) {
      cid[1][1] -= 0.05
      changeDue -= 5
      change[1][1] += 0.05
    }
    // Penny
    while (cid[0][1]*100 > 0 && changeDue / (0.01*100) >= 1) {
      cid[0][1] -= 0.01
      changeDue -= 1
      change[0][1] += 0.01
    }
  }

  return changeDue === 0 ? {status: status, change: change.map((a,b) => a[1] > 0 ? [a[0], a[1]] : null).filter(a => a != null).reverse()} : {status: "INSUFFICIENT_FUNDS", change: []}

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

