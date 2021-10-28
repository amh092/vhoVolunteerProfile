/**  declaring variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

// const vImage = document.querySelector(".volunteer-image img");
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


// clicking function 

const volunteerCard = document.querySelector(".volunteer-card ");
const volunteerCardViewProfile = document.querySelector(".volunteer-card .view-profile ");
const volunteerProfile = document.querySelector(".volunteer-profile");
const volunteerProfileTitle = document.querySelector(".volunteer-profile .title");
const volunteerCertificate = document.querySelector(".volunteer-certificate");
const programs = document.querySelector(".programs");
const certificateTitle = document.querySelector(".volunteer-certificate .title");


// volunteerCard to profile onclick on view profile 

volunteerCardViewProfile.addEventListener("click", function (){

volunteerCard.classList.remove("active");
volunteerCard.classList.add("disabled");
volunteerProfile.classList.remove("disabled");
volunteerProfile.classList.remove("active");

})

// profile card to volunteer card 

volunteerProfileTitle.addEventListener("click",function (){
  volunteerCard.classList.add("active");
  volunteerCard.classList.remove("disabled");
  volunteerProfile.classList.add("disabled");
  volunteerProfile.classList.remove("active");

})


// profile card to certificate 

programs.addEventListener("click", function(){

  volunteerProfile.classList.remove("active");
  volunteerProfile.classList.add("disabled");
  volunteerCertificate.classList.add("active");
  volunteerCertificate.classList.remove("disabled");

})


// certificate to profile card

certificateTitle.addEventListener("click",function(){
  volunteerCertificate.classList.remove("active");
  volunteerCertificate.classList.add("disabled");
  volunteerProfile.classList.add("active");
  volunteerProfile.classList.remove("disabled");
})
