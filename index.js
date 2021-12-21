"use strict"
 const arr = [
  { name: "card 1", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 2", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 3", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 4", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 5", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 6", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 7", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  {name: "card 8", lastUsed: new Date().getTime(), creationDate: new Date().getTime()}, 
]

const itemUl = document.getElementById("item");

const children = [...itemUl.children];

console.log(children);
const button = document.getElementById("sort");
console.log(button);


function createMarkup(arr) {
  return arr.map(({ name }) =>
    `
  <div>
     <p>${name}</p>
  </div>
  `).join("");
}
console.log(createMarkup())
 itemUl.insertAdjacentHTML("beforeend", createMarkup()); 

//------------------------------------------------


/* const arr = [
  { name: "card 1", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 2", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 3", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 4", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 5", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 6", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 7", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  {name: "card 8", lastUsed: new Date().getTime(), creationDate: new Date().getTime()}, 
]
const itemUl = document.getElementById("item");

const button = document.getElementById("sort");

function createMarkup(arr) {
  const markup = arr.map(({ name }) =>
    `<li class ="list" id = "${name}">
  <div  >
     <p>${name}</p>
  </div> </li>
  `
  );
console.log(arr)
  const arrayOfEl = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrayOfEl.push(markup[i]);
  }
  itemUl.insertAdjacentHTML("beforeend", arrayOfEl.join(""));


 */
