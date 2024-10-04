/*
Створіть клас "Книга"(Book) з властивостями, такими як "назва", "автор" і "рік видання".
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
*/

export default class Book {
    constructor(name, author, year) {
        this.name = name
        this.author = author
        this.year = year
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._name = value
        } else {
            console.error('Book name should not be empty')
        }
    }

    get author() {
        return this._author
    }

    set author(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._author = value
        } else {
            console.error('Author should not be empty')
        }
    }

    get year() {
        return this._year
    }

    set year(value) {
        if (Number.isInteger(value) && value > 0) {
            this._year = value
        } else {
            console.error('Year should not be empty')
        }
    }

    printInfo() {
        return `name: ${this.name}, author: ${this.author}, year: ${this.year})`
    }

    // Статичний метод для пошуку найдавнішої книги
    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            console.error('The input should be a non-empty array of books.')
            return null
        }

        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest
        })
    }
}
