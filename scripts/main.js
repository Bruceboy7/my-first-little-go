function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    if(myName === null){
        myHeading.textContent = 'Welcome, Whoever You Are!';
    } else {
    myHeading.textContent = 'Welcome, ' + myName;
    }
  }



let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.jpg') {
      myImage.setAttribute ('src','images/second-photo.jpg');
    } else {
      myImage.setAttribute ('src','images/test-image.jpg');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();

}
let myHeading = document.querySelector('h1');


  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
  }