function calculateMoney(ticketSale) {
    ticketSellNumber = ticketSale;
    ticketPrices = 120;
    totalTicketPrice = ticketPrices * ticketSellNumber;
    gard = 500;
    lunchCost = 50;
    staffMember = 8;
    totalLunchCost = staffMember * lunchCost;
    totalCost = totalLunchCost + gard;
    profit = totalTicketPrice - totalCost;
    if (profit >= 0) {
        return profit;
    } else {
        return "Invalid Number";
    }
}
const result = calculateMoney
console.log(result(10));



// problem-2
function checkName(name) {
    if (typeof name !== "string") {
      return "Invalid Input";
    }
    const lowercaseName = name.toLowerCase();
    const lastChar = lowercaseName[lowercaseName.length - 1];
    if (
      lastChar === "a" ||
      lastChar === "y" ||
      lastChar === "i" ||
      lastChar === "e" ||
      lastChar === "o" ||
      lastChar === "u" ||
      lastChar === "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }

// problem-3
function deleteInvalids(array) {
    const filtered = [];
    if (Array.isArray(array) === false) {
      return "Invalid input!  Plz provide an array ...";
    }
    for (let arryaes of array) {
      if (typeof arryaes === "number" && Number.isNaN(arryaes) === false) {
        filtered.push(arryaes);
      }
    }
    return filtered;
  }
const userArray = { num: [1, 2, 3] };
const arrayResult = deleteInvalids(userArray);
console.log(arrayResult);


// prblm-4
function password(obj) {
    if (!obj.property("name") || !obj.property("birthYear") || !obj.property("siteName")) {
      return "invalid";
    }
    if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
      return "invalid";
    }
  
    const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const username = obj.name + "@" + obj.birthYear;
    const password = websiteName + "#" + username;
  
    return password;
  }



// prblm-5
function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "Invalid input. plz enter vail input..";
    }
    let totalEarning = 0;
    for (let array of arr) {
        if (array >= 3000) {
            totalEarning += array * 20 / 100;
        } else {
            totalEarning += array;
        }
    }
    let savingsAmount = totalEarning - livingCost;
    if (savingsAmount <= 0) {
        return "earn more";
    } else {
        return savingsAmount;
    }
}


console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));



