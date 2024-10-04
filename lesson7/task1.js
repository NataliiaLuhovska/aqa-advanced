/*
Створіть функцію handleNum яка буде приймати 3 параметри.
    a) число
    b) Колбек функцію яку треба викликати якщо передане число парне
    c) Колбек функцію яку треба викликати якщо передане число непарне */

function handleNum(num, handleEven, handleOdd) {
    if (num % 2 == 0) {
        return handleEven(num)
    } else {
        return handleOdd(num)
    }
}

function handleEven(num) {
    return 'number is even'
}

function handleOdd(num) {
    return 'number is odd'
}

console.log(handleNum(10, handleEven, handleOdd))
console.log(handleNum(9, handleEven, handleOdd))
