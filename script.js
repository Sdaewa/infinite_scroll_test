var snoowrap = require('snoowrap');

const count = 10;
const secretKEY = 'AYNOGsGAA3YZcSpvJipuOzJBQFA';
const clientID = 'RxxJV-lnWPtVWQ';
const refreshToken = '63627351748-h2qlzzSRyrNJyW_J6tRKcMSflSA';
const accessToken = '63627351748-h2qlzzSRyrNJyW_J6tRKcMSflSA';
const API = `ttps://www.reddit.com/api/v1/access_token`;
const proxy = 'https://cors-anywhere.heroku.app.com/';


async function scrapeSubreddit() {
    try {
        const r = new Snoowrap({
            userAgent: 'Random string',
            clientId: clientID,
            clientSecret: secretKEY,
            refreshToken: refreshToken
        });

        const subreddit = await r.getSubreddit('realState');
        const topPosts = await subreddit.getTop({
            time: 'week',
            limit: 10
        });

        let data = [];

        topPosts.forEach((post) => {
            data.push({
                title: link.url,
                text: post.title,
                score: post.score
            })
        });
    } catch (error) {
        console.log(error);
    };
    console.log(data);
}

scrapeSubreddit();