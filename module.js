/*==============================================
    -  Створити функцію конструктор для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результату
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]

}
==============================================*/

// function CreateAttr(titleOfTag, action, arrayAttr) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.arrayAttr = arrayAttr;
//
// }
//
// const a = new CreateAttr(
//     '<a>',
//     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//         {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//         {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'}
//         ]
// );
// console.log(a);
//
//
// const div = new CreateAttr(
//     '<div>',
//     'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [
//         {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//         {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
//     ]
// );
// console.log(div);
//
//
// const h1 = new CreateAttr(
//     '<h1>',
//     'Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
//     [
//         {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//         {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'}
//     ]
// );
// console.log(h1);
//
//
// const span = new CreateAttr(
//     '<span>',
//     'Тег <span> предназначен для определения строчных элементов документа.',
//     [
//         {titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS.'},
//         {titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента.'},
//         {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
//     ]
// );
// console.log(span);
//
//
// const input = new CreateAttr(
//     '<input>',
//     'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [
//         {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'},
//         {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы.'}
//     ]
// );
// console.log(input);
//
//
// const form = new CreateAttr(
//     '<form>',
//     'Тег <form> устанавливает форму на веб-странице. ',
//     [
//         {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//         {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
//         {titleOfAttr: 'novalidate', actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода.'}
//     ]
// );
// console.log(form);
//
//
// const option = new CreateAttr(
//     '<option>',
//     'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//     [
//         {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//         {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
//     ]
// );
// console.log(option);
//
//
// const select = new CreateAttr(
//     '<select>',
//     'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//     [
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//         {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
//         {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'}
//     ]
// );
// console.log(select);








/*==============================================
-  Створити класс  для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результату
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]

}
==============================================*/

// class CreateAttr {
//     constructor(title, action, arrayAttr) {
//         this.title = title;
//         this.action = action;
//         this.arrayAttr = arrayAttr;
//     }
// }
//
// const a = new CreateAttr(
//     '<a>',
//     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//         {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//         {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'}
//         ]
// );
// console.log(a);
//
//
// const div = new CreateAttr(
//     '<div>',
//     'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [
//         {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//         {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
//     ]
// );
// console.log(div);
//
//
// const h1 = new CreateAttr(
//     '<h1>',
//     'Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
//     [
//         {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//         {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'}
//     ]
// );
// console.log(h1);
//
//
// const span = new CreateAttr(
//     '<span>',
//     'Тег <span> предназначен для определения строчных элементов документа.',
//     [
//         {titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS.'},
//         {titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента.'},
//         {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
//     ]
// );
// console.log(span);
//
//
// const input = new CreateAttr(
//     '<input>',
//     'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [
//         {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'},
//         {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы.'}
//     ]
// );
// console.log(input);
//
//
// const form = new CreateAttr(
//     '<form>',
//     'Тег <form> устанавливает форму на веб-странице. ',
//     [
//         {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//         {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
//         {titleOfAttr: 'novalidate', actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода.'}
//     ]
// );
// console.log(form);
//
//
// const option = new CreateAttr(
//     '<option>',
//     'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//     [
//         {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//         {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
//     ]
// );
// console.log(option);
//
//
// const select = new CreateAttr(
//     '<select>',
//     'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//     [
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//         {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
//         {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'}
//     ]
// );
// console.log(select);








/*==============================================
- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
==============================================*/

// let car = {
//     model: 'Corolla',
//     producer: 'Toyota',
//     year: 2019,
//     speed: 150,
//     engine: 1.8
// }
//
// function drive() {
//     console.log(`їдемо зі швидкістю ${car.speed} на годину`);
// }
// drive();
//
// function info() {
//     console.log(car);
// }
// info();
//
// function increaseMaxSpeed(newSpeed) {
//     car.speed += newSpeed;
//     console.log(car);
// }
// increaseMaxSpeed(30);
//
// function changeYear(newValue) {
//     car.year = newValue;
//     console.log(car);
// }
// changeYear(2016);
//
//
// function addDriver(driver) {
//     car.driver = driver;
//     console.log(car);
// }
// let driver = {
//     name: 'Vika',
//     age: 25,
//     exp: 5
// }
// addDriver(driver);









/*==============================================
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
==============================================*/

// function Car(model, producer, year, speed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(this);
//     }
//
//      this.increaseMaxSpeed = function (newSpeed) {
//         this.speed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let opel = new Car('Corsa-e F', 'Opel', '2019', 150, 1.8);
// opel.drive();
// opel.info();
// opel.increaseMaxSpeed(20);
// opel.changeYear(2013);
//
// let driver = {
//     name: 'Ivan',
//     age: 65,
//     exp: 10
// }
// opel.addDriver(driver);








/*==============================================
- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
==============================================*/

// class Car {
//     constructor(model, producer, year, speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     info() {
//         console.log(this);
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.speed += newSpeed;
//         console.log(`New max speed: ${this.speed}`);
//         console.log(this);
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//         console.log(`New year: ${this.year}`);
//         console.log(this);
//     }
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(this)
//     }
// }
//
// let opel = new Car('Corsa-e F', 'Opel', '2019', 150, 1.8);
// opel.drive();
// opel.info();
// opel.increaseMaxSpeed(20);
// opel.changeYear(2010);
//
// let driver = {
//     name: 'Ivan',
//     age: 65,
//     exp: 10
// }
// opel.addDriver(driver);
//
// console.log('=================================================================================')
//
// let toyota = new Car('Corolla', 'Toyota', '2010', 170, 1.2);
// toyota.drive();
// toyota.info();
// toyota.increaseMaxSpeed(20);
// toyota.changeYear(2010);
//
// let driver2 = {
//     name: 'Vika',
//     age: 25,
//     exp: 5
// }
// toyota.addDriver(driver2);









/*==============================================
-створити класс попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
==============================================*/

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const Vika = new Cinderella('Vika', 23, 39);
// const Anna = new Cinderella('Anna', 20, 37);
// const Ira = new Cinderella('Ira', 19,37);
// const Natalya = new Cinderella('Natalya', 24, 40);
// const Cristina = new Cinderella('Cristina', 23, 35);
// const Nastya = new Cinderella('Nastya', 21, 38);
// const Alina = new Cinderella('Alina', 23, 34);
// const Katya = new Cinderella('Katya', 22, 36);
// const Nata = new Cinderella('Nata', 30, 41);
// const Karina = new Cinderella('Karina', 21, 42);
//
// const array = [Vika,Anna,Ira,Natalya,Cristina,Nastya,Alina,Katya,Nata,Karina];
//
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// const prinse = new Prince('Dima', 24, 35);
//
// for (const cinderella of array) {
//     if (cinderella.footSize === prinse.shoe) {
//         console.log(`Prince, your Cinderella: ${cinderella.name}`);
//         break;
//     }
// }








/*
==============================================
-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
==============================================
*/


// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// const Vika = new Cinderella('Vika', 23, 39);
// const Anna = new Cinderella('Anna', 20, 37);
// const Ira = new Cinderella('Ira', 19,37);
// const Natalya = new Cinderella('Natalya', 24, 40);
// const Cristina = new Cinderella('Cristina', 23, 35);
// const Nastya = new Cinderella('Nastya', 21, 38);
// const Alina = new Cinderella('Alina', 23, 34);
// const Katya = new Cinderella('Katya', 22, 36);
// const Nata = new Cinderella('Nata', 30, 41);
// const Karina = new Cinderella('Karina', 21, 42);
//
// const cinderellaArray = [Vika,Anna,Ira,Natalya,Cristina,Nastya,Alina,Katya,Nata,Karina];
//
//
// function Prince(name, age, shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
//
//     this.cinderellaSearch = function (array) {
//         for (const cinderella of array) {
//             if (cinderella.footSize === this.shoe) {
//                 console.log(`${this.name} your Cinderella: ${cinderella.name}`)
//                 break;
//             }
//         }
//     }
// }
//
// const prince = new Prince('Dima', 24, 37);
// prince.cinderellaSearch(cinderellaArray);