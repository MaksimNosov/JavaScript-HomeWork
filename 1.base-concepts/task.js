"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    arr = [];
  }
  if (d === 0) {
    arr = [(b * (-1)) / ( 2 * a)];
  }
  if (d > 0) {
    arr = [((b * (-1)) + Math.sqrt(d) ) / (2 * a), ((b * (-1)) - Math.sqrt(d) ) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return "Аргумент 'Процентная ставка' введён некорректно";
    }
  
  if (isNaN(contribution)) {
    return "Аргумент 'Начальный взнос' введён некорректно";
    }
  
  if (isNaN(amount)) {
    return "Аргумент 'Общая стоимость' введён некорректно";
    }

  let convertedPercent = percent / 100;
  let monthlyPercent = convertedPercent / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
  let totalPaymentAmount = Number((monthlyPayment * countMonths).toFixed(2));
  return totalPaymentAmount;
}
