let quotes = [];
let quoteIndex = 0;
let tweetString = '';

$(document).ready(function() {
    randQuote();
});

quotes = [
	{ quote: 'In order to succeed, we must first believe that we can.', author: 'Nikos Kazantzakis' },
	{ quote: 'Either you run the day or the day runs you.', author: 'Jim Rohn' },
	{ quote: 'Life is 10% what happens to you and 90% how you react to it.', author: 'Charles R. Swindoll' },
	{ quote: 'A creative man is motivated by the desire to achieve, not by the desire to beat others.', author: 'Ayn Rand' },
	{ quote: 'You are never too old to set another goal or to dream a new dream.', author: 'C. S. Lewis' },
	{ quote: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
	{ quote: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
	{ quote: 'Knowing is not enough; we must apply. Willing is not enough; we must do.', author: 'Johann Wolfgang von Goethe' },
	{ quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.', author: 'Thomas Edison' },
	{ quote: 'Start where you are. Use what you have. Do what you can.', author: 'Arthur Ashe' },
];

function randQuote() {
    quoteIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').innerHTML = quotes[quoteIndex].quote;
    document.getElementById('quote-author').innerHTML = '- ' + quotes[quoteIndex].author;
    tweetString = encodeURIComponent('"' + quotes[quoteIndex].quote + '"' + ' ' + '- ' + quotes[quoteIndex].author + ' @jia_tan');

    document.getElementById('twitter-share-button').href = 'https://twitter.com/intent/tweet' + '?text=' + tweetString + '&hashtags=JavaScript,QuoteMachine';
}
