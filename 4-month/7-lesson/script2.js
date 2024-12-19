let input = document.querySelector('.input')
let input1 = document.querySelector('.input1')
let btn = document.querySelector('button')

function slide() {
    if (
        input.value === null || input.value === '' || input1.value === null || input1.value === ''
    ) {
        alert('Enter your info fully ')
    }
    else {
        console.log(input.value)
        console.log(input1.value)
        window.location.href = 'welcome.html '


    }
}

btn.addEventListener('click', slide)