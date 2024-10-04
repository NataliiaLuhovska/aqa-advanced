// Клас для роботи з todo
class TodoService {
    // Метод для отримання об'єкта todo
    async getTodo() {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos/1'
            )
            const todo = await response.json()
            return todo
        } catch (error) {
            console.log('Помилка при завантаженні todo:', error)
        }
    }
}

// Клас для роботи з user
class UserService {
    // Метод для отримання об'єкта user
    async getUser() {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users/1'
            )
            const user = await response.json()
            return user
        } catch (error) {
            console.log('Помилка при завантаженні user:', error)
        }
    }
}

// Клас, який використовує методи з класів TodoService та UserService
class RequestHandler {
    constructor() {
        this.todoService = new TodoService()
        this.userService = new UserService()
    }

    // Метод, який виконує запити і використовує Promise.all
    async getAllData() {
        try {
            const [todoResult, userResult] = await Promise.all([
                this.todoService.getTodo(),
                this.userService.getUser(),
            ])
            console.log('Результати Promise.all:')
            console.log('Todo:', todoResult)
            console.log('User:', userResult)
        } catch (error) {
            console.log('Помилка в Promise.all:', error)
        }
    }

    // Метод, який виконує запити і використовує Promise.race
    async getFirstData() {
        try {
            const firstResult = await Promise.race([
                this.todoService.getTodo(),
                this.userService.getUser(),
            ])
            console.log('Результат Promise.race:', firstResult)
        } catch (error) {
            console.log('Помилка в Promise.race:', error)
        }
    }
}

// Створення екземпляра класу RequestHandler
const requestHandler = new RequestHandler()

// Виклик методів
requestHandler.getAllData() // Виконання запиту з Promise.all
requestHandler.getFirstData() // Виконання запиту з Promise.race
