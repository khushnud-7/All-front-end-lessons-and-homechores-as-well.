let input = document.querySelector('.in1')
let input1 = document.querySelector('.in2')
let input2 = document.querySelector('.in3')
let input3 = document.querySelector('.in4');
let input4 = document.querySelector('.in5');
let btn = document.querySelector('.btn1');
function mufun() {
    if (input.value === null || input.value === '' || input1.value === null || input1.value === '' || input2 === null || input2 === '' || input3 === null || input3 === '' || input4 === null || input4 === '') {
        alert('Pls follow up your info fully')
    } else {
        console.log(input4.value)
        console.log(input.value)
        console.log(input1.value)
        console.log(input2.value)
        console.log(input3.value)

        window.location.href = "pre.html"
    }
}
btn.addEventListener('click', mufun)