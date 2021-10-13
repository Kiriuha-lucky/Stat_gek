'use strict';

// let str = document.querySelector('#vri');

let str = `2.3 Блокированная жилая застройка; 1.16 Ведение личного подсобного хозяйства на полевых участках; 11.0 Водные объекты; 1.20 Выпас сельскохозяйственных животных; 1.2 Выращивание зерновых и иных сельскохозяйственных культур; 1.4 Выращивание тонизирующих, лекарственных, цветочных культур; 2.2 Для ведения личного подсобного хозяйства (приусадебный земельный участок); 2.1 Для индивидуального жилищного строительства; 10.1 Заготовка древесины; 10.3 Заготовка лесных ресурсов; 1.9 Звероводство; 10.2 Лесные плантации; 1.14 Научное обеспечение сельского хозяйства; 1.18 Обеспечение сельскохозяйственного производства; 2.7 Обслуживание жилой застройки; 1.3 Овощеводство; 1.17 Питомники; 5.2 Природно-познавательный туризм; 6.0 Производственная деятельность; 1.10 Птицеводство; 1.12 Пчеловодство; 1.13 Рыбоводство; 1.5 Садоводство; 1.11 Свиноводство; 1.19 Сенокошение; 1.8 Скотоводство; 2.5 Среднеэтажная жилая застройка; 5.2.1 Туристическое обслуживание; 1.15 Хранение и переработка сельскохозяйственной продукции
Ведение садоводства; Магазины; Общественное питание; Предоставление коммунальных услуг; Связь; садоводство
Земельные участки (территории) общего пользования; Охрана природных территорий
Ведение садоводства; Магазины; Общественное питание; Предоставление коммунальных услуг; Связь; садоводство
Ведение садоводства; садоводство
Ведение садоводства; Магазины; Общественное питание
Ведение садоводства; садоводство
Ведение садоводства
для индивидуального жилищного строительства
Земельные участки (территории) общего пользования; Охрана природных территорий
ведение огородничества; гостиничное обслуживание; для ведения личного подсобного хозяйства (приусадебный земельный участок); для индивидуального жилищного строительства; магазины
Ведение садоводства; садоводство
Объекты административно-делового назначения; Объекты инженерно-технического обеспечения; Объекты культурно-досугового назначения; Объекты общественного питания; Объекты отдыха и туризма; Объекты спорта; Объекты торгового назначения
Ведение садоводства
Охрана природных территорий
Охрана природных территорий
Охрана природных территорий
Охрана природных территорий
ведение огородничества
Ведение личного подсобного хозяйства (ЛПХ); Индивидуальные жилые дома
Охрана природных территорий
Охрана природных территорий
Ведение дачного хозяйства; садоводство
садоводство
1.16 Ведение личного подсобного хозяйства на полевых участках

`;

let vriButton = document.querySelector('.vri__button');

function customSort(obj, lastkey) {
    let res = {};
    Object.keys(obj).sort(function (a, b) {
        return a == lastkey ? true : b == lastkey ? false : a > b;
    }).forEach(function (key) {
        res[key] = obj[key];
    });
    return res;
};


let stat = (str) => {
    // let replaceNumber = str.value.replace(/[0-9,.]/g, '');
    let replaceNumber = str.replace(/[0-9,.]/g, '');

    let arr = replaceNumber.split(/\n|;/).map((a) => a.toLowerCase()).map((a) => a.trim()).filter(element => element !== "");

    let obj = {};

    let toObj = (str) => {
        if (obj.hasOwnProperty(str)) {
            return obj[str] += 1;
        }
        return obj[str] = 1;
    };

    arr.map((a) => { return toObj(a) });

    console.log(obj);

    Object.keys(obj).sort().forEach(function(key) {
        var value = obj[key];
        delete obj[key];
        obj[key] = value;
    });

    console.log("obj", obj);
    console.log(typeof obj);

    

    // let objectArray = Object.entries(obj);

    // let ar = [];

    // console.log(ar);

    // objectArray.forEach(([key, value]) => {
    //     ar.push({ key, value: +value })
    // })

    // return ar.sort((a, b) => b.value - a.value);

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

    let obj = arr.map((a) => a[key]);
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


