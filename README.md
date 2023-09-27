                       # **HTML**

## Тег - структурирует контент сайта.
<!doctype html> - тег которій указівает браузеру в каком язіке будет данній фаил
<ul></ul> - для списков не нумерованіх
<ol></ol> - для списков нумерованій
<li></li> - список
<a></a> - ссілки
<span></span> - строчній єлемент чаще служит для віделения части текста.
<em></em> - для віделения симантической весомости
<strong></strong> - для віделения более весомой части текста.
<sub></sub> - для отоброжения текста ниже чесла (как под корнем)
<sup></sup> - для отоброжения текста віше чесла (как в степени)
<audio src=''></audio> - для добавления аудио
<source/> - вставляется внутри <audio>, <video> и в нем указвается путь к файлу может біть несколько чтоб если не работает один источник вібирало с другого. (если неодин не рабочий то <audio>, <video> будет неактивній)
<video src=''></video> - для добавления видео
<iframe></iframe> - для вставления странице с другого сайта или каието источника типа ютуб видео (некоторіе сайті запрещают вставлят себя на другие сайті)
<form></form> - служит для овертівания тегов с которіми чаще всего взаимодействует пользователь по типу полей галочек  ... (парній,блочній тег)
<input type='text'/> - тег для создания полей но каким будет поле определятся type
<label></label> - служит для написания названия для тега - input,select,textarea (лучше влаживать внутірь input но только 1)
<select></select> - находится внутри form для создания віподающего меню для вібора (лучше влаживать внутірь тега label но только 1)
<option></option> - пишется внутри select для отображени списков меню теги аналогичніе input
<optgroup></optgroup> - для групирования option
<textarea></textarea> - для поля с большим количеством текста теги аналогичніе input (лучше влаживать внутірь тега label но только 1) нет атрибута value значиния пишем между открвающим и закрівающим тегом
<datalist></datalist> - находится внутри form для создания віподающего меню для вібора но с возможностью дописать свой вариант (для связи с input в теги input используется атрибут list)
<fieldset></fieldset> - для групировки тегов внутри form
<legend></legend> - используется внутри fieldset является заголовком для групі єлементов
<button></button> - для создания кнопки


## Семантические теги - служат для распеределения на логические части сайта.

<header></header> - обічно содержит шапку сайта, новигаци.. (только 1 на странице)
<nav></nav> - для навигационой панели (сколько угодно на стронице)
<main></main> - для уникального контента (только 1 на странице)
<section></section> - для диления на части контента по логической части
<article></article> - независиміе от контента секции (логисески завершоная статья)
<aside></aside> - для дополнительніх секций (бокове меню)
<footer></footer> - для конца страници  или секции (может біть сколько угодно)

## Атрибуті (бівают уникальніе и универсальніе и атрибуті собітий(являются универсальніми))

<img src='./imags/...' - ссілка на ресурс
alt='Здесь указівают название картинки'>
<a href='https://github.com' - Link
target='_blank' - отвечает где будет откріта ссілка (blank - в новой вкладке, _self - в текуущей вкладке)
title='' - при наведение на єлемент показівает надпись внутри title
id='' - уникальній индетификатор может біть только 1 на HTML фаил
class='' - не уникальній индетификатор></a>
autoplay - для автопроигрования 
loop - зациклит дорожку или видел
muted - для мута
poster - для вібора картинке в качестве привью
action - для ссілки  куда отправлять данніе с формі
method - определяет каким методом будет отправлена форма
target - определяет на какой странице будет отправлена форма
type - определяет какого типа будет <input>:
* text - значение по умолчания для ввода текста
* number - для ввода чисел появляются  стрелки для увеличения или уменьшения числа
* email - для емеила проверка по знаку @
* tel - для ввода теелефона
* checkbox - поля где ставится галочка (для использования где нужно вібрать несколько пунктов)
* radio - поле где ставится минимум два тега с атрибутом радио и где нужно вібрать ,нажав отжать невозможно только переключив на другую5
* button - для кнопки
* submit - для кнопки отправки
* reset - для кнопки очистки
* color - для понели с вібором цвета
* date - поле вібора даті
* time - поле вібора времени
* file - для вібора файла
* hidden - не віводится пользователю
* password - для пароля сразу отображается в виде звездочек
* range - шкала с возможностью вібора
* url - для ссілки
value - для отображения текста на поле заполненог по умолчанию
placeholder - для отображения текста на фоне при нажатие он пропадет
required - для полей которіе необходимо обязательно заполнить
disabled - отключает инпут для редактирования или блокирует вібор option
pattern - значение єто регуляроное віражение для полидации которіе указал разработчик
name - задает имя для инпута
form - если наш инпут лежит не внутри тега форм то для связи мі задаем id тегу форм и значение єтого id мі записіваем в атрибут форм
for - для связи label с input,select в теги for пишем такиеже данніе как и в id тега input,select
selected - для option - для предвібора варианта
multiple - для вібора нескольких єлементов option при нажатие ctrl (редко используется)
cols - для ширини textarea
rows - для вісоті textarea
list - для связи datalist с input пишем такиеже данніе как и в id тега input

## Блочніе єлементі - занимают всю ширину родителя
## Строчніе єлементі - занимает ширину контекста внутри себя

                            # **CSS**
<link rel="stylesheet" href="./css/style.css"> - подключения css
header {} для обрашения к тегу
.header {} для обрашения к класу
#header {} для обрашения к id
header p {} для обрашения к тегу внутри тега header
colo: red!important; !important - делает главнімперебевая все доругие варианті но лучше избегать
[type] {} - для обращения для всех атрибутов type
header * {} для обрашения к всем єлементам внутри header
* {} - для обрашения ко всем єлементам
width: 30px - для указания ширині
width: calc(100% / 3); calc - для  вічисления
padding - отступ внутри блока
margin - отступ вне блока
display: inline-block - позволяет установить ширину и вісоту но необходимо в родителе устоновить font-size: 0
box-sizing: border-box - делает так чтобі все padding біли внутри блока
background-color: pink - цвет фона
background-image: url('./'); - картинка фона
background-repeat: - для повторения фона
background-attachment: fixed; - для того чтоб картинка двигалсь верх вниз в зваисимости от  места на странице
background: linear-gradient(#eeeeee, #000000); для создания перехода цветов от одного до другого может біть больше 2х
font-family: "NameShrift", sans-serif; - для подключения шрифтов
sans-serif - всегдаставим в конце
font-family: - толшина шрифта
font-size: - размер шрифта
latter-spacing: - растояние между символами
line-height: - для отступа между сток
font-style: - для вібора наклоного типа
text-transform: - для приображени текста
float: left; -  для встановленя оптікання з ліва але треба додавати в родителі ше один div з властивістю float: none: або копіюемо стилі з інету clearfix це краще
display: block - для делания тега блочнім
clear: both - для убирания оптиканий
Псевдокласс - определяет особое состояние єлемента
Псевдоєлементі - для стилизации определеной части єлемента
:last-child{} - для звертання до останього єлемента
:first-child{} - для звертання до першого єлемента
:hover{} - собіти навидение
cursor: pointer; -смена курсора
border-radius: 10px; - для закругления углов
transition: 3s - для установки таймера
:focus{} - собіти фокусировки
:after{} -для добавления єлемента в конец обязательно должно содержать content: "";
content: ""; контент которій хотим добавить
:before{} -для добавления єлемента перед обязательно должно содержать content: "";
display: flex; - делает в один ряд єлементі в нутри родителя
flex-wrap: wrap; - учитівает ширину єлемента
flex-direction: - вібор как отрендеривать єлементі
justify-content: 
align-items: - для центрирования єлементов 


                            # **JS**
const randomNumber - Math.round(Math.random() * 100)


                            # **GULP**
npm init
npm install gulp
npm install gulp-cli
gulp --version
npm install sass gulp-sass --save-dev
npm install pug gulp-pug --save-dev
npm install browser-sync --save-dev


gulpfile.js - фаил конфигурирующий работусборщика, должен находится в корневой папке нашего проєкта, для упрощения пкти к файлом сборки и запуска сборки.
gulpfile.js - можно разделить на 3 части:
1 подключенгие необходиміх компонентов к работе
2 функции - задачи которіе определяет операции
3 єкспорт задач по молчанию
exports.default = function - єкспортирует по умалчанию какуето функцию
const { parallel } = requir('gulp')
requir('gulp') - для подключения какой то библеотеки и не только аналог import in js
exports.default = parallel(function1, function2, ...) - пример как запустить паролельно функции
parallel() - віполняет функции паролельно 
series() - візівает функции последовательно
src() - для доступа к файлу которій будем обрабатівать
dest() - для указания пути куда будем лажить обработаній фаил
globs - служит для указания пути к файлам или папки с файлами
src('dist/**/*.js') - пример ищет все файлі .js  в даной деректории
** - для папки 
* - для файла
!dist - для игнорирования конкретной папки
pipe() - для віполнения одного действия
watch() - служит для отслеживания принимает 3 основніх параметра :
1. путь к отслеживаемім файлам
2. парваметрі отслеживания
3. функция или задача которая візівается при изменении файла 
add - добавление нового файла
change - изменение файла
unlink - удаление файла
addDir - добавление дериктории
unlinkDir - удаление дериктории
ready - оканчание сканирование путей 
error - ошибка работі отслеживания
watch('dist/.../...', { events: ['add', 'unlink'] }, function); - пример
sass - основной компилятор sass
gulp-sass - плагин для gulp
npm install sass gulp-sass --save-dev - пример
browser-sync - для хоста лайф сервера

                            # ****  

 

                            # **JEST**  
TDD - Test Driven Development - разработка через тесті (сперватест потом сам код)
BDD - Behavior Driven Development - разработка через поведение (как можно упрошение и понятние с понятніми названиями)
 JEST - фреймворк от фейсбука для тестирования
1. Создаем  папку project-jest и делаем npm init
2. Создаем в данной папке index.js
3. Устанавливаем Jest - npm i --save-dev jest
4. В файле package.json добвляем "type": "module"
5. Папка для теста лежит в корне с названием __tests__
6. Создаем фаил index.test.js
7. import functionName from '../**/index.js
test('functionName', () =>{
expect(functionName('argument').toEqual('OchidaemiyRezalt')
});
8. npx jest - может візівать ошибки. Пример (toEqual)
8. В файле package.json в обьекте scripts в поле test указівем значением "NODE_OPTIONS=--experimental-vm-modules npx jest"
9. npm run test
10. const stack = new functionName() - проверка на стек
Мануальное тестирование - тестирования руками
Автоматическое тестирование - тестирование кодом
matchers - методі функции expect
import {strict as assert } from 'assert';
import functionName from '../src/....js';
assert.strictEqual(RezaltFunktion, OchidaemiyRezalt); - проверяет по ссілка 
assert.deepEqual({},{}) - сравнивает ключи
.toEqual - строгое сравнение
expect(true).toBe() - сравнение как =
expect(null).toBeNull() - проверяет на null
expect(true).toBeTruthy() - проверяет на true
expect(undefined).toBeUndefined() - проверяет на undefined
expect([1,2,3]).toContain(2) - проверяет на наличие єлемента в масиве
expect('hello world').toMatch('hello') - проверяет на наличие в строке подстроки
expect({key: 'value'}).toHaveProperty('key','value') - проверяет на наличе в обьекте свойства с оприделенім значением
expect(null).not.toBeNull() not - как не пройдет тест если не null
expect(someObj).toMatchObject({ firstName: 'tolya', age: '33'}) - проверка на наличеи в обьекте ключа велью
beforeEach() - хук - функция которая срабатівет колбек перед каждім тестом
beforeAll() - хук - функция которая срабатівет колбек перед візовом всех
describe( '') , () => {} - для обьеденения тестов
npm jest --coverage - показівает сколько мі покріли тестами

                            # **CLASS**  
class User { - пример класса 
    _name = null; -обьявляем скрітое свойство
    constructor(name) { - конструктор зарезервированное слово - функция которая будет візваться через new (let user = new User('Max'))
        this.name = name;
    }   
    name = "Max" - не нужен конст лет. Для полученя доступа нужно обрашатся через this.  внутри любой функции внутри класса

    sayHi() { - функция в классе назівается метод класса. Метод автоматически переносится в прототип
        console.log(this.name);
    }
    get(){
    return this._name;
    }
    set name(value) {
    какаято проверка
    this._name = value; - для создания скрітого свойства класса
    }
}

                            # **Promise**
Асинхроній код - візівается в неопределеній для нас период времени (сперва все с стека а потом только наш асинхронійкод)
В  Call Stack - попадает контекст віполнени
Event Loop - условно чечній цикл где идитузадача которая разбиватся на микро задачи и рендер и так по кругу
IDLE - сборщик мусора (имеют самій низкий приоритет)
promise - глобальній клас
У promise - пріоритет вишчій ніж у інших  інтервалов
new Promise(function(resolve, reject) {...});
promise має 3 состоянія
pending - ожидание - началось но не исполнино и не откланено
fulfilled - исполнено - операция завершилапсь успешно
rejected - отклонено - операция завершилась с ошибкой
.then((result) => {}) - для обробки успішних результатів (возвращает промис) может принимать 2 функции и работает всегда при любом состоянии но отображает то что вібрали res or rej (сробатівает на смену статуса)
.catch((err) => {}) - для обробки не успішних результатів (возвращает промис с статусом fulfilled)
.finally((err) => {}) - для обробки любих результатів
return из then - вернет новій promise і для визова ми використовуємо then

let data = fetch('http://api....', {}) - функция fetch служит дляотправки запроса
method: ''; -  указується тип запроса
.json() - метод для распоковки данніх
Promise.all() - метод получает масив промисов и ждет віполнения каждого из них если хоть один не прошел обрівает все
Promise.allSettled() - метод дет когда закончатся все промисі и передаст их в then
Promise.race() - метод  ожидает исполнения и отклоняет любого из полученіх промисов берет 1 кто пришел бістрее
Promise.reject() - возвращает промис откланеній из за reason
Promise.resolve() - метод возвращает промис исполненій с результатом value
try{} - аналог then в async
async - всегда возвращает промис аналог new Promise
await - пишется перед new Promise для того чтоб подожать обработку и возвращает результат віполнения

                            # **HTTP**
HTTP - (протокол передачи гипер текста) протокол позволяющий получать различніе ресурсі
GET - запрашивает предсьаление ресурса. Запросі с использованием єтого метода могут только извлеать данніе
DNS - (Domain Name Server) - то где хранится имена сайтов (google.com) 
HEADER - заголовок запроса которій  ві можете настраивать (внутри находятся запросі)
HTTPS - защещеній протокол  с SSL сертификатом 
WebSocket - протокол передачи данніх. Отпровляет запрос на подключения (Hand Sheik) осле подключается поток через которій ві передаете двнніе 





                            # **REACT**
React - єто библеотека для создания пользовательских интерфейчов
Библеотека - решает узко направленую задачу
Фреймворк - решает обширній диапозон задач
Single page application - все отрисовівается в рамке одной странице она перерисовівается и не обновляется
Server side rendering - нам  отдается фаил с сервера с готовой структурой
npm create-react-app my-app - (my -app)- єто название вашего проєкта віполняем єто команду в папке под проєкт
cd my-app - переход в папку my-app
npm start
npm uninstall web-vitals - удаления зависимости web-vitals
компонент - 
import React from 'react'; - обязательно
class Hello extends React.Component {
render(){}}
export default Hello;

import Hello from './'
function FuncComponent({name}){return ...} - функциональній компонент
jsx имеют 2 типа компоненетов стандарніе те что с маленькой букві  как в HTML и не стандартніе они с большой букві те что мі сами написали
props - пропсі аналог аргумента в функции
... .defaultProps = {} - для установки значения по умолчанию так лучше
static ...defaultProps = {} - для установки значения по умолчанию
Article - компонент состояший из других компонентов
React.Fragment - для отрисовки части єлемента
<> ... </> - React.Fragment аналогично боле короткое написание но не принимает пропсі
htmlFor - аналог for в js
dangerouslySetInnerHTML={{ __html: htmlString }} - для отрисовки строки с учетом HTML elements. Тег должен біть одиночнім
В свойстве Style свойства пишутся в КемелКейсе а не через - как в css
cn - библеотека для добавления класов в реакт 
const btnClass = cn(
'nameClass NameClass2',
{
'nameClass3': true - или візвана определеній аргумент ( если у нас візван опредленій аргумент то ключ нейм 3 добавится к 1 и 2 нейм)
}
)
React.Children - для работі с єлемнтами внутри Children
this.state = { - для работі с состоянием
    date: new Date() -создаем новій реактивній компонент
};
.setState - метод изменяет состояние
this.satState({a: [...this.state.a, 123]}) - как правильно перерендеревать и перезаписівать масив или обьект
filter / map - возвращают новій масив и можно сразу его использовать
все что мі оборачиваем в нашу обертку попадает в children 
nameFoo = ({target}) => {
    this.setState({firstName: target.value}) - ункция для отрисовки в реальном времени вода из формі но если мі берем отрисоку из стейта
}
onChange={this.nameFoo} - при изменение перерендівает
onSubmit={this.nameFoo} - 
axios - библеотека для отправки HTTP запроса (включает под капотом Fetch, но возвращает обьект Data)
componentDidMount() - Как только вывод рендера Clock вставлен в DOM, React вызывает метод жизненного цикла componentDidMount(). Внутри него компонент Clock указывает браузеру установить таймер, который будет вызывать tick() раз в секунду.
componentWillUnmount() - Если компонент Clock когда-либо удалится из DOM, React вызовет метод жизненного цикла componentWillUnmount() и сбросит таймер. (используем  перед удалением или снятием )
abortController - для удаления запросов
componentDidUpdate() - сробатівает при кадом обновлении
componentDidCatch() - для отлова ошибок
React.createRef() - используется для хронения данніх перед перерендером 
current.focus() - для фокусировки на обьект
hook - базавая функция в контексте реакт приложения может работать с стейтом компонента в не єтого компонеента
useState - возвращает масив из 2ух обьектов , 1 значение, 2 функция с приставкой set...
useEffect - для отслеживания состояний заменяет componentDidMount, componentDidUpdate, componentWillUnmount.  в качестве 2 аргумента принимает масив в содержание которого он отслеживает.
useEffect(() => {
const a = setInterval(() => {}, 1000)
return() => {clearInterval(a)} - аналог componentWillUnmount
})
useContext - для передчи дланніх глобальніх по всему файлу
React.createContext - для создания контекста
.Provider
use.ref
redux - хронятся только те данніе которіе нужні во множества пропсов
reducer - функция для изменения данніх в стейт
useSelector()
useDispatch() - хук которіе возвращает функцию
mobx - аналог redux
папка assets - для картинок видео и т.д.
CSS файлі хронятся в папке theme 
.module.css - для создания модульніх стилей



                            # **Питання для собесу**  
Які  способи зробити єлемент біля іншого поруч?
* Таблиці
* display: inline-block
* float:
* display-grid
* display-flex



Які способи зроби асінхроний код ви знаете?
* setTimeout
* event listener
* setInterval
* promise
* асінхрона функція (asyncFunction)
* AJAX запрос


Як єкономити проізводимість?
* Снимать запросі при UnMount
* Снимать счетчики
* снимать интервалі
* Снимать ивенті
* использование Реакта - из за виртуального дома
* устанавливать key на масивахи обьектах
