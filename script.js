const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];


const count = 10;
const keyAPI = 'lwpx-YU7tGq3uAZUmqwwlQt9iXpdS1MRHimbyqXKspQ';
const API = `https://api.unsplash.com/photos/random/?client_id=${keyAPI}&count=${count}`;


function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
    });
}


async function getPhotos() {
    try {
        const response = await fetch(API);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error);
    };
}

getPhotos();