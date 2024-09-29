/*
В окремому файлі створіть клас "Електронна книга"(EBook), який буде успадковувати властивості та методи класу Book.
Додайте до класу EBook нову властивість, наприклад, "формат файлу".
Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook
    (все те саме що і для Book але ще формат файлу). 
Створіть інстанс(екземпляр) класу EBook та викличте метод printInfo 
*/

import Book from "./task1.js";

export default class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    const allowedFormats = ["PDF", "DOC", "TXT"];
    if (allowedFormats.includes(value.toUpperCase())) {
      this._fileFormat = value;
    } else {
      console.error(
        `File format can be one of the following: ${allowedFormats.join(", ")}`
      );
    }
  }

  printInfo() {
    return `${super.printInfo()}, fileFormat: ${this.fileFormat}`;
  }

  // Статичний метод для створення EBook з екземпляра класу Book
  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      console.error("The provided value is not an example of Book.");
      return null;
    }

    // Повертаємо новий екземпляр EBook на основі екземпляра Book
    return new EBook(book.name, book.author, book.year, fileFormat);
  }

  // Статичний метод для фільтрації тільки електронних книг
  static filterEBooks(books) {
    return books.filter((book) => book instanceof EBook);
  }
}
