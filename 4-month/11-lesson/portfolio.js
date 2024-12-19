let box = document.querySelector('.mainbox');
let btn = document.querySelector('.navtab');
btn.addEventListener('click', () => {
    fetch('https://6560acc483aba11d99d151a5.mockapi.io/api/movies')
        .then(res => res.json())
        .then(movie => {
            console.log(movie)
            movie.forEach((film) => {
                box.innerHTML += `    <div class="card">
        <div class="card-head">
            <div class="card-product-img">
                <img src="${film.movieSmallImg}" alt="image">
            </div>
        </div>

        <div class="card-body">
        <h2 class = 'biur' >${film.movieName}</h2>
            <p class="card-text">${film.starring}</p>

            <div class="wrapper">
                <div class="card-price">
                    <img src="https://i.postimg.cc/DwVVRrF4/icon-ethereum.png" alt="icon" class="card-icon">
                 <span><a href ='${film.trailer}' target = '_blank'  class = 'ik' > Click to watch trailer</a></span>
                </div>

                <div class="card-countdown">
                    <img src="https://i.postimg.cc/C5ZtQ1Q4/icon-clock.png" alt="icon" class="card-icon">
                    <span>${film.releasedDate}</span>
                </div>
            </div>
        </div>

        <div class="card-footer">
            <img src="${film.movieSmallImg}" alt="avatar" class="card-author-img">

            <p>Creation of ${film.director} <a class ='bir' href=""  onclick ='deletebir(this)'  >Delete</a> </a></p>
        </div>
    </div>`

            })


        })


})

function deletebir(btn) {
    let oka = btn.closest('.card-body')
    oka.remove()
}


