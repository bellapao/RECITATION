// // Select the new quote button using a querySelector. Assign it to a new variable.
// const newQuote = document.querySelector(".button");

// // Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote"
// // Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.
// const fetchAPI = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

// async function getQuote(){
//     let randomQuote = await fetch(fetchAPI);
//     // .then(randomQuote.randomQuote());
//     let response = await randomQuote.randomQuote();
//     console.log(response);
// }
// newQuote.addEventListener('click', getQuote)

// // Add a new variable that holds the API endpoint
// // const fetchAPI = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

// // Change the getQuote function to use the fetch method to get a random quote from that endpoint.
// // let randomQuote = fetch(fetchAPI)
// // .then(randomQuote.randomQuote())
// // .then()

// document.addEventListener('load', getQuote);
window.addEventListener('load', getQuote);

const quoteButton = document.querySelector(".new-quote");
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote(){
    // console.log('test');
    let text = await fetch(endpoint);
    let response = await text.text();

    let jsonResponse = JSON.parse(response);
    console.log(jsonResponse);
    console.log(jsonResponse['message']);

    displayQuote(jsonResponse['message']);
}

function displayQuote(x){
    // const quoteBox = document.querySelector('#js-quote-text');
    // console.log('quote works!')
    // // quoteBox.innertext(x);
    // const textMessage = document.createTextNode(x);

    // quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}