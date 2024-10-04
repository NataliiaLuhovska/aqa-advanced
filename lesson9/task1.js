/* Завдання 1
Створіть порожній об'єкт з ім'ям student.
Додайте до об'єкта student наступні властивості:
    -firstName: рядок, представляє ім'я студента.
    -lastName: рядок, представляє прізвище студента.
    -age: число, представляє вік студента.
   - courses: масив, представляє список курсів, які він вивчає (наприклад, ["Математика", "Історія", "Програмування"]).
Виведіть об'єкт student в консоль. */

const student = {}
student.firstName = 'Nataliia'
student.lastName = 'Luhovska'
student.age = 30
student.courses = ['maths', 'history', 'programming']

console.log(student)
