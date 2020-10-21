const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
const keyAPI = config.SECRET_KEY;

let count = 2;
let API = `https://api.unsplash.com/photos/random/?client_id=${keyAPI}&count=${count}`;
let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;


function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        count = 20
    };
}

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    };
}

function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        const item = document.createElement('a');

        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });

        const img = document.createElement('img');

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        img.addEventListener('load', imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotos() {
    try {
        const response = await fetch(API);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        getPhotos();
    };
}


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    };
});

getPhotos();