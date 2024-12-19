let input = document.querySelector('.in1')
let input1 = document.querySelector('.in2')
let input2 = document.querySelector('.in2')
let input3 = document.querySelector('.in3');
let btn = document.querySelector('.btn1');
function mufun() {
    if (input.value === null || input.value === '' || input1.value === null || input1.value === '' || input2 === null || input2 === '' || input3 === null || input3 === '') {
        alert('Pls follow up your info wholly')
    } else {
        console.log(input.value)
        console.log(input1.value)
        console.log(input2.value)
        console.log(input3.value)
         window.location.href = "index1.html"
    }
}
btn.addEventListener('click', mufun)