const containerProducts = document.querySelector('#container-products')
const form = document.querySelector('#form-items')
const loader = document.querySelector('#loader')

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  data.map(product => {
    // создаем контейнер карточку
    const card = document.createElement('section')
    card.classList.add('product-card')
    // создаем элемент заголовок
    const heading = document.createElement('h4')
    heading.textContent = product.title
    // создаем описание товара
    const price = document.createElement('p')
    price.textContent = `Price: ${Math.floor(product.price)}€`
    // создаем элемент картинку
    const img = document.createElement('img')
    img.src = product.image
    img.classList.add('card-img')
    // объединяем созданные элементы и контейнер-родитель
    card.append(heading, price, img)
    // добавляем готовую карточку к грид-контейнеру (заранее созданному и найденному)
    containerProducts.append(card)
  })
}

async function getProductsAmount(value) {
  // показываем loader
  loader.classList.toggle('loader-hide')
  setTimeout(async () => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${value}`)
    const data = await res.json()
    data.map(product => {
      // создаем контейнер карточку
      const card = document.createElement('section')
      card.classList.add('product-card')
      // создаем элемент заголовок
      const heading = document.createElement('h4')
      heading.textContent = product.title
      // создаем описание товара
      const price = document.createElement('p')
      price.textContent = `Price: ${Math.floor(product.price)}€`
      // создаем элемент картинку
      const img = document.createElement('img')
      img.src = product.image
      img.classList.add('card-img')
      // объединяем созданные элементы и контейнер-родитель
      card.append(heading, price, img)
      // добавляем готовую карточку к грид-контейнеру (заранее созданному и найденному)
      containerProducts.append(card)
    })
    // убираем loader
    loader.classList.toggle('loader-hide')
  }, 1000)
}

// вызов функции если нужны данные при загрузке
// getProducts()

// функция очистки от предыдущих вызовов
const cleanItems = () => {
  while (containerProducts.firstChild) {
    containerProducts.removeChild(containerProducts.firstChild)
  }
}


form.addEventListener('submit', (event) => {
  // предотвращаем отправку формы по умолчанию
  event.preventDefault()
  // забираем данные из формы по имени input (наше имя - amount) чтобы работать с ним дальше
  const amount = event.target.amount.value
  // перезаписываем значение в поле input
  event.target.amount.value = ''
  // чистим контейнер родитель
  cleanItems()
  // подгружаем данные
  getProductsAmount(amount)

})
