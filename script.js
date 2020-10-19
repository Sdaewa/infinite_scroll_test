const count = 10;
const API = `https://api.unsplash.com/photos/random/?client_id=${}&count=${count}`;
const secret = '';
const client_id = '';
const proxy = 'https://cors-anywhere.heroku.app.com/';

async function getPics() {
    try {
        const response = await fetch(API);
        const data = await response.json();
    } catch (error) {
        console.log(error);
    };
}

getPics();