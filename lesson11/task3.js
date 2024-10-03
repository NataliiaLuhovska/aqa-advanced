// Функція для отримання об'єкта todo з використанням async/await

async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.log("Помилка при завантаженні todo:", error);
  }
}

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.log("Помилка при завантаженні user:", error);
  }
}

async function executeRequests() {
  try {
    // Використання Promise.all для очікування обох запитів

    const [todoResult, userResult] = await Promise.all([getTodo(), getUser()]);
    console.log("Результати Promise.all:");
    console.log("Todo:", todoResult);
    console.log("User:", userResult);

    // Використання Promise.race для отримання першого виконаного запиту

    const firstResult = await Promise.race([getTodo(), getUser()]);
    console.log("Результат Promise.race:", firstResult);
  } catch (error) {
    console.log("Помилка при виконанні запитів:", error);
  }
}

executeRequests();
