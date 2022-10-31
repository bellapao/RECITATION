
async function populate() {

  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);
  // initialize a new Request object

  const response = await fetch(request);
  // make the network request using the fetch() function, and this returns a response object
  const superHeroes = await response.json();
  // retrieve the response as JSON using the json() function of the Response object 


  populateHeader(superHeroes);
  populateHeroes(superHeroes);

}
// populating the header 
function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }
// creating the hero information cards
  function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;
    // store the members property of the JavaScript object in a new variable
    // contains multiple objects that contain the information for each hero 
  
    for (const hero of heroes) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
      
      // set the <h2> to contain the current hero's name 
      myH2.textContent = hero.name;
      // fill the paragraphs with their information 
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = 'Superpowers:';
      
      //store the powers property in another new constant 
      // contains an array that lists the current hero's superpowers 
      const superPowers = hero.powers;
      // for...of loop to loop through the currrent hero's superpowers 
      for (const power of superPowers) {
          // create a <li> and put the superpower inside it 
        const listItem = document.createElement('li');
        // put the listItem inside the <ul> element (myList) using appendChild()
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
      
      //append the tags inside the article 
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      // append the article inside the section 
      section.appendChild(myArticle);

      // order in which things are appended is important, as this is the order they will be displayed inside the HTML
    }
  }

  populate();
  // calling the function 