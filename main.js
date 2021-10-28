var myImage = document.querySelector('img');
var myh1 = document.querySelector('h1');//document.querySelector(".entry-title").textContent

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
      myh1.textContent = "& that's not bad;)";
    } else {
      myImage.setAttribute ('src','firefox-icon.png');
      myh1.textContent = "Mozilla Is Good";
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
  }

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
