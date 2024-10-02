import Book from "./task1.js";
import EBook from "./task2.js";

const book1 = new Book("Dune", "Frank Herbert", 1965);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Sapiens", "Yuval Noah Harari", 2011);
const ebook1 = new EBook("Example", "Herbert", 1989, "PDF");

console.log(book1.printInfo());
console.log(book2.printInfo());
console.log(book3.printInfo());
console.log(ebook1.printInfo());

// Виклик статичного методу для пошуку найдавнішої книги
const books = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(books);

if (oldestBook) {
  console.log("The oldest book is:");
  console.log(oldestBook.printInfo());
} else {
  console.error("Cannot find the oldest book.");
}

// Виклик статичного методу для фільтрації тільки електронних книг
const ebooks = EBook.filterEBooks(books);

console.log("Electronic books are:");
ebooks.forEach((ebook) => console.log(ebook.printInfo()));
