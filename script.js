let movies = [
    {
        name: "Title",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto at aperiam quaerat quas totam!",
        image: "./static/images/slider\ 1.PNG"
    },
    {
        name: "Title",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto at aperiam quaerat quas totam!",
        image: "./static/images/slider\ 2.PNG"
    },
    {
        name: "Title",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto at aperiam quaerat quas totam!",
        image: "./static/images/slider 3.PNG"
    },
    {
        name: "Title",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto at aperiam quaerat quas totam!",
        image: "./static/images/slider 4.PNG"
    },
    {
        name: "Title",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto at aperiam quaerat quas totam!",
        image: "./static/images/slider 5.PNG"
    },

];

const carousel = document.querySelector(".carousel")
let slider = []

let slideIndex = 0 // track current slide

function createSlide()  {
    if(slideIndex >= movies.length) {
        slideIndex = 0;
    }

    let slide = document.createElement('div')
    let imgEl = document.createElement('img')
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    imgEl.appendChild(document.createTextNode(''))
    h1.appendChild(document.createTextNode(movies[slideIndex].name))
    p.appendChild(document.createTextNode(movies[slideIndex].desc))
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(content)
    slide.appendChild(imgEl)
    carousel.appendChild(slide)

    imgEl.src = movies[slideIndex].image
    slideIndex++

    slide.className = 'slider';
    imgEl.className = 'slide-img';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-desc';

    slider.push(slide)

    if(slider.length) {
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${
            30 * (slider.length - 2)
        }px)`
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval (() => {
    createSlide();
}, 3000)