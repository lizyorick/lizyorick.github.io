let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Butterfly.jpg') {
      myImage.setAttribute ('src','images/The-Storm-Comes-500w.jpg');
    } else {
      myImage.setAttribute ('src','images/Butterfly.jpg');
    }
}




let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Butterflies are cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Butterflies are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}