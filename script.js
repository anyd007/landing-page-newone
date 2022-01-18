let navMain;
let navAboutMe;
let navTasks;
let navLinks;
let navContact;
let sectionAbout;
let sectionTasks;
let sectionLinks;
let sectionContact;
let messaggeInputs;
let nameInput;
let emailInput;
let textera;
let contactSendBtn;
let scrollUpBtn;
let taskTable;
let taskTableData;
let cvMainContener;
let cvUpload;
let cvViev;

const main = () => {
  DOMCreateElements();
  DOMCreateEvents();
};

const DOMCreateElements = () => {
  navMain = document.querySelector("nav");
  navAboutMe = document.querySelector("#nav-about-me");
  navTasks = document.querySelector("#nav-tasks");
  navLinks = document.querySelector("#nav-links");
  navContact = document.querySelector("#nav-message");
  sectionAbout = document.querySelector("#about");
  sectionTasks = document.querySelector("#my-tasks");
  sectionLinks = document.querySelector("#my-links");
  sectionContact = document.querySelector("#messagge");
  messaggeInputs = document.querySelectorAll("form input");
  nameInput = document.querySelector("#name-input");
  emailInput = document.querySelector("#email-input");
  textera = document.querySelector("#leave-messagge");
  contactSendBtn = document.querySelector("#send-btn");
  scrollUpBtn = document.querySelector("#scroll-up");
  taskTable = document.querySelector("table")
  taskTableData = document.querySelectorAll("td");
  cvMainContener = document.querySelector('.my-cv');
  cvUpload = document.querySelector('#cv-upload');
  cvViev = document.querySelector('#cv-view');

};

const naviScroll = (e) => {
  if (e.target.matches("#nav-about-me")) {
    sectionAbout.scrollIntoView({ block: "center", inline: "center" });
  } else if (e.target.matches("#nav-tasks")) {
    sectionTasks.scrollIntoView({ block: "center", inline: "center" });
  } else if (e.target.matches("#nav-links")) {
    sectionLinks.scrollIntoView({ block: "center", inline: "center" });
  } else if (e.target.matches("#nav-message")) {
    sectionContact.scrollIntoView({ block: "center", inline: "center" });
  }
};
const scrollButton = () => {
  let scrolled = window.scrollY;
  if (scrolled > 200) {
    scrollUpBtn.style.display = "flex";
  } else {
    scrollUpBtn.style.display = "none";
  }
};
const handleToTop = () => {
  document.documentElement.scrollTop = 0;
};
const cvTrack = e =>{
  if(e.target.matches('#cv-view')){
    window.open('./obrazy/dokumenty/Andrzej_Gębala_CV_IT.pdf');
  }
}

const showTask = (e) => {
  if (e.target.matches(".show-day")) {
    window.open("https://laughing-villani-8ad083.netlify.app/");
  } else if (e.target.matches(".cars")) {
    window.open("https://vigilant-kilby-67c922.netlify.app/");
  } else if (e.target.matches(".form")) {
    window.open("https://practical-kare-7e5ace.netlify.app/");
  } else if (e.target.matches(".lottery-game")) {
    window.open("https://dreamy-hugle-b6f4f9.netlify.app/");
  } else if (e.target.matches(".to-do")) {
    window.open("https://nervous-visvesvaraya-455618.netlify.app/");
  } else if (e.target.matches(".weather-api")) {
    window.open("https://gracious-albattani-650a6b.netlify.app/");
  } else if (e.target.matches(".react-to-do")) {
    window.open("https://sharp-jackson-d396f4.netlify.app/");
  }else if (e.target.matches('.react-form')) {
    window.open('https://xenodochial-mahavira-42d0e4.netlify.app');
  }
};



const DOMCreateEvents = () => {
  navMain.addEventListener("click", naviScroll);
  window.addEventListener("scroll", scrollButton);
  scrollUpBtn.addEventListener("click", handleToTop);
  taskTable.addEventListener("click", showTask);
  cvMainContener.addEventListener('click', cvTrack);
};


document.addEventListener("DOMContentLoaded", main);
