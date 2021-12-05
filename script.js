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

const main = () => {
  DOMCreateElements();
  DOMCreateEvents();
};

const DOMCreateElements = () => {
  navMain = document.querySelector('nav')
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
  scrollUpBtn = document.querySelector('#scroll-up');


};

const naviScroll  = (e) =>{
    if(e.target.matches("#nav-about-me")){
        sectionAbout.scrollIntoView({block:"center", inline:"center"})
    }
     else if(e.target.matches("#nav-tasks")){
        sectionTasks.scrollIntoView({block:"center", inline:"center"})
    }
    else if(e.target.matches("#nav-links")){
        sectionLinks.scrollIntoView({block:"center", inline:"center"})
    }
    else if(e.target.matches('#nav-message')){
        sectionContact.scrollIntoView({block:"center", inline:"center"})
    }
}
const scrollButton = () =>{
    let scrolled = window.scrollY
    if(scrolled >200){
        scrollUpBtn.style.display = 'flex'
    }else{
        scrollUpBtn.style.display = 'none'
        
    }
}
const handleToTop = () =>{
    document.documentElement.scrollTop = 0;                                                                                                      
}




const DOMCreateEvents = () => {
navMain.addEventListener('click', naviScroll)
window.addEventListener('scroll', scrollButton)
scrollUpBtn.addEventListener('click', handleToTop)
};


document.addEventListener("DOMContentLoaded", main);
