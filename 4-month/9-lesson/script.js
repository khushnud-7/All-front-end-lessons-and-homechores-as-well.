// let cars = ['auto', 'Car', 'Vehicle', 'Van',]
// let box = document.querySelector('button')
// let text = document.querySelector('h1')

// box.addEventListener('click', () => {
//     cars.forEach(el => { text.innerHTML += `<h1>${el}</h1> ` })

// })



let cars = [
    'cars', 'hechbek', 'van', 'truck',
]
let btn = document.querySelector('button'),
 title = document.querySelector('h1')

 btn.addEventListener('click', () => {
  cars.forEach((el)=>{
    title.innerHTML += `<h1> ${el}</h1>`
  })
 }
    )
 

