window.addEventListener('load', getQuote);

const quoteButton = document.querySelector(".new-quote");
quoteButton.addEventListener('click', getQuote);

const endpoint ='https://dog.ceo/api/breeds/image/random';

async function getQuote(){
    // console.log('test');
    let image = await fetch(endpoint);
    let response = await image.text();

    let jsonResponse = JSON.parse(response);
    console.log(jsonResponse);
    console.log(jsonResponse['message']);

    displayQuote(jsonResponse['message']);
}

function displayQuote(x){
    // const quoteBox = document.querySelector('#js-quote-text');
    // console.log('quote works!')
    // quoteBox.innertext(x);
    // const textMessage = document.createTextNode(x);

    // quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;

    // how to make the link an image that displays on screen?
    // var img = document.createElement('img');
    // document.getElementById('js-quote-text').appendChild(img) = x;
}