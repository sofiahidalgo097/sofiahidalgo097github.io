// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


// let myVariable;
//myVariable = "Bob";

//let mysecondVariable = "Bob";
//myVariable;

/* This is a comment*/
// this is also a comment


// This make spop ups! --->       alert("hello!");

//document.querySelector("html").addEventListener("click", function () {
  //alert("Ouch! Stop poking me!");
  //});

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/frozen.jpg.avif") {
    myImage.setAttribute("src", "images/winter.png");
  } else {
    myImage.setAttribute("src", "images/frozen.jpg.avif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `This is ${storedName}'s website!`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `This is ${storedName}'s website!`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  