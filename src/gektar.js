const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'example.xlsx'
});
console.log(result);

// let str = document.querySelector('#vri');

// let vriButton = document.querySelector('.vri__button');


// let stat = (str) => {
//     let replaceNumber = str.value.replace(/[0-9,.]/g, '');

//     let arr = replaceNumber.split(/\n|;/).map((a) => a.toLowerCase()).map((a) => a.trim()).filter(element => element !== "");

//     let obj = {};

//     let toObj = (str) => {
//         if (obj.hasOwnProperty(str)) {
//             return obj[str] += 1;
//         }
//         return obj[str] = 1;
//     };

//     arr.map((a) => { return toObj(a) });

//     let objectArray = Object.entries(obj);

//     let ar = [];

//     objectArray.forEach(([key, value]) => {
//         ar.push({ key, value: +value })
//     })

//     return ar.sort((a, b) => b.value - a.value);

//     console.log(ar);
// }

// let root = document.querySelector('.root');

// let render = (arr) => {
//     let fragment = document.createDocumentFragment();

//     let ul = document.createElement('ul');
//     ul.className = "list-group";

//     arr.forEach(({ key, value }) => {
//         console.log(key);
//         let li = document.createElement('li');
//         li.innerHTML = `${key}: ${value}`;
//         li.className = "list-group-item";
//         return ul.appendChild(li)
//     });


//     fragment.appendChild(ul);


//     root.appendChild(fragment);
// };

// vriButton.addEventListener('click', () => str ? render(stat(str)) : null);


// // var xhr = new XMLHttpRequest()
// // xhr.open('GET', 'https://6.react.pages.academy/wtw/films')
// // xhr.send()
// // xhr.onreadystatechange = function () { // (3)
// //     if (xhr.readyState != 4) return;

// //     console.log(true);
// //     if (xhr.status != 200) {
// //         alert(xhr.status + ': ' + xhr.statusText);
// //     } else {
// //         alert(xhr.responseText);
// //     }

// // }

// console.log('Hello');

// index.js
// создание свойства класса без конструктора
// class Game {
//     name = 'Violin Charades'
// }
// const myGame = new Game()

// создаем параграф
// const p = document.createElement('p')
// p.textContent = `I like ${myGame.name}.`

// создаем элемент заголовка
// const heading = document.createElement('h1')
// heading.textContent = 'Как интересно!'

// добавляем параграф и заголовок в DOM
// const root = document.querySelector('#root')
// root.append(heading, p)