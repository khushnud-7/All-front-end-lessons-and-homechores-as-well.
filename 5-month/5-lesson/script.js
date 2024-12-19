let time = new Date()
let time1 = new Date().getDate();
let time2 = new Date().getFullYear();
let time3 = new Date().getHours();
let time4 = new Date().getMilliseconds();
let time5 = new Date().getMonth();
let time6 = new Date().getSeconds();
// let time7 = new Date.parse(2025 - 12 - 1)
// console.log(time7);
console.log(time);
console.log(time1);
console.log(time2);
console.log(time3);
console.log(time4);
console.log(time5);
console.log(time6);






setTimeout(() => {
    console.log('Salom');
}, 3000)

setInterval(() => {
    console.log('Salom');

}, 1000)
