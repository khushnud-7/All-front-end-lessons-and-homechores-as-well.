// let h1 = document.querySelector('h1');
// let y = 0
// while (y <= 5) {
// h1.innerHTML += `<h2> Son: ${y} </h2>`
// y++
// }

// let x = +prompt('Pls enter a value');
// let x = 5
// if (input % 30 === 0) {
// console.log("fizzbuss");
// }
// else if (input % 15 === 0) {
// console.log("buss");
// }
// else if (input % 5 === 0) {
// console.log("fizz");
// }
// else {
// console.log("Xato");
//
// }
//
//



// let x = +prompt('Enter a value');
// if (x % 30 === 0) {
//     console.log("Fizzbuss");

// }
// else if (x % 15 === 0) {
//     console.log("buss");

// } else if (x % 5 === 0) {
//     console.log("fizz");
// } else { console.log("Xato"); }
// console.log(x);




// let x = +prompt('Enter a value')
// console.log(x);

// if (x % 30 === 0) {
//     console.log("fizzbuss");
// }
// else if (x % 15 === 0) { console.log("buss") }
// else if (x % 5 === 0) { console.log("fizz") }
// else {
//     console.log("xato");
// }



// let x = +prompt('Enter a value');
// if (x % 30 === 0) {
//     console.log("fizbuss");

// }
// else if (x % 15 === 0) {
//     console.log("buss");
// } else if (x % 5 === 0) {
//     console.log("fizz");

// } else {
//     console.log("Xato");
// }


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let juft = []
let tog = []
arr.forEach(item => {
    if (item % 2 === 0) {
        juft.push(item)
    }
    else {
        tog.push(item)
    }
})
console.log(`juft: ${juft}`);
console.log(`tog: ${tog}`);


let sum_masi = 0;
let sum_masi1 = 1;

juft.forEach(item => {
    sum_masi += item
})
console.log(sum_masi);

juft.forEach(item => {
    sum_masi1 *= item
})
console.log(sum_masi1);




