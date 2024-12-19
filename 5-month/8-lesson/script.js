// let son = 25
// let son = 8
// console.log(Math.min(15, 16));
// console.log(Math.max(15, 16));
// console.log(Math.pow(15, 2));
// console.log(Math.sqrt(1, 23));
// console.log(Math.pow(Math.sqrt(8), input));


// let input = +prompt('Enter the number')
// let x = Math.pow(Math.sqrt(8), input)
// console.log(Math.round(x));

// let x = +prompt('x num')
// let y = +prompt('y num')
// console.log(response);

// let iinp = 15
// console.log(Math.min(iinp, 18));


// let x = +prompt('Enter x number')
// let y = +prompt('Enter y number')
// let response = x * 3 + Math.min(12, x) / (x * y) + Math.sqrt(4) / x
// console.log(response);


let a = +prompt('Enter a number'),
    b = +prompt("Enter b number"),
    c = +prompt("Enter c number")
let x = 0
if (a > 0) {
    x = -b + Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2 * a + b
} else if (a < 0) {
    x = -b * Math.pow(b, 2) / 2 * a + 5 + b * 2 * c
}
console.log(x);









