// let body = document.querySelector('div');
// document.addEventListener('click', alert('this is an alert'));

function giveAlert() {
    alert('BOO');
}

var button = document.querySelector("button");
button.addEventListener('click', function onClick(){
    button.style.backgroundColor = 'red';
});

const selectElement = document.querySelector('.pages');

selectElement.addEventListener('change',(Event) => {
    const result = document.querySelector('.result');
    result.textContent = 'See ya soon';
}
);