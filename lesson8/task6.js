/* Завдання 6: Сортування масивів

У вас є вихідний масив
сonst numbersList = [1,10,14,2,4,5,43,34]
Створіть новий масив на основі вихідного масиву (копіюйте його)
Відсортуйте створений масив (від меншого до більшого)
Виведіть обидва масиви в консоль*/

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const numbersListCopy = numbersList.slice();

// Відсортовуємо копію масиву по зростанню
const numbersListSorted = numbersListCopy.sort((a, b) => a - b);

console.log(numbersList);
console.log(numbersListSorted);
