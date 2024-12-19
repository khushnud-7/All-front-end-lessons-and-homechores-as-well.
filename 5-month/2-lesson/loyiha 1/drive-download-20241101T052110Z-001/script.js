// let btn = document.getElementById('bir');
// function myfun() {
//     let input = prompt('Enter a value');
//     if (input === null || input === '') {
//         alert('Please enter a value!');
//     } else {
//         console.log(input);
//         alert('Thanks');
//     }
// }
// btn.addEventListener('click', myfun);


// let btn = document.getElementById('bir')
// function myfun() {
// let input = prompt('Please enter a value')
// if (input.value === null || input.value === '') {
// alert('Please enter a value')
// console.log(input);
//
// }
// else {
// console.log(input.value)
// alert('Thanks')
// }
// }
// btn.addEventListener('click', myfun)



// function timer(deadline, selector) {

//     function updateClock(endtime) {
//         let days, hours, minutes, seconds
//         const time = Date.parse(endtime) - Date.parse(new Date())
//         if (time <= 0) {
//             days = 0
//             hours = 0
//             minutes = 0
//             seconds = 0
//         } else {
//             days = Math.floor(time / (1000 * 60 * 60 * 24))
//             hours = Math.floor((time / (1000 * 60 * 60)) % 24)
//             minutes = Math.floor((time / (1000 * 60)) % 60)
//             seconds = Math.floor((time / (1000)) % 60)
//         };
//         return {
//             totalTime: time,
//             days,
//             hours,
//             minutes,
//             seconds,
//         }
//     }
//     function formatNumber(number) {
//         if (number >= 0 && number < 10) {
//             return `0${number}`
//         }
//         else {
//             return number
//         }
//     }

// }

// function setClock(selector, endtime) {
//     const timer = document.querySelector('selector'),
//         days = timer.querySelector('#days'),
//         hours = timer.querySelector('#hours'),
//         minutes = timer.querySelector('#minutes'),
//         seconds = timer.querySelector('#seconds'),
//         timeIntervel = setInterval(updateTime, 1000)

//     function updateTime() {
//         const time = updateClock(endtime)
//         days.textContent = formatNumber(time.days)
//         hours.textContent = formatNumber(time.hours)
//         minutes.textContent = formatNumber(time.minutes)
//         seconds.textContent = formatNumber(time.seconds)

//         if (time.totalTime <= 0) {
//             clearInterval(timeIntervel)
//         }
//         updateTime()
//     }

//     setClock(selector, endtime)
// }
// timer('2025-12-01', '.timer')






// function timer(deadline, selector) {
// Helper function to calculate time remaining
// function updateClock(endtime) {
// let days, hours, minutes, seconds;
// const time = Date.parse(endtime) - Date.parse(new Date());
// if (time <= 0) {
// days = 0;
// hours = 0;
// minutes = 0;
// seconds = 0;
// } else {
// days = Math.floor(time / (1000 * 60 * 60 * 24));
// hours = Math.floor((time / (1000 * 60 * 60)) % 24);
// minutes = Math.floor((time / (1000 * 60)) % 60);
// seconds = Math.floor((time / 1000) % 60);
// }
// return {
// totalTime: time,
// days,
// hours,
// minutes,
// seconds,
// };
// }
//
// Helper function to format numbers
// function formatNumber(number) {
// return number < 10 ? `0${number}` : number;
// }
//
// Function to set up the timer display and update it
// function setClock(selector, endtime) {
// const timer = document.querySelector(selector),
// days = timer.querySelector('#days'),
// hours = timer.querySelector('#hours'),
// minutes = timer.querySelector('#minutes'),
// seconds = timer.querySelector('#seconds'),
// timeInterval = setInterval(updateTime, 1000);
//
// Function to update the timer display
// function updateTime() {
// const time = updateClock(endtime);
// days.textContent = formatNumber(time.days);
// hours.textContent = formatNumber(time.hours);
// minutes.textContent = formatNumber(time.minutes);
// seconds.textContent = formatNumber(time.seconds);
//
// if (time.totalTime <= 0) {
// clearInterval(timeInterval);
// }
// }
//
// Initialize the clock display
// updateTime();
// }
//
// Start the timer
// setClock(selector, deadline);
// }
//
// Example usage
// timer('2025-12-01', '.timer');
// 

let laod = document.querySelector('.loader-wrapper')
setTimeout(() => {
    laod.style.display = 'none'
}, 1000)



let contact_us = document.getElementById('contact-us'),
    modal = document.getElementById('modal'),
    modal__close = document.getElementById('modal__close'),
    submit = document.getElementById('btn-contact'),
    inputs = document.querySelectorAll('.modal__input')



contact_us.addEventListener('click', () => {
    function myfun() {
        if (contact_us.value === null || contact_us.value === '') {
            console.log(contact_us);
            alert('Please enter a value')

        } else {
            console.log(contact_us)
            alert('Thanks')
        }
    }
    myfun()
    modal.className = "modal show"
})
modal__close.addEventListener('click', () => {
    modal.className = "modal hide"
})

const form = document.querySelector('form'),
    t_t_bot = "7578074688:AAELL3eginWZbJD2kGJ3t-BAdKc4CTbvP10",
    chat_id = "1290313426"

form.addEventListener('submit', event => {
    event.preventDefault();


    const formData = new FormData(form);

    const object = {}
    formData.forEach((value, key) => {
        object[key] = value;
    })

    fetch(`https://api.telegram.org/bot${t_t_bot}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chat_id,
            text: `Name: ${object.name}. Phone: ${object.phone}`,
        })
    })

    .then(() => {
            showStatusMessage(mesage.success)
            form.reset()
        })
        .catch(() => showStatusMessage(message.failure))
        .finally(() => Loader.remove())
})


let tab_content = document.querySelectorAll(".tab_content"),
    tab = document.querySelectorAll(".tabheader__item")


let offers_items = document.querySelector('.offers-items')
offers.forEach(offer => {
    offers_items.innerHTML += `
    <div>  <img src="${offer.src}" alt="${offer.alt}">
 <h3>${offer.title}</h3>
 <p> ${offer.descr}</p>
 <span> ${offer.sale}$</span>
 </div>
    `
})

function hide() {
    tab_content.forEach(tab => {
        tab.classList.add('hide')
        tab.classList.remove('show')
    })
    tab.forEach(ones => {
        ones.classList.remove('tabheader__item_active')
    })
}
hide()

function show(index = 0) {
    tab_content[index].classList.add('show', 'fade')
    tab_content[index].classList.remove('hide')
    tab[index].classList.add('tabheader__item_active')

}
show()

let parents = document.querySelector('.tabheader');
parents.addEventListener('click', event => {
    let target = event.target
    console.log(target);


    if (target && target.classList.contains('tabheader__item')) {
        tab.forEach((tab, index) => {
            if (target == tab) {
                hide()
                show(index)
            }
        })

    }
})





function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesInner = document.querySelector('.offer__slider-inner')
    width = window.getComputedStyle(slidesWrapper).width

    let slideIndex = 1,
        offset = 0

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
    } else {
        total.textContent = slides.length
        current.textContent = slideIndex
    }

    slidesInner.style.width = 100 * slides.length + '%'
    slidesInner.style.display = 'flex'
    slidesInner.style.transition = 'all 0.5s ease'

    slidesWrapper.style.overflow = 'hidden'

    slides.forEach(slide => {
        slide.style.width = width
    })

    next.addEventListener('click', () => {
        if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0
        } else {
            offset += +width.replace(/\D/g, '')
        }
        slidesInner.style.transform = `translateX(-${offset}px)`

        if (slideIndex === slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
    })

    prev.addEventListener('click', () => {
        if (offset === 0) {
            // width  = 900px
            offset = +width.replace(/\D/g, '') * (slides.length - 1)
        } else {
            offset -= +width.replace(/\D/g, '')
        }
        slidesInner.style.transform = `translateX(-${offset}px)`

        if (slideIndex === 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
    })
}
slider()

function timer(deadline, selector) {
    function updateClock(endtime) {
        let days, hours, minutes, seconds;
        const time = Date.parse(endtime) - Date.parse(new Date());
        if (time <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(time / (1000 * 60 * 60 * 24));
            hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((time / (1000 * 60)) % 60);
            seconds = Math.floor((time / 1000) % 60);
        }
        return {
            totalTime: time,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function formatNumber(number) {
        return number >= 0 && number < 10 ? `0${number}` : number;
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');

        const timeInterval = setInterval(updateTime, 1000);

        function updateTime() {
            const time = updateClock(endtime);
            days.textContent = formatNumber(time.days);
            hours.textContent = formatNumber(time.hours);
            minutes.textContent = formatNumber(time.minutes);
            seconds.textContent = formatNumber(time.seconds);

            if (time.totalTime <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateTime();
    }

    setClock(selector, deadline);
}
timer('2025-12-01', '.timer');