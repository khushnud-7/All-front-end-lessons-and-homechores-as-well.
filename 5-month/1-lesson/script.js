
let box = document.querySelector('div')
fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(products => {
        console.log(products);
        products.forEach((clothing) => {
            box.innerHTML += `<div class="col-md-3">
                <div class="dress-card">
                    <div class="dress-card-head">
                        <img class="dress-card-img-top"
                            src="${clothing.image}"
                            alt="">
                        <div class="surprise-bubble"><span class="dress-card-heart">
                                <i class="fas fa-heart"></i>
                            </span><a href="#"> <span>More</span></a></div>
                    </div>
                    <div class="dress-card-body">
                        <h4 class="dress-card-title">${clothing.category}</h4>
                        <p class="dress-card-para">${clothing.title}</p>
                        <p class="dress-card-para"><span class="dress-card-price">Rs.${clothing.price}$ &ensp;</span><span
                                class="dress-card-crossed">${clothing.rating}}</span><span class="dress-card-off">&ensp;(60%
                                OFF)</span></p>
                        <div class="row">
                            <div class="col-md-6 card-button"><a href="">
                                    <div class="card-button-inner bag-button">Add to Bag</div>
                                </a></div>
                            <div class="col-md-6 card-button"><a href="">
                                    <div class="card-button-inner wish-button">Wishlist</div>
                                </a></div>
                        </div>
                    </div>
                </div>
            </div>`
        })


    })