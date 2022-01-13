/* Очищає консоль */
/* console.clear() */

/* Показує тільки якщо false */
/* const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, { x, y, reason });


/* Показує скільки разів було викликано */
/* console.count();
console.count('coffee');
console.count();
console.count();
console.countReset()/* Скидає console.count 
console.countReset('coffee');
console.count();
console.count('coffee'); */

/* Ідентичний console.log */
/* console.debug('debug'); */

/* Відкриває методи */
/* console.dir(document.head); */

/* Відкриває html документ */
/* console.dirxml(document); */

/* Відкриває і формує як помилку */
/* console.error("I'm sorry, Dave. I'm afraid I can't do that."); */

/* Візуально групує повідомлення - console.groupCollapsed, console.group */
/* const label = 'Adolescent Irradiated Espionage Tortoises';
console.groupCollapsed(label);
console.info('Leo');/* Ідентичний console.log */
/* console.info('Mike');
console.info('Don');
console.info('Raph');
console.groupEnd(label);  /* Зупиняє групу */

/* Записує масив обєктів у вигляді таблиці */
/* console.table([
  {
    first: 'René',
    last: 'Magritte',
  },
  {
    first: 'Chaim',
    last: 'Soutine',
    birthday: '18930113',
  },
  {
    first: 'Henri',
    last: 'Matisse',
  }
]); */

/* Запускає таймер */
/* console.time();
for (var i = 0; i < 100000; i++) {
    let square = i ** 2;
    
}
/* Зупиняє таймер 
console.timeEnd(); */

/* Відображає трасування стека на консолі */
/* const first = () => { second(); };
const second = () => { third(); };
const third = () => { fourth(); };
const fourth = () => { console.trace(); };
first(); 
 */
/* Показує попередження */
/* console.warn('Увага');

console.clear();

[[a] = [[3] * [2]]]


console.log(a)

function name(params) {
  console.log(1)
}

console.log(name())

let _thisIsUndefined
const doNothing = () => {}
const someObj = {
    a: 'ay',
    b: 'bee',
    c: 'si'
}
console.log(_thisIsUndefined) // undefined
console.log(doNothing()) // undefined
console.log(someObj['d']) // undefined

console.log(null == undefined) // true
console.log(null === undefined)  */// false

/* fs.readFile('path/to/file', (e, data) => {
    console.log(e) // здесь мы получаем null
if(e) {
    console.log(e)
}
    console.log(data)
}) */

/* console.log(false && 1 && []) // false
console.log(' ' && true && 5) // 5
console.clear()
// глобальное пространство имен
var g = 'global'

function globalFunc() {
    function innerFunc() {
        console.log(g) // имеет доступ к переменной g, поскольку она является глобальной
    }
    innerFunc()
}
console.clear() */

/* function myFavouriteFunc(j) {
    if (true) {
        var b = 'Hello ' + j
  }
  console.log(j) // Виконається і буде World
  console.log(b) // Виконається і буде Hello World
    return b
}
myFavouriteFunc('World')

console.log(j) // Uncaught ReferenceError: a is not defined
console.log(b) */ // не выполнится



/* function testBlock() {
    if (true) {
        let z = 5
    }
    return z
}

testBlock()  */// Uncaught ReferenceError: z is not defined

// глобальная область видимости
/* let variable1 = 'Comrades'
let variable2 = 'Sayonara'

function outer() {
    // внешняя область видимости
    let variable1 = 'світ'

    function inner() {
        // внутренняя область видимости
        let variable2 = 'Привіт'
        console.log(variable2 + ' ' + variable1)
    }
    inner()
}
outer() */
// в консоль выводится 'Hello World',
// потому что variable2 = 'Hello' и variable1 = 'World' являются ближайшими
// к внутренней области видимости переменными

/* var globalVar = 'global'
var outerVar = 'outer'

function outerFunc(outerParam) {
    function innerFunc(innerParam) {
        console.log(globalVar, outerParam, innerParam)
    }
    return innerFunc
}


const x = outerFunc(outerVar) 
outerVar = 'outer-2'
globalVar = 'guess'
x('inner')  */ // guess outer inner

/* const arrFunc = []
 for (var i = 0; i < 5; i++) {
    arrFunc.push(function() {
        return i
    })
}
console.log(i)  // 5

for (let i = 0; i < arrFunc.length; i++) {
   
    console.log(arrFunc[i]()) // все 5
} */

/* const products = [ {
    id : 'sku1',
    qty: 1,
}, {
    id : 'sku2',
    qty: 2,
}, {
    id : 'sku3',
    qty: 3,
}, {
    id : 'sku1',
    qty: 6,
}, {
    id : 'sku1',
    qty: 8,
}, {
    id : 'sku2',
    qty: 19,
}, {
    id : 'sku4',
    qty: 1,
    }]


    for (let i = 0; i < products.length; i+=1) {
        for (let j = i+1; j < products.length; j+=1) {
           if (products[i].id === products[j].id) {
               console.log(products[j])
               products[i].qty += products[j].qty;
               products.splice(j, 1)
               j--
           }  
        } 
    }
console.log(products) */
     
  /* const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
    { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
    { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
]
let total = 0
for (let i = 0; i < friends.length; i += 1) {
    if (friends[i].age) {
         total += friends[i].age
    } 
}
console.log(total) 

friends.forEach(function (number, j) {
    const book = number.books
    
    book.flatMap(h => h)
    console.log(book)
})
    
console.log(friends)
    
 */
/* 
~
if(arr.indexOf(item))
if(arr.indexOf(item) 
if(~arr.indexOf(item))
-1-value
0 -1
-1 0
if(!!~arr.indexOf(item))
Task-2: Порахувати кількість книжок користувачів, у яких є книга "Harry Potter",не використовуючи метод includes.
(перевірити користувачів на наявність потрібної книги за допомогою indexOf())
Task-3.1: Зібрати масив всіх книг користувачів в один масив, потім повернути масив унікальних книг.

 */

document.write("<h2>Числа Фибоначчи </h2>");
for (i=0, j=1, k=0, fib =0; i<50; i++, fib=j+k, j=k, k=fib){
 document.write("Fibonacci (" + i + ") = " + fib);
 document.write("<br>");
}

var n = 123456.789;
n.toFixed(0); // "123457"
console.log(n.toFixed(n.toPrecision(4)))
n.toFixed(2); // "123456.79"
n.toExponential(1); // "1.2e+5"
n.toExponential(3); // "1.235e+5"
n.toPrecision(4); // "1.235e+5"
n.toPrecision(7); // "123456.8"

