/* Очищає консоль */
/* console.clear() */

/* Показує тільки якщо false */
const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, { x, y, reason });


/* Показує скільки разів було викликано */
console.count();
console.count('coffee');
console.count();
console.count();
console.countReset()/* Скидає console.count */
console.countReset('coffee');
console.count();
console.count('coffee');

/* Ідентичний console.log */
console.debug('debug');

/* Відкриває методи */
console.dir(document.head);

/* Відкриває html документ */
console.dirxml(document);

/* Відкриває і формує як помилку */
console.error("I'm sorry, Dave. I'm afraid I can't do that.");

/* Візуально групує повідомлення - console.groupCollapsed, console.group */
const label = 'Adolescent Irradiated Espionage Tortoises';
console.groupCollapsed(label);
console.info('Leo');/* Ідентичний console.log */
console.info('Mike');
console.info('Don');
console.info('Raph');
console.groupEnd(label);/* Зупиняє групу */

/* Записує масив обєктів у вигляді таблиці */
console.table([
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
]);

/* Запускає таймер */
console.time();
for (var i = 0; i < 100000; i++) {
    let square = i ** 2;
    
}
/* Зупиняє таймер */
console.timeEnd();

/* Відображає трасування стека на консолі */
const first = () => { second(); };
const second = () => { third(); };
const third = () => { fourth(); };
const fourth = () => { console.trace(); };
first();

/* Показує попередження */
console.warn('Увага');


