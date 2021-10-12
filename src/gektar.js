'use strict';

let str = document.querySelector('#vri');

let vriButton = document.querySelector('.vri__button');


let stat = (str) => {
    let replaceNumber = str.value.replace(/[0-9,.]/g, '');

    let arr = replaceNumber.split(/\n|;/).map((a) => a.toLowerCase()).map((a) => a.trim()).filter(element => element !== "");

    let obj = {};

    let toObj = (str) => {
        if (obj.hasOwnProperty(str)) {
            return obj[str] += 1;
        }
        return obj[str] = 1;
    };

    arr.map((a) => { return toObj(a) });

    let objectArray = Object.entries(obj);

    let ar = [];

    console.log(ar);

    objectArray.forEach(([key, value]) => {
        ar.push({ key, value: +value })
    })

    return ar.sort((a, b) => b.value - a.value);

    // console.log(arr);
}

let root = document.querySelector('.root');




let statList = {
    izhs: {
        name: 'для индивидуального жилищного строительства',
        count: 0
    },

}

let statListFilter = {
    izhs: [
        'для индивидуального жилищного строительства',
        'для ведения личного подсобного хозяйства (приусадебный земельный участок)'
    ]
};

let sumVri = (stat, arr) => {
    let arrVri = {};

    let keys = Object.keys(stat);
    console.log(keys);

    let obj = arr.map((a)=> a[key]);
    // .reduce((acc, el) => ({ ...acc, ...el }), {});


    console.log(obj);

    let sum = (ar) => ar.reduce((acc, cur) => acc + obj[cur], 0);

    keys.map((key) => arrVri[key] = sum(stat[key]));

    console.log(arrVri);


};


let render = (arr) => {
    console.log(arr);
    sumVri(statListFilter, stat(str));

    let fragment = document.createDocumentFragment();

    let ul = document.createElement('ul');
    ul.className = "list-group";

    arr.forEach(({ key, value }) => {
        // console.log(key);
        let li = document.createElement('li');
        li.innerHTML = `${key}: ${value}`;
        li.className = "list-group-item";
        return ul.appendChild(li)
    });


    fragment.appendChild(ul);


    root.appendChild(fragment);
};

vriButton.addEventListener('click', () => str ? render(stat(str)) : null);


