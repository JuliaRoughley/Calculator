let myImage = document.querySelector('img');

myImage.onclick = function() {
   let mySrc = myImage.getAttribute('src');
   if (mySrc === 'images/cupcakes.jpg') {myImage.setAttribute ('src', 'images/cupcakes1.jpg'); }

   else if (mySrc === 'images/cupcakes1.jpg') {myImage.setAttribute ('src', 'images/cupcakes2.jpg');}

   else if (mySrc === 'images/cupcakes2.jpg') {myImage.setAttribute ('src', 'images/cupcakes0.jpg');}
   else {myImage.setAttribute ('src', 'images/cupcakes.jpg'); }
}

console.log (myImage.onclick);

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'We Love Cupcakes! Welcome ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'We Love Cupcakes! Welcome ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

 

