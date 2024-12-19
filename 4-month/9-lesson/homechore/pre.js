let btn = document.getElementById('btsh')
let box = document.getElementsByClassName('ultimate')
btn.addEventListener('click', () => {
    car.forEach((cars) => {
        box[0].innerHTML += `<div class="card">
        <div class="card-img-container">
            <img src=${cars.image} alt=${cars.name} class="card-img">
            <span class="card-badge">New <picture>
                <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a5/512.webp" type="image/webp">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a5/512.gif" alt="💥" width="32" height="32">
            </picture></span>
        </div>
        <div class="card-content">
            <h2 class="card-title">${cars.name}</h2>
            <p class="card-description">${cars.description}</p>
            <div class="card-info">
                <span class="card-price">${cars.price}</span>
                <a href="final.html"  class="card-btn">BUY NOW</a>
            </div>
        </div>
    </div>`
    })
})
// JavaScript orqali tugmani tanlash va hodisa qo'shish





