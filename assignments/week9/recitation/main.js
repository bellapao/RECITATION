const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics =['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg'];

/* Declaring the alternative text for each image file */
const text = {
    'pic1.jpeg':'picnic at the farmer market',
    'pic2.jpeg':'Maggie on Farrand Feild with a cowboy hat',
    'pic3.jpeg':'light leak on a pic of Jan and Cece in the parking lot',
    'pic4.jpeg': 'Bella and Jan sitting on the trunk of Maggie\'s car in Eldora parking lot',
    'pic5.jpeg': 'parking lot circle before skiing'
}

/* Looping through images */
for (const i in pics) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `pics/${i}`);
newImage.setAttribute('alt', text[i]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', bam => {
    displayedImage.src = bam.target.src;
    displayedImage.alt = bam.target.alt;
}
 );
}

/* Wiring up the Darken/Lighten button */
