function isValidNumber(value) {
  return !isNaN(value) && value !== "" && value !== null;
  // isNaN(value) -> true if value is "Not a Number"
  // we also make sure it's not empty or null
}

function arithmeticCalculator(num1, num2, operator) {
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    return "Invalid input: please enter valid numbers";
  }

  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) return "Cannot divide by zero";
      return num1 / num2;
    default:
      return "Invalid operator. Use +, -, *, or /";
  }
}

console.log(arithmeticCalculator(10, 5, "+")); // 15
console.log(arithmeticCalculator(10, 0, "/")); // Cannot divide by zero
console.log(arithmeticCalculator("abc", 5, "+")); // Invalid input


function calculatePercentage(number, percent) {
  if (!isValidNumber(number) || !isValidNumber(percent)) {
    return "Invalid input: please enter valid numbers";
  }
  return (Number(number) * Number(percent)) / 100;
}

console.log(calculatePercentage(200, 10)); // 20 (10% of 200)

function calculateMarksPercentage(obtainedMarks, totalMarks) {
  if (!isValidNumber(obtainedMarks) || !isValidNumber(totalMarks)) {
    return "Invalid input: please enter valid numbers";
  }
  if (Number(totalMarks) === 0) {
    return "Total marks cannot be zero";
  }
  return (Number(obtainedMarks) / Number(totalMarks)) * 100;
}

console.log(calculateMarksPercentage(85, 100)); 
console.log(calculateMarksPercentage(45, 50)); 

function calculateAge(birthYear) {
  if (!isValidNumber(birthYear)) {
    return "Invalid input: please enter a valid year";
  }

  let currentYear = new Date().getFullYear(); // gets today's year automatically
  let age = currentYear - Number(birthYear);

  if (age < 0) return "Invalid birth year";
  return age;
}

console.log(calculateAge(2000)); // e.g. 26 (depends on current year)
console.log(calculateAge("abc")); // Invalid input



function calculateDiscount(price, percent) {
  if (!isValidNumber(price) || !isValidNumber(percent)) {
    return "Invalid input: please enter valid numbers";
  }
  if (percent < 0 || percent > 100) {
    return "Discount percent must be between 0 and 100";
  }

  let discountAmount = (Number(price) * Number(percent)) / 100;
  let finalPrice = Number(price) - discountAmount;
  return finalPrice;
}

console.log(calculateDiscount(1000, 20)); 
console.log(calculateDiscount(1000, 150)); 

function convertTemperature(value, unit) {
  if (!isValidNumber(value)) {
    return "Invalid input: please enter a valid number";
  }

  value = Number(value);

  if (unit === "C") {
    return (value * 9) / 5 + 32; 
  } else if (unit === "F") {
    return ((value - 32) * 5) / 9; 
  } else {
    return "Invalid unit: use 'C' or 'F'";
  }
}

console.log(convertTemperature(0, "C"));   
console.log(convertTemperature(212, "F")); 
