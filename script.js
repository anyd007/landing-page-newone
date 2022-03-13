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
let contactPopup;
let closeContact;

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
  contactPopup = document.querySelector('.contactPopup')
  closeContact = document.querySelector('.closeContact')
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
  desktopApp = document.querySelector('#desktopApp')
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
  titleAnimation.classList.remove('hideTxt')
  titleAnimation.classList.add('title-effect')
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
  // nameInput.value = '';
  // emailInput.value = '';
  // textera.value = '';
  messaggeInputs.forEach(el => {
    // el.required = true;
    if(el.value === ''){
      el.style.backgroundColor = 'red'
    }else{
      el.style.backgroundColor = 'white'
    }
    
  })};
const showTask = (e) => {
  if (e.target.matches(".show-day")) {
    window.open("https://react-node-app-db.herokuapp.com/");
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
  }else if (e.target.matches(".szablon-bootstrap")) {
    window.open('https://gallant-heisenberg-05c478.netlify.app')
  }
};

    const showHideMail = () =>{
     let popupBackground = document.querySelector('.popupBackground')
    contactPopup.classList.toggle('hideTxt')
    popupBackground.classList.remove('hideTxt')
  }
const closecontactPopup = e =>{
  if(e.target.matches('.closeContact')){
    let popupBackground = document.querySelector('.popupBackground')
    contactPopup.classList.toggle('hideTxt')
    popupBackground.classList.add('hideTxt')

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
    desktopAppConteiner.style.display='block'
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
  contactPopup.addEventListener('click', closecontactPopup)
  window.addEventListener('scroll', aboutAnimationShow);
  mailBtn.addEventListener('click', showHideMail)
  mobileCheck.addListener(checkView) 
};


document.addEventListener("DOMContentLoaded", main);
