//Confirm JS is read by browser
console.log("Yay the page is working!")

//Define HTML page elements for structure
let page = document.querySelector("body");
let title = document.createElement("h1");
let yourName = document.createTextNode("Brandon Runkel");
let header = document.createElement("header");

title.appendChild(yourName);
header.appendChild(title);
page.appendChild(header);
header.style.textAlign="center";

//1. Create primary container elements & append pieces to page
let main = document.createElement("section");
page.appendChild(main);
main.setAttribute("id", "primary_box")

let container1 = document.createElement("div");
container1.setAttribute("id", "githubContent");
let bio_title = document.createElement("h2");
let bio_title_content = document.createTextNode("The Basics");
bio_title.appendChild(bio_title_content);
container1.appendChild(bio_title);
let sub_container = document.createElement("div")
sub_container.setAttribute("id", "the_basics");
container1.appendChild(sub_container);

let container2 = document.createElement("div");
container2.setAttribute("id", "textContent");

let container3 = document.createElement("div");
container3.setAttribute("id", "picture");

let paragraph_title = document.createElement("h2");
let paragraph_title_content = document.createTextNode("The Story");
paragraph_title.appendChild(paragraph_title_content);
container2.appendChild(paragraph_title);


let paragraph = document.createElement("p");
let lorem = document.createTextNode("Born and raised in Dallas, TX, Brandon is an aspiring software development professional learning what it takes to be successful in today's technology market. After a few years of successfully supporting enterprise sales teams as a solutions consultant, the day came where it was time for a change. That change came in the summer of 2017, when he quit his job, applied to school and got accepted to a full-time career development cohort at the Iron Yard in Raleigh, NC. Currently in the thick of the cirriculum, Brandon is pursuing full-stack development with a concentration primarily on back-end. He currently lives in Raleigh and aspires to join the Red Hat software development organization upon graduation"); 
let info_section = document.createElement("div");

container1.appendChild(info_section);

paragraph.appendChild(lorem);
container2.appendChild(paragraph);

main.appendChild(container1);
main.appendChild(container2);
main.appendChild(container3);

//2. Define AJAX function

let req = new XMLHttpRequest();
req.addEventListener('load', reqListener);
req.open("GET", "https://api.github.com/users/bubbabean")
req.send();

//3. Construct template and organize layout
function reqListener() {
  //parse response text
  let gitData = JSON.parse(this.responseText);
  console.log(gitData)

  let name = gitData.name;
  // console.log(name);
  let githubLogin = gitData.login;
  // console.log(githubURL);
  // let email = gitData.email;
  let location = gitData.location;
  let bio = gitData.bio;
  let avatar = gitData.avatar_url;

  sub_container.innerHTML=`<li><span>Name:</span> ${name}</li>
  <li><span>GitHub URL:</span> ${githubLogin}</li>
  <li><span>Location:</span> ${location}</li>
  <li><span>Bio:</span>  ${bio}</li>`;

  container3.innerHTML=`<img src=${avatar}></img>`;
}
