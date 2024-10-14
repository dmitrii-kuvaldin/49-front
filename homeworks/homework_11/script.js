// Задание 1 // Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

let namesAndAges = [];

for (let i = 0; i < names.length; i++) {
  namesAndAges.push(`${names[i]} ${ages[i]} лет/годов`);
}
// console.log(namesAndAges);

// Задание 2 // Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности

let namesAndAgesReversed = [];

for (let i = names.length - 1; i >= 0; i--) {
  namesAndAgesReversed.push(namesAndAges[i]);
}

// console.log(namesAndAgesReversed);

// ! метод reverse() - мутирующий и изменяет исходный массив
// будьте аккуратнее
// namesAndAges.reverse();

// console.log(namesAndAges);

// Задание 3 // Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль

let countries = [];
// можем добавлять значения в одну строку через push, перечислив добавляемые данные в круглых скобках
countries.push("Франция", "Германия", "Италия");
let deletedCountry = countries.pop();

const countriesNew = [deletedCountry, ...countries, "Испания"];

countries.unshift(deletedCountry);

// console.log(countriesNew);
// console.log(countries);

// Задание 4 // Создайте объект car с ключами brand, model, year, и isElectric. Задайте им значения. // Выведите на экран все ключи объекта // Выведите на экран все значения объекта // Добавьте в объект car метод getCarInfo, который будет возвращать строку, содержащую информацию о марке, модели и году выпуска машины. // Вызовите этот метод и выведите результат на экран. // выполните итерацию по ключам с помощью цикла for...in. // Внутри цикла выводите на экран каждую пару ключ: значение. // Затем модифицируйте вывод, чтобы он выглядел как: "Ключ: [ключ], Значение: [значение]". Например, "Ключ: brand, Значение: Toyota".

let car = {
  brand: "bmw",
  model: "x5",
  year: "2010",
  isElectric: false,
  getCarInfo: () => `${car.brand}, ${car.model}, ${car.year}`
};

// console.log(car.getCarInfo());

// * итерация по ключам и значениям объекта
// представляем ключи объектов в переменной key
// значения объектов в value

// for (let key in car) {
//   console.log(`key: ${key}, value: ${car[key]}`);
// }

// * метод Object.keys() принимает на вход объект и возвращает массив из ключей данного объекта
console.log(Object.keys(car));

// * метод Object.values() принимает на вход объект и возвращает массив из значений данного объекта
console.log(Object.values(car));

// console.log(car.brand, car.model, car.isElectric);
