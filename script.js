const count = 10;
const secretKEY = 'AYNOGsGAA3YZcSpvJipuOzJBQFA'
const clientID = 'RxxJV-lnWPtVWQ'
const API = `ttps://www.reddit.com/api/v1/access_token`;
const proxy = 'https://cors-anywhere.heroku.app.com/'

async function getSubreddit() {
    try {
        const response = await fetch(proxy + API);
        const data = await response.json();
        console.log(data);
    } catch (error) {

    }
}

getSubreddit();