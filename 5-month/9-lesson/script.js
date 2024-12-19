

// let boxcha = document.querySelector('.calculator')
// let displayElement = document.querySelector(".display");
// let btn = document.querySelector('.buttons');
// console.log(boxcha);

// HTML tugmalarni JavaScript bilan boshqarish
// document.querySelectorAll('.btn').forEach(button => {
//     button.addEventListener('click', (event) => {
//         let value = event.target.innerText;

//         if (value === "C") {
//             clearDisplay();
//         } else if (value === "=") {
//             calculate();
//         } else {
//             input(value);
//         }
//     });
// });


// btn.addEventListener('click', () => {
//     function input(value) {
//         if (displayElement.innerText === "0") {
//             displayElement.innerText = value;
//         } else {
//             displayElement.innerText += value;
//         }
//     }
//     input()


//     function clearDisplay() {
//         displayElement.innerText = "0";
//     }
//     clearDisplay();

//     function calculate() {
//         try {
//             displayElement.innerText = eval(displayElement.innerText);
//         } catch {
//             displayElement.innerText = "Error";
//         }
//     }
//     calculate();


// })



// let input = document.querySelector('.display'),
//     btn = document.querySelectoral('.buttons');

// btn.addEventListener('click', () => {
//     // Kiritilgan qiymatni tekshirish
//     if (input.value) {
//         return;
//     }
//     try {
//         // Natijani hisoblash
//         const result = eval(input.value);
//         alert(`Result: ${result}`);
//     } catch (error) {
//         alert('Invalid input!');
//     }
// });

// let resultinput = document.querySelector('.display');
// 
// function input(value) {
    // resultinput.value += value;
// }
// 
// function clearResult() {
    // resultinput.value = '';
// }
// 
// function calculate() {
    // try {
        // resultinput.value = eval(resultinput.value);
    // } catch {
        // resultinput.value = 'Error';
    // }
// }
