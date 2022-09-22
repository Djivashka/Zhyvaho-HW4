/** ЗАВДАННЯ 1
  *
  * 1. Оголосіть змінну та присвойте їй стрілочну функцію
  *
  * 2. У функції не повинно бути параметрів
  *
  * 3. Поверніть з функції рядок "Привіт, світ!"
  *
  * 4. Викличте функцію та виведіть результат у консоль
  *
  */

const { isString } = require("cypress/types/lodash");

function func1(){
    console.log('Привіт, світ!')
}

func1();

/** ЗАВДАННЯ 2
  *
  * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
  *
  * 2. Використовуйте стрілочну функцію
  */

 function func2(){
    setTimeout(() => {
        console.log('Привіт, світ!')
    }, 5000);
    
}

func2();

/** ЗАВДАННЯ 3
  *
  * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
  * - name
  * - surname
  * - favoriteNumber
  *
  * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
  *     створюватиме в ньому додаткове поле age з довільним значенням.
  * Результат роботи функції це вивід у консоль рядка
  * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
  */

let obj = {
    name: 'Yaroslav',
    surname: 'Zhyvaho',
    favoriteNumber: '12'
}

function func3 (obj){
    obj = {
        name: 'Yaroslav',
        surname: 'Zhyvaho',
        favoriteNumber: '12',
        age: Math.random()
    }
    console.log('My name is ' + obj.name + ' ' + obj.surname + ', I am ' + obj.age + ' years old and my favorite number is ' + obj.favoriteNumber);
}
func3()

/** ЗАВДАННЯ 4
  *
  * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
  *
  * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
  *
  * 3. В функції замініть елемент масиву з типом int на інший з типом string
  *
  * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
  */

let mass = [1, false, 'sdfdsa'];

const func4 = (mass) => {
    mass = ['1', false, 'sdfdsa']
    console.log(mass)
}

func4();

/** ЗАВДАННЯ 5
  *
  * 1. Виправте код щоб обидва вирази (setTimeout та myFn()) працювали.
  *
  * setTimeout(function myFn() {
  * console.log('hello from myFn')
  * }, 2000)
  *
  * myFn()
  */

 function myFn(){
    setTimeout(() => {
        console.log('hello from myFn')
    }, 2000);
 } 
 
 myFn()


 /** ЗАВДАННЯ 6
  *
  * 1. Створіть масив із 3 об'єктами "cars"
  *
  * 2. Кожен об'єкт повинен мати три властивості
  * - carBrand (рядок)
  * - price (число)
  * - isAvailableForSale (логічне значення)
  *
  * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
  *
  * 4. В середині функції додайте ще один такий же обʼєкт в масив.
  *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
  *
  * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
  */

let massiveCars = [ 
    {cars1: {
        carBrand: 'BMW', 
        price: 2000,
        isAvailableForSale: false
    }
},
    {cars: {
        carBrand: 'Porsche', 
        price: 5000,
        isAvailableForSale: true
    }
},
    {cars: {
        carBrand: 'Mercedes', 
        price: 2000,
        isAvailableForSale: false
    }
},
];

function func6 (massiveCars){
    massiveCars.push(massiveCars[0])
    console.log(massiveCars);
}

func6(massiveCars);

/** ЗАВДАННЯ 7
  *
  * 1. Створіть обʼєкт
  *
    const myObject = {
        key1: true,
        key5: 10,
        key3: 'abc',
        key4: null,
        key10: NaN,
     }
  *
  * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
  *
  * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10
  *     то виводьте значення властивості в консоль.
  */

const myObject = {
    key1: true,
    key5: 10,       
    key3: 'abc',
    key4: null,
    key10: NaN,
}

// for (const [key, value] of Object.entries(myObject)) {
//     if (key == 'key10' || key == 'key3'){
//         console.log(value)
//     }
    
// }




function func7(obj){

    for (const [key, value] of Object.entries(obj)) {
        if (key == 'key10' || key == 'key3'){
            console.log(value)
        }
}
}
func7(myObject)


/** ЗАВДАННЯ 8
  *
  * 1. Створіть функцію "findProductById" із двома параметрами:
  * - ID товару
  * - масив товарів
  *
  * 2. Функція повинна повернути товар із певним ID
  *
  * 3. Якщо товару з певним ID у масиві товарів немає,
  * функція має повернути "undefined"
  *
  * 4. Також всередині функції виведіть у консоль товар по ID

    const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
 ]

 console.log(findProductById(6134, products)) // { postId: 6134, name: 'tablet' }

 console.log(findProductById(4511, products)) // undefined

 */


 const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
 ]


// function findProductById(id, products){
//     for (const i in products) {
//         if (products[i].productId == id)
//             console.log('postId: ' + id, 'name: ' + products[i].name);       
//         } 
// }
// findProductById(1, products)

function findProductById(id, products){
        if (products[0].productId == id) {
            console.log('postId: ' + id, 'name: ' + products[0].name); 
        } else if (products[1].productId == id) {
                console.log('postId: ' + id, 'name: ' + products[1].name);
        } else if (products[2].productId == id) {
            console.log('postId: ' + id, 'name: ' + products[2].name);
    } else {
        console.log(undefined)
    }       
}
findProductById(1, products)

/** ЗАВДАННЯ 9
 *
 * 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
 *
 * 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
 *
 * 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
 *
 * 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
 *
 * 5. Якщо масив не відсортований - повернути "Масив не відсортований"
 */

/*  const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */

 /**
  * ПІДКАЗКИ
  *
  * Підказка 1: Використовуйте метод масивів "every"
  * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
  * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
  */

  const a = [5, 'abc', 10, 1]
  const b = [4, 10, 14, 25, 25, 50]
  const c = [150, 132, 80, 40]
  const d = [15, 26, 10, 23, 85]

  function arraySortInfo(inputArray){
    if (inputArray.every((element, index) => {
        if(index > 0){
            return element >= inputArray[index - 1]
        } else { 
            return true
        }
    } )) {
        return "Масив відсортований за зростанням"

    } else if (inputArray.every((element, index) => {
        if(index > 0){
            return element <= inputArray[index - 1]
        } else { 
            return true
        }
    } )) {
        return "Масив відсортований за спаданням"

    }  else if (inputArray.some((element) => {
        if(element == 'abc'){
            return true
        }
    } )) {
    return "Деякі елементи не є числами"
} 
        else {
            return 'Масив не відсортований' 
    }
  }

  console.log(arraySortInfo(a))





