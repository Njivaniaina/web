let ret = document.querySelector("#btn-return");
let menu = document.querySelector(".header");

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


ret.addEventListener('click', ()=>{
    window.location.href = '/index.html';
});

// Pour le partie visite
const swiper_list_items = new Swiper('.swiper-list-items', {
    direction: 'horizontal',
    loop: false,
    mousewheel: false,

    speed: 400,
    spaceBetween: 50,
    effect: 'navigation',

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

// Pour le changement dans le swiper
swiper_list_items.on('slideChange', function () {
    const current_index = this.activeIndex;
    let active_cat = document.querySelector('.cat-'+current_index);
    let cat_0 = document.querySelector('.cat-0');
    let cat_1 = document.querySelector('.cat-1');
    let cat_2 = document.querySelector('.cat-2');
    
    cat_0.classList.remove('actif-categorie');
    cat_1.classList.remove('actif-categorie');
    cat_2.classList.remove('actif-categorie');
    active_cat.classList.add('actif-categorie');
});

// Pour le changement de catégorie
let cat_all = document.querySelector('#cat-all');
let cat_affaires = document.querySelector('#cat-affaires');
let cat_loisirs = document.querySelector('#cat-loisirs');

cat_all.addEventListener('click', ()=>{
    swiper_list_items.slideTo(0,400,false);
});
cat_affaires.addEventListener('click', ()=>{
    swiper_list_items.slideTo(1,400,false);
});
cat_loisirs.addEventListener('click', ()=>{
    swiper_list_items.slideTo(2,400,false);
});

// Pour le bouton de Voir ...
let learn_more  = document.querySelector('#learn-more');
learn_more.addEventListener('click', ()=>{
    window.location.href = '#list-cat';
});

// Pour le réservation
let book_now = document.querySelector('#book-now');
book_now.addEventListener('click', ()=>{
    window.location.href = '/book-now.html';
});


// Pour les lists 
let pop = document.querySelector("#all");
fetch("json/index.json")
.then(response => response.json())
.then(data => {
    for(const key in data) {
        let slide = document.createElement("div");
        let image = document.createElement('img');

        let info_message = document.createElement('div');
        let info = document.createElement('div');
        let title = document.createElement('h4');
        let prix = document.createElement('span');
        // const fleche = `<svg style="fill:white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>`;
        // fleche.style.fill = "white";

        slide.classList.add('item-list-cat');
        info_message.classList.add('info-message');
        info.classList.add('info');

        image.src = data[key].image;
        title.textContent = data[key].title;
        prix.textContent = data[key].prix;

        info.appendChild(title);
        info.appendChild(prix);
        info_message.appendChild(info);
        // info_message.innerHTML += fleche;
        slide.appendChild(image);
        slide.appendChild(info_message);

        // console.log(slide);
        pop.appendChild(slide);
    }
});

// pour le partie loisirs
let loisir = document.querySelector("#loisir");
fetch("json/loisir.json")
.then(response => response.json())
.then(data => {
    for(const key in data) {
        let slide = document.createElement("div");
        let image = document.createElement('img');

        let info_message = document.createElement('div');
        let info = document.createElement('div');
        let title = document.createElement('h4');
        let prix = document.createElement('span');
        // const fleche = `<svg style="fill:white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>`;
        // fleche.style.fill = "white";

        slide.classList.add('item-list-cat');
        info_message.classList.add('info-message');
        info.classList.add('info');

        image.src = data[key].image;
        title.textContent = data[key].title;
        prix.textContent = data[key].prix;

        info.appendChild(title);
        info.appendChild(prix);
        info_message.appendChild(info);
        // info_message.innerHTML += fleche;
        slide.appendChild(image);
        slide.appendChild(info_message);

        // console.log(slide);
        loisir.appendChild(slide);
    }
});

// Pour l'affaire
let affaire = document.querySelector("#affaire");
fetch("json/affaire.json")
.then(response => response.json())
.then(data => {
    for(const key in data) {
        let slide = document.createElement("div");
        let image = document.createElement('img');

        let info_message = document.createElement('div');
        let info = document.createElement('div');
        let title = document.createElement('h4');
        let prix = document.createElement('span');
        // const fleche = `<svg style="fill:white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>`;
        // fleche.style.fill = "white";

        slide.classList.add('item-list-cat');
        info_message.classList.add('info-message');
        info.classList.add('info');

        image.src = data[key].image;
        title.textContent = data[key].title;
        prix.textContent = data[key].prix;

        info.appendChild(title);
        info.appendChild(prix);
        info_message.appendChild(info);
        // info_message.innerHTML += fleche;
        slide.appendChild(image);
        slide.appendChild(info_message);

        // console.log(slide);
        affaire.appendChild(slide);
    }
});