console.log('hello, DOM!')
console.log(document)
console.dir(document)

// находим элемент через поиск по тегам и кладем его в переменную
// поскольку тегов может быть много - элементы приходят в массиве (списке элементов) - мы забираем первый по нулевому индексу

// * 1. поиск по тегу
let heading = document.getElementsByTagName('h2')[0]
console.log(heading)
// мы можем перезаписать значение элемента через свойство innerText
heading.innerText = 'Lesson 09. DOM intro 🏠'


// * 2. поиск по классу
// поскольку ответ приходит в массиве (списке элементов), мы указываем его порядковый номер (0 - это первый элемент массива)
let ul = document.getElementsByClassName('method-list')[0]
// стили можем поменять через обращение к свойству style
// ul.style.listStyleType = 'none'
ul.className = 'method-list'
console.log(ul)



// * 3. поиск по id
let desc = document.getElementById('desc')
// обратились к свойству color элемента и изменили его цвет
// desc.style.color = 'darkred'
// добавили элементу заранее прописанный класс
desc.className = 'desc'
console.log(desc)
