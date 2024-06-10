let menu = document.querySelector(".header");

let about = document.querySelector("#about");
let home = document.querySelector("#home");
let contact = document.querySelector("#contact");
let visite = document.querySelector("#visite");

menu.addEventListener('click', () => {
    if(menu.classList.contains("close")) {
        menu.classList.remove("close");
        menu.classList.add("open");
    }
    else {
        menu.classList.remove("open");
        menu.classList.add("close");
    }
});

// Pour le swiper et ses paramètres
const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: false,
    mousewheel: false,

    speed: 400,
    spaceBetween: 10,
    effect: 'navigation',
    coverflowEffect: {
        slideShadows: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    mousewheel: {
        invert: true,
    },
});
swiper.on('slideChange', function () {
    const current_index = this.activeIndex;
    let active_menu = document.querySelector(".nav-btn-"+current_index);
    let nav_btn_0 = document.querySelector(".nav-btn-0");
    let nav_btn_1 = document.querySelector(".nav-btn-1");
    let nav_btn_2 = document.querySelector(".nav-btn-2");
    let nav_btn_3 = document.querySelector(".nav-btn-3");
    
    nav_btn_0.classList.remove('active-btn');
    nav_btn_1.classList.remove('active-btn');
    nav_btn_2.classList.remove('active-btn');
    nav_btn_3.classList.remove('active-btn');
    active_menu.classList.add('active-btn');
});

// Pour le swiper dans le partie about
const swiper_about = new Swiper('.swiper-about-image', {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
    },

    speed: 600,
    spaceBetween: 10,

    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// Pour le click sur un botton
home.addEventListener('click', ()=>{
    swiper.slideTo(0, 400, false);
});
about.addEventListener('click', ()=>{
    swiper.slideTo(1, 400, false);
});
visite.addEventListener('click', ()=>{
    swiper.slideTo(2, 400, false);
});
contact.addEventListener('click', ()=>{
    swiper.slideTo(3, 400, false);
});

// Pour le partie visite
const swiper_visite = new Swiper('.swiper-visite', {
    direction: 'horizontal',
    loop: false,
    mousewheel: false,
    // autoplay: {
    //     delay: 5000,
    // },

    speed: 400,
    spaceBetween: 50,
    effect: 'navigation',

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
// Pour le bouton dans le partie swiper de hot visite 
let prevEl = document.querySelector(".slide-button-prev");
let nextEl = document.querySelector(".slide-button-next");

prevEl.addEventListener('click', ()=>{
    const current_index = swiper_visite.activeIndex;
    swiper_visite.slideTo(current_index-1, 400, false);
});
nextEl.addEventListener('click', ()=>{
    const current_index = swiper_visite.activeIndex;;
    swiper_visite.slideTo(current_index+1, 400, false);
});

// Pour le réservation
let book_now = document.querySelector('#book-now');
book_now.addEventListener('click', ()=>{
    window.location.href = '/book-now.html';
});

// Pour le voir plus dans le section de site populaire 
let read_more = document.querySelector('#read-more');
read_more.addEventListener('click', ()=>{
    window.location.href = '/list-contry.html';
});

// Generate list des endroits populaire 
// let pop = document.querySelector("#pop");
fetch("json/populaire.json")
.then(response => response.json())
.then(data => {
    for(const key in data) {
        let image = document.querySelector("#item_img_"+key);
        let title = document.querySelector("#item_title_"+key);
        let prix = document.querySelector("#item_prix_"+key);

        image.src = data[key].image;
        title.innerHTML = data[key].title;
        prix.innerHTML = data[key].prix;
    }

    // console.log(data);
    // for(const key in data) {
    //     let slide = document.createElement("div");
    //     let image = document.createElement('img');

    //     let info_message = document.createElement('div');
    //     let info = document.createElement('div');
    //     let title = document.createElement('h4');
    //     let prix = document.createElement('span');

    //     slide.classList.add('swiper-slide');
    //     slide.classList.add('slide-1');
        
    //     info_message.classList.add('info-message');
    //     info.classList.add('info');

    //     image.src = data[key].image;
    //     title.innerHTML = data[key].title;
    //     prix.innerHTML = data[key].prix;

    //     info.appendChild(title);
    //     info.appendChild(prix);
    //     info_message.appendChild(info);
    //     info_message.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>`;
    //     slide.appendChild(image);
    //     slide.appendChild(info_message);

    //     console.log(slide);
    //     pop.appendChild(slide);
    // }
});