function myFunction() {
    window.location.href = "login.html";
}

//cards
const data = [
    {
      icon: "bi bi-filetype-html",  
      title: "HTML",
      description: "Inicie sua jornada no mundo do HTML, criando seu primeiro projeto seguindo o nosso passo a passo",
    },
   
    {
        icon: "bi bi-filetype-css",
        title: "CSS",
        description: "Inicie sua jornada no mundo do CSS, criando seu primeiro projeto seguindo o nosso passo a passo",
      },
     
    {
        icon: "bi bi-filetype-js",
        title: "JS",
        description: "Inicie sua jornada no mundo do JS, criando seu primeiro projeto seguindo o nosso passo a passo",
      },
     
    {
        icon: "bi bi-filetype-py",
        title: "Python",
        description: "Inicie sua jornada no mundo do HTML, criando seu primeiro projeto seguindo o nosso passo a passo",
    },
   
    {
        icon: "bi bi-filetype-rb",
        title: "Ruby",
        description: "Inicie sua jornada no mundo do HTML, criando seu primeiro projeto seguindo o nosso passo a passo"
    },
   
    {
        icon: "bi bi-git",
        title: "Git",
        description: "Inicie sua jornada no mundo do HTML, criando seu primeiro projeto seguindo o nosso passo a passo",
    },
   
    {
        icon: "bi bi-filetype-php",
        title: "PHP",
        description: "Inicie sua jornada no mundo do HTML, criando seu primeiro projeto seguindo o nosso passo a passo",
    },
   
    {
        icon: "bi bi-filetype-sql",
        title: "SQL",
        description: "Inicie sua jornada no mundo do HTML, criando seu primeiro projeto seguindo o nosso passo a passo",
    },
   
    {
        icon: "bi bi-currency-bitcoin",
        title: "Crypto",
        description: "Inicie sua jornada no mundo do HTML, criando seu primeiro projeto seguindo o nosso passo a passo",
    },
];


//cards
const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data=> {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        <div class="card">
        <i class="${e.icon}"></i>
        <h3>${e.title}<h3>
        <p>${e.description}<p>
        </div>
        `
    })
}

searchInput.addEventListener("keyup", (e) =>{
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})

window.addEventListener("load", displayData.bind(null, data));


//carrossel de cursos
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
