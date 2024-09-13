/*Завдання 1
Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)*/

//function declaration

function square(width, height) {
  return width * height;
}
console.log(square(20, 555));

//function expression
const squareExp = function (width, height) {
  return width * height;
};
console.log(squareExp(20, 555));

//arrow function
const squareArr = (width, height) => {
  return width * height;
};
console.log(squareArr(20, 555));

//short
const squareCon = (width, height) => width * height;
console.log(squareCon(20, 555));
