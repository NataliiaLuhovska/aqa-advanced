//Завдання 1
//Напишіть функцію за допомогою Axios, яка навмисно надсилає запит на неправильну URL - адресу, викликаючи помилку.
//Потім за допомогою Jest напишіть тест, який перевіряє, чи правильно обробляється помилка та чи повертається належне повідомлення
//про помилку

import axios from "axios";

// Функція для навмисного виклику помилки
async function requestWithError() {
    try {
        await axios.get('https://api.restful-api.dev/incorrect-url');
    } catch (error) {
        if (error.response) {
            const statusText = error.response.statusText || 'Not Found';
            return `Error: ${error.response.status} - ${statusText}`;
        }
        return 'Unknown error';
    }
}

// Тест
test('Error handling for incorrect URL', async () => {
    const errorMessage = await requestWithError();
    expect(errorMessage).toBe('Error: 404 - Not Found');
});


//Завдання 2
//Testing Request Headers and Params Складність: середній
//Створіть функцію за допомогою Axios, щоб зробити запит, який містить кастомні хедери та параметри URL-адреси.
//Напишіть тест Jest, щоб переконатися, що заголовки та параметри правильно включені в запит.

// Функція для запиту 
async function requestWithHeadersAndParams() {
    const response = await axios.get('https://api.restful-api.dev/objects', {
        headers: {
            'Custom-Header': 'CustomHeaderValue'
        },
        params: {
            id: 123,
            type: 'example'
        }
    });
    return response;
}

// Тест
test('Request with custom headers and params', async () => {
    const response = await requestWithHeadersAndParams();

    expect(response.status).toBe(200);
    expect(response.config.headers['Custom-Header']).toBe('CustomHeaderValue');
    expect(response.config.params.id).toBe(123);
    expect(response.config.params.type).toBe('example');
});
