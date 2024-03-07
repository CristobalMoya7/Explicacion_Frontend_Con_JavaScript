// VISTA


export function buildTweet () {
    return `
    <span>${tweet.handler}</span>
    <span>${tweet.date}</span>
    <p>${tweet.message}</p>
    <p>${tweet.likes} likes</p>
    `
}