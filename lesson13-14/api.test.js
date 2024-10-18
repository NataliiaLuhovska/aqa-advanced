import axios from "axios";

// Test1: GET request - отримання всіх об'єктів

test('GET / valid payload', async () => { 
    const response = await axios.get('https://api.restful-api.dev/objects')
    expect(response.status).toBe(200);
    console.log(response.data);
})


// Test2: POST request - створення нового об'єкта

let createdObjectId; // Змінна для зберігання ID новоствореного об'єкта

test('POST / create a new object', async () => { 
    const response = await axios.post('https://api.restful-api.dev/objects',
        {
             name: "Apple MacBook Pro 16 nlu",
             data: {
                 year: 2025,
                 price: 5000.99,
                 "CPU model": "Intel Core nlu 2206",
                "Hard disk size": "1 TB"
                    }
    })
    expect(response.status).toBe(200);
    expect(typeof response.data.name).toBe("string");
    expect(typeof response.data.data.year).toBe("number");
    expect(response.data.data.price).toBeDefined();
    expect(typeof response.createdAt).toBeDefined();
    createdObjectId = response.data.id;
    
    // Зберігаємо ID створеного об'єкта для подальшого видалення
    createdObjectId = response.data.id;

    console.log(createdObjectId);
})

// Test3: GET request - отримання даних про новостворений об'єкт

test('GET / object by id', async () => { 
    const objectId = "ff80818192925da70192958bebe709bf";
    const response = await axios.get(`https://api.restful-api.dev/objects/${objectId}`);
    expect(response.status).toBe(200);
    expect(typeof response.data.id).toBe("string");
    expect(typeof response.data.name).toBe("string");
    expect(typeof response.data.data.year).toBe("number");
    expect(response.data.data.price).toBeDefined();
    expect(typeof response.createdAt).toBeDefined();
    console.log(response.data);
})

// Test4: PUT request - оновлення об'єкта

test('PUT / update price of the object', async () => { 
    const objectId2 = "ff80818192925da70192959442780a19";
    const response = await axios.put(`https://api.restful-api.dev/objects/${objectId2}`,
        {
             name: "Apple MacBook Pro 16 nlu",
             data: {
                 year: 2025,
                 price: 7000.99,
                 "CPU model": "Intel Core nlu 2206",
                "Hard disk size": "1 TB"
                    }
    })
    expect(response.status).toBe(200);
    expect(typeof response.data.name).toBe("string");
    expect(response.data.data.price).toBeDefined();
    expect(typeof response.createdAt).toBeDefined();
    console.log(response.data);
})

// Test5: DELETE request - видалення об'єкта

test('DELETE / object by id', async () => { 
    expect(createdObjectId).toBeDefined();
    const response = await axios.delete(`https://api.restful-api.dev/objects/${createdObjectId}`);
    expect(response.status).toBe(200);
    console.log(response.data);
})