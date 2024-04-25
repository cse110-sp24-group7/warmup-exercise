import quotes from './quotes_ratings.js' 

let rank = parseInt(localStorage.getItem('sentiment-rank'));
let notes = localStorage.getItem('sentiment-notes');
if(!notes) notes = '';
if(rank) document.getElementById('input-summary').innerText =  "You submitted: \n Your ranking: " + rank + '\n' + "Notes: " + notes + '\n';
else document.getElementById('input-summary').innerText = "You haven't submitted anything!";

document.getElementById('quote').innerText = quotes[rank - 1][Math.floor(Math.random() * quotes[rank - 1].length)];