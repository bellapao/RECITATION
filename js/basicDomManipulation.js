// each entry in the tree is called a node 
const link =
document.querySelector('a');
// to manipulate an element inside the DOM, need to 
// select an element and store a reference to it in a variable 
// if you wanted to match and do things to multiple elements use Document.querySelectorAll()

link.textContent = 'Mozilla Developer Network';
// change the text inside the link by updating the value of the Node.textContent

link.href = 
'https://developer.mozilla.org';
// change the URL the link is pointing to 

const sect=
document.querySelector('section');

const para=
document.createElement('p');
para.textContent= 'We hope you enjoyed the ride.';
// Document.createElement() = create a new paragraph using 

sect.appendChild (para);
// node.appendChild() = append the new paragraph at the end of the section 

const text = document.createTextNode(
    '- the premier source for web development knowledge.');
// Document.createTextNode() = add a text node to the paragraph the link sits inside 


//grab a reference to the paragraph the link is inside
// and append the text node to it 
const linkPara =
document.querySelector('p');
linkPara.appendChild(text);

/* 
sect.appendChild(linkPara) = moving the paragraph with the link inside it to the bottom of the section 
sect.removeChild = removing a node
*/

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
//CSS style 

/* Element.setAttrribute() = takes two arguments: 
    the attribute you want to set on the Element
    and the value you want to set it to 
    para.setAttribute('class','highlight');
*/
