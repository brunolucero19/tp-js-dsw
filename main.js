//1.Introducción a JavaScript
//Ejercicio 2
let a = 10
let b = 20
let c = a + b
console.log(`La suma de a y b es: ${c}`)

//Ejercicio 3
let nombre = prompt('¿Cuál es tu nombre?')
console.log(`Hola, ${nombre}!`)

//2.Operadores lógicos y condicionales
//Ejercicio 1
let a2 = 15
let b2 = 10
let c2 = 20
let mayor = Math.max(a2, b2, c2)
console.log(`El mayor de los tres números es: ${mayor}`)

//Ejercicio 2
let numeroIngresado = prompt('Ingresa un número y te diré si es par o impar')
numeroIngresado % 2 === 0
  ? console.log(`El número ${numeroIngresado} es par`)
  : console.log(`El número ${numeroIngresado} es impar`)

//3.Operadores de asignación y bucles
//Ejercicio 1
let n = 10
while (n > 0) {
  console.log(n)
  n--
}

//Ejercicio 2
let numero
do {
  numero = prompt('Ingresa un número mayor a 100:')
} while (numero <= 100)
console.log(`Ingresaste un número mayor a 100: ${numero}`)

//4. Funciones de JavaScript
//Ejercicio 1
const esPar = (num) => (num % 2 === 0 ? true : false)
const num1 = 10
const num2 = 15
console.log(`El número ${num1} es par: ${esPar(num1)}`)
console.log(`El número ${num2} es par: ${esPar(num2)}`)

//Ejercicio 2
const convertirCelsiusAFarenheit = (celsius) => celsius * 1.8 + 32
const celsius = 30
console.log(
  `${celsius}°C son equivalentes a ${convertirCelsiusAFarenheit(celsius)}°F`
)

//5. Objetos en JavaScript
//Ejercicio 1
const persona = {
  nombre: 'Sofi',
  edad: 20,
  ciudad: 'Barrio Paraguay',
  cambiarCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad
  },
}
persona.cambiarCiudad('Barrio El Dalvian')
console.log(
  `Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`
)

//Ejercicio 2
const libro = {
  titulo: 'Carta de amor a los muertos',
  autor: 'Ava Dellaira',
  año: 2014,
  esAntiguo: function () {
    const añoActual = new Date().getFullYear()
    return añoActual - this.año > 10 ? true : false
  },
}
console.log(`El libro ${libro.titulo} es antiguo: ${libro.esAntiguo()}`)

//6. Arrays en JavaScript
//Ejercicio 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const dobles = numeros.map((num) => num * 2)
console.log(`Números originales: ${numeros}`)
console.log(`Números multiplicados por 2: ${dobles}`)

//Ejercicio 2
const pares = []
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i)
  }
}
console.log(`Primeros 10 números pares: ${pares}`)

//7. Introducción al DOM
//Ejercicio 1
const parrafo = document.getElementsByTagName('p')
const changeColorButton = document.getElementById('change-color-button')

changeColorButton.addEventListener('click', () => {
  if (parrafo[0].style.color === 'blue') {
    for (let i = 0; i < parrafo.length; i++) {
      parrafo[i].style.color = 'black'
    }
    changeColorButton.innerText = 'Cambiar color a azul'
    return
  }

  for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.color = 'blue'
  }
  changeColorButton.innerText = 'Cambiar color a negro'
})

//Ejercicio 2
const alertButton = document.getElementById('alert-button')
alertButton.addEventListener('click', () => {
  let mensaje = document.getElementById('alert-input').value
  alert(`Has ingresado: ${mensaje}`)
})

//8. Eventos en DOM
//Ejercicio 1
const listItems = document.querySelectorAll('li')
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.textContent)
  })
})

//Ejercicio 2
const input = document.getElementById('input')
const disableInputButton = document.getElementById('disableInputButton')
const enableInputButton = document.getElementById('enableInputButton')
disableInputButton.addEventListener('click', () => {
  if (input.disabled === false) {
    input.disabled = true
    disableInputButton.disabled = true
    enableInputButton.disabled = false
  }
  return
})
enableInputButton.addEventListener('click', () => {
  if (input.disabled === true) {
    input.disabled = false
    disableInputButton.disabled = false
    enableInputButton.disabled = true
  }
  return
})

//9. LocalStorage
const emailInput = document.getElementById('email-input')
const saveButton = document.getElementById('save-button')

saveButton.addEventListener('click', () => {
  localStorage.setItem('email', emailInput.value)
  findEmail()
})

const findEmail = () => {
  const result = localStorage.getItem('email')
  if (result) {
    document.getElementById(
      'saved-email'
    ).innerHTML = `<p>Correo guardado: ${result}</p><button id="clear-button">Eliminar Correo Guardado</button>`
    const clearButton = document.getElementById('clear-button')
    clearButton.addEventListener('click', () => {
      localStorage.removeItem('email')
    })
  }
}
findEmail()
