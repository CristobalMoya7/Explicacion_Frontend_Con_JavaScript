// VISTA

export function buildTweet(tweet) {
    return `
      <span>${tweet.handler}</span>
      <span>${tweet.date}</span>
      <p>${tweet.message}</p>
      <p>${tweet.likes} likes</p>
    `
  };