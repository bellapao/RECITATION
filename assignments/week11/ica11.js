//document.addEventListener('load', getQuote);
window.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote(){
    //console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();
    let message = response ['message'];

    console.log(text)['message'];

    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['messaage']);
    //.then(text => text.text())
    //.then(y=> myDisplay(y));
    //console.log(text['message']);
    displayQuote(jsonResponse['message']);
}

function displayQuote(x) {
    //const quoteBox = document.querySelector ('#js-quote-text');
    //console.log('display quote working');
    //quoteBox.innerText(x);
    //const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent += x;
}

getQuote();