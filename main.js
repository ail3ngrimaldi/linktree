let ul = document.getElementById('redesSociales');
let h1 = document.getElementById('userName')
let p = document.getElementById('description')
let links = document.getElementById('links')

var bolder1 = `<span itemprop="name"><strong>Ailen Grimaldi</strong></span>`;
var bolder2 = `<span itemprop="name"><strong>abogada y programadora</strong></span>`;


let user = {
    redesSociales: [
        {
            icon: './assets/linkedin.png',
            link: 'https://www.linkedin.com/in/ailenrociogrimaldi/',
            alt: 'linkedin',
            itemprop: 'sameAs'
        },
        {
            icon: './assets/github.png',
            link: 'https://github.com/ail3ngrimaldi',
            alt: 'github'
        },
        {
            icon: './assets/twitter.png',
            link: 'https://twitter.com/ailenrg',
            alt: 'twitter'
        },
        {
            icon: './assets/email.png',
            link: 'mailto:ailenrgrimaldi@gmail.com?subject=Mail from ',
            alt: 'email',
            itemprop: 'email'
        }
    ],
    name: '@ailenrg',
    description: 'Bienvenidx! Mi nombre es ' + bolder1 + ', soy ' + bolder2 + ', en constante crecimiento y aprendizaje.',
    links: 'Links de interés:'
}

h1.innerHTML = user.name;
p.innerHTML = user.description;
links.innerHTML = user.links;

let red = '';

function redes () {
    for (let i = 0; i < user.redesSociales.length; i++) {
        red = `<li><a href=${user.redesSociales[i].link}>
        <img src=${user.redesSociales[i].icon} alt=${user.redesSociales[i].alt} />
        </a></li>`

        ul.innerHTML += red;
    }
}

redes();
