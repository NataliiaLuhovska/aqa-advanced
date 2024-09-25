/* Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі */

const users = [{ name: "Nataliia" }, { email: "nata@nata.com" }, { age: 30 }];

for (const user of users) {
  console.log(users);
}

const [name, email, age] = users;

console.log(name);
console.log(email);
console.log(age);
