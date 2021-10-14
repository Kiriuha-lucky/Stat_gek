import statList from "./statList";
import statListFilter from "./statListFilter";

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

    Object.keys(obj).sort().forEach(function (key) {
        var value = obj[key];
        delete obj[key];
        obj[key] = value;
    });

    return obj;
};

let sumAllViews = 0;


let countAllViews = () => {
    let allViewsArray = Object.entries(stat(str));
    console.log(666, allViewsArray);

    return(allViewsArray.reduce((acc, cur)=>acc+cur[1], 0));
};

let root = document.querySelector('.root');

let sumVri = (statList, statListFilter, arr) => {
    let keys = Object.keys(statList);


    let countVri = (key) => {
        let arrVri = statListFilter[key];

        let sum = arrVri.reduce((acc, cur)=>arr[cur] ? acc + arr[cur]: acc, 0);


        return sum;
    };

    keys.map((key) =>{
        statList[key].count = countVri(key);
        sumAllViews = sumAllViews - countVri(key);
    });

    statList.other.count = sumAllViews;

};


let render = (arr) => {
    console.log(arr);
    sumAllViews = countAllViews();
    console.log(`Всего: ${sumAllViews}`);
    sumVri(statList, statListFilter, arr);
    
    let statListArray = Object.entries(statList);

    let fragment = document.createDocumentFragment();

    let ul = document.createElement('ul');
    ul.className = "list-group";

    statListArray.map((st) => {
        let li = document.createElement('li');
        li.innerHTML = `${st[1].name}: ${st[1].count}`;
        li.className = "list-group-item";
        return ul.appendChild(li)
    });


    fragment.appendChild(ul);


    root.appendChild(fragment);
};

vriButton.addEventListener('click', () => str ? render(stat(str)) : null);


