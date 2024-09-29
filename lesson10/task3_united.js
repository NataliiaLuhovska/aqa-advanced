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
