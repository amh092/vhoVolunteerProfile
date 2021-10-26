/**  declaring variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

const vImage = document.querySelector(".volunteer-image img");
const vName  = document.querySelector(".volunteer-name")

const vHours = document.querySelector(".volunteer-card .hours");



/** getting the URL */
let requestUrl = "members.json";
// creating httpRequest var 
let request = new XMLHttpRequest();
// calling
request.open('GET', requestUrl);

request.responseType = 'json';
request.send();


request.onload = function() {
const superHeroes = request.response;

showHeroes(superHeroes);

}


function showHeroes(obj) {
const members = obj['members'];
var programers =[]
var programersName = []

for (let i = 0; i < members.length; i++) {

  
  // vImage.setAttribute("src",members[0].image);
 
  vName.innerText = members[0].firstName +" "+ members[0].middleName+" " + members[0].lastName;
  vName2.innerText = members[0].firstName +" "+ members[0].middleName+" " + members[0].lastName;
  
  vHours.innerText = members[0].programs.length

  if(members[i].programs[0].name === "water") {  
  programers.push(members[i].id)}

}

console.log(programers)
}

// get the committee and list 