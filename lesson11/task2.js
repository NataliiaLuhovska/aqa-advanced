/* Завдання 2
В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

1. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo */

function loadTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            return response.json()
        })
        .then(function (todo) {
            return todo
        })
        .catch(function (error) {
            console.error('Error fetching todo:', error)
        })
}

// Виклик функції
loadTodo().then(function (result) {
    console.log(result)
})

/* 2. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user
Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1 - 2. 
Присвойте значення отримані від цих виразів до змінних */

function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            return response.json()
        })
        .then(function (todo) {
            return todo
        })
        .catch(function (error) {
            console.log('Помилка при завантаженні todo:', error)
        })
}

// Функція для отримання об'єкта user
function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
            return response.json()
        })
        .then(function (user) {
            return user
        })
        .catch(function (error) {
            console.log('Помилка при завантаженні user:', error)
        })
}

// Використання Promise.all для очікування обох запитів
var allResults = Promise.all([getTodo(), getUser()])
    .then(function (results) {
        var todoResult = results[0]
        var userResult = results[1]
        console.log('Результати Promise.all:')
        console.log('Todo:', todoResult)
        console.log('User:', userResult)
    })
    .catch(function (error) {
        console.log('Помилка в Promise.all:', error)
    })

// Використання Promise.race для отримання першого виконаного запиту
var raceResult = Promise.race([getTodo(), getUser()])
    .then(function (firstResult) {
        console.log('Результат Promise.race:', firstResult)
    })
    .catch(function (error) {
        console.log('Помилка в Promise.race:', error)
    })
