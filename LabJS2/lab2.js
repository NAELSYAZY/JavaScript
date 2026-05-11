'use strict';

/**
 * вычисл степень числа
 * @param {number} x - исходное число
 * @param {number} n - степень
 * @return {number} рез вычисл x возведенный в степень n
 */
function pow(x, n) {
    return x ** n;
}


/**
 * вычисл сумму чисел от 1 до n
 * @param {number} n - Число n
 * @return {number} рез вычисл суммы чисел от 1 до n
 */
function sumTo(n) {
    return n * (n + 1) / 2;
}

/**
 * опред явл ли данный год високосным
 * @param {number} year год который проверяем
 * @return {boolean} правда если год викосный иначе ложь
 */
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}


/**
 * возвращает факториал числа
 * @param {number} n - Число
 * @return {bigint} факториал числа n
 */
function factorial(n) {
    n = BigInt(n);
    if (n === 0n || n === 1n) { 
        return 1n;
    } else {
        return n * factorial(n - 1n);
    }
}


/**
 * возвращ n-е число Фибоначчи
 * @param {number} n - индд числа фибоначи натур числ
 * @returns {BigInt} - n-е число фибоначчи
 */
function fib(n) {
    let a = BigInt(0);
    let b = BigInt(1);
    if (n === 0) return BigInt(0);
    for (let i = 2; i <= n; i++) {
        const temp = a;
        a = b;
        b += temp;
    }
    return b;
}



/**
 * возвращает ф-ию для сравнения знач с заданным числ
 * @param {number} x - число для сравнения
 * @returns {function(number): boolean|null} ф-ия для сравнения знач
 */
function compare(x) {
    return function(y) {
        if (y > x) {
            return true;
        } else if (y < x) {
            return false;
        } else {
            return null;
        }
    };
}


/**
 * возвращ сумму всех переданных аргументов
 * @param {...number} args аргументы для суммир
 * @returns {number} сумм всех аргументов
 */
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}