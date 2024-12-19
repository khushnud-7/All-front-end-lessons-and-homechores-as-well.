// slc.style.marginLeft = '31px'
// slc.style.marginTop = '40px'

// input11.style.marginTop = '90px'
// input11.style.marginLeft = '30px'
// 
// input22.style.marginTop = '20px'
// input22.style.marginLeft = '30px'
// 
// input33.style.marginTop = '20px'
// input33.style.marginLeft = '30px'
// 
// input44.style.marginTop = '20px'
// input44.style.marginLeft = '30px'


let input11 = document.querySelector('.input1')
let input22 = document.querySelector('.input2')
let input33 = document.querySelector('.input3')
let input44 = document.querySelector('.input4')
let select = document.querySelector('select')
let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    if (input11.value === null || input11.value === '' || input22.value === null || input22.value === '' || input33.value === null || input33.value === '' || input44.value === null || input44.value === '' || select.value === null || select.value === '') {
        alert('Pls enter value')
    } else {
        console.log(input11.value)
        console.log(input22.value)
        console.log(input33.value)
        console.log(input44.value)
        console.log(select.value)
        alert('Your purchase is made successful')
    }
}
)


