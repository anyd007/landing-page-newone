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
let triangleLeft;
let triangleRight;
let aboutAnimation;
let tasksAnimation;
let linksAnimation;
let titleAnimation;
let navAllTags;
let navList;
let mailBtn;
let formMain;
// mobile

const main = () => {
  mobileCheck.addListener(checkView) 
  DOMCreateElements();
  DOMCreateEvents();
};

const DOMCreateElements = () => {
  navMain = document.querySelector("nav");
  navAllTags = document.querySelectorAll('.nav-li');
  navList = document.querySelector('.nav-list');
  navAboutMe = document.querySelector("#navAboutMe");
  navTasks = document.querySelector("#navTasks");
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
  mailBtn = document.querySelector('#mailBtn');
  phoneBtn = document.querySelector('#phoneBtn')
  scrollUpBtn = document.querySelector("#scroll-up");
  taskTable = document.querySelector("table")
  taskTableData = document.querySelectorAll("td");
  cvMainContener = document.querySelector('.my-cv');
  cvUpload = document.querySelector('#cv-upload');
  cvViev = document.querySelector('#cv-view');
  titleAnimation = document.querySelector('.title-effect')
  aboutAnimation = document.querySelector('.about-effect');
  tasksAnimation = document.querySelector('.tasks-effect');
  linksAnimation = document.querySelector('.links-effect');
  mobileMenu = document.querySelector('#mobileSideVersion');
  };
  formMain = document.querySelector('#main-form');

const navEffecttRemove = () =>{
    navAllTags.forEach(el =>{
      el.style.filter = 'blur(0px)'
    })}
function navEffect(e){
  let style = e.target.style.filter = 'blur(0px)'
  e.target.matches('.nav-list') ? style : null
}
const navBlur = () =>{
  navAllTags.forEach(el =>{
    el.style.filter = 'blur(2px)'
})
}

const naviScroll = (e) => {
  if (e.target.matches("#navAboutMe")) {
    sectionAbout.scrollIntoView({ block: "center", inline: "center" });
  } else if (e.target.matches("#navTasks")) {
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
}
window.onload = setTimeout(()=>{
  titleAnimation.classList.add('title-effect-show')
}, 500)
// const animationHeaderShow = () =>{
//   titleAnimation.classList.add('title-effect-show')
//   }
const aboutAnimationShow = () =>{
  let scrolled = window.scrollY
    if(scrolled > 100){
      aboutAnimation.classList.add('about-effect-show')
    }if(scrolled > 700){
      tasksAnimation.classList.add('tasks-effect-show')
    }if(scrolled > 1700){
      linksAnimation.classList.add('links-effect-show')
    }
  
}
const handleToTop = () => {
  document.documentElement.scrollTop = 0;
};
const cvTrack = e =>{
  if(e.target.matches('#cv-view')){
    window.open('./obrazy/dokumenty/Andrzej_Gębala_CV_IT.pdf');
  }else if(e.target.matches('#cv-upload')){
    let download = (fileUrl, fileName)=>{
    let a = document.createElement('a')
    a.href = fileUrl
    a.setAttribute('download', fileName)
    a.click()
    }
    download('./obrazy/dokumenty/Andrzej_Gębala_CV_IT.pdf', 'Andrzej_Gębala_CV')
  }
}
const inputCheck = ()=>{
  nameInput.style.backgroundColor = 'white';
  emailInput.style.backgroundColor = 'white';
  messaggeInputs.forEach(el => {
    if(el.value === ''){
      el.style.backgroundColor = 'red'
    }
  })};

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

let mailTitle = document.createElement('p')
mailTitle.textContent = 'info@gebalaportfolio.pl'
mailTitle.classList.add('mailAdress')
mailTitle.classList.add("hideTxt")
formMain.append(mailTitle);
let phoneNumber = document.createElement('p')
phoneNumber.textContent = '+48 508739899'
phoneNumber.classList.add('phoneNumber')
phoneNumber.classList.add("hideTxt")
formMain.append(phoneNumber);
    const showHideMail = (e) =>{
   if(e.target.matches('#mailBtn')){
  mailTitle.classList.toggle("showTxt")
  mailBtn.textContent == 'pokaż e-mail' ? mailBtn.textContent = 'ukryj e-mail' : mailBtn.textContent = 'pokaż e-mail'
  }
  if(e.target.matches('#phoneBtn')){
    phoneNumber.classList.toggle('showTxt')
    phoneBtn.textContent == 'pokaż telefon' ? phoneBtn.textContent = 'ukryj telefon ' : phoneBtn.textContent = 'pokaż telefon'
  }
}
const checkView = (mobileCheck) =>{
  let desktopAppConteiner = document.querySelector('#desktopApp');
  mobileMenu = document.querySelector('#mobileSideVersion');
  if (mobileCheck.matches) { 
    desktopAppConteiner.style.display='none'
    mobileMenu.style.display ='inline-block'
  }else{
    mobileMenu.style.display ='none'
    desktopAppConteiner.style.display='inline-block'
  }
}
let mobileCheck = window.matchMedia("(max-width: 700px)")
checkView(mobileCheck) 



const DOMCreateEvents = () => {
  navMain.addEventListener('mouseover', navBlur)
  navMain.addEventListener('mouseleave', navEffecttRemove)
  navMain.addEventListener("mouseover", navEffect);
  navMain.addEventListener("click", naviScroll);
  window.addEventListener("scroll", scrollButton);
  scrollUpBtn.addEventListener("click", handleToTop);
  taskTable.addEventListener("click", showTask);
  cvMainContener.addEventListener('click', cvTrack);
  contactSendBtn.addEventListener('click', inputCheck);
  // window.addEventListener('DOMContentLoaded', setTimeout(animationHeaderShow), 2000);
  window.addEventListener('scroll', aboutAnimationShow);
  formMain.addEventListener('click', showHideMail)
  mobileCheck.addListener(checkView) 
};


document.addEventListener("DOMContentLoaded", main);
