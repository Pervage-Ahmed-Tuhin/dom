// console.log("Hello java");

// const elements = document.getElementsByClassName('My-food');

// console.log(elements);


// const style1 = document.getElementById('section1-id').style.backgroundColor='blue';

// const style2= document.getElementById('section1-id').style.color='yellow';

// console.log(style1,style2);


// const value =  document.getElementById('header1');

// value.innerText='Badar ka jalwa';

// console.log(value);


// const value2 = document.getElementById('section-main-box');

// value2.innerHTML=
// `   
//     <div>

//     <h1>This is me  And it is I </h1>

//     <ul>

//     <li>item-stuff-1</li>
//     <li>item-stuff-2</li>
//     <li>item-stuff-3</li>
//     <li>item-stuff-4</li>
//     <li>item-stuff-5</li>

//     </ul>

//     </div>


// `;

// console.log(value2);


const title = document.getElementById('innerUl');

// console.log(title.classList);

// console.log(title.getAttribute('class'));

title.classList.add('badar');

// console.log(title.classList);

// console.log(title.getAttribute('class'));

title.classList.remove('badar');

console.log(title.getAttribute('class'));


const title2 = document.getElementById('ancor');

title2.setAttribute('title', 'ami holam badar kori kadar badr');

console.log(title2);



const title3 = document.getElementById('lolitas');

const moshlas = title3.childNodes;

console.log(moshlas);



// console.log(title3.firstChild);
// console.log(title3.childNodes[3].nextSibling);


const li = document.createElement('li');

li.innerText = 'Badar ka jalwa part 2';


const bodorul = document.getElementById('lolitas');

bodorul.append(li);


// console.log(bodorul.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

//This is used to transform an array like element into an original array Array.form()
//Array.form(name from which array like element).map(function(item){

// }
// items.style.color = 'yellow';
//  console.log(item);
// })
