// let hello = [{
// 'message': "Hello, World!",
// 'name': 'world',
// }
// ]
// console.log(hello);

let box = document.getElementById('newsContainer');
let btn = document.querySelector('.button11')

btn.addEventListener('click', () => {
  movies.forEach((movie) => {
    box.innerHTML += `<div class="newsCard">
    <div class="corner"></div>
    <img src="${movie.img}" class="newsThumb">
    <div class="newsContent">
    <div class="newsMeta">
    <span>${movie.movie_year}</span>
    <span>${movie.categories}</span>
    </div>
    <h2 class="newsTitle">${movie.fullTitle}</h2>
    <p class="newsSummary">${movie.summary.slice(0, 150)} . .</p>
    <button target="_blank" class="readMore" onclick="deleteCard(this)">Delete</button>
     <a href=' https://youtube.com/watch/${movie.ytid}'  target="_blank" class="readMore">click for More </a>
    </div>
    </div>`


  });
})


function deleteCard(btn) {
  let oka = btn.closest('.newsCard')
  oka.remove()
}












