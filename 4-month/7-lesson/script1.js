let input = document.querySelector('.in')
let input1 = document.querySelector('.in1')
let button = document.querySelector('button')

function myfun() {
    if (input.value === '' || input.value === null || input1.value === '' || input1.value === null) {
        alert('Enter a value')
    }
    else {
        console.log(input.value)
        console.log(input1.value)

    }
}

button.addEventListener('click', myfun)

// function myfun (){
    console.log('Hello world')
// }
// 
// myfun()