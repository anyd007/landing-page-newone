const mobileNavBtnContener = document.querySelector('.burger-menu');
const btnShowMenu = document.querySelector('.show');
const btncloseMenu = document.querySelector('.hide');
const mobileNavUl = document.querySelector('.navUl');
const mobileAboutMe = document.querySelector('.mobileAboutMe');
const mobileTasks = document.querySelector('.mobileMyTasks');
const mobileLinks = document.querySelector('.mobileLinks');

const hideOpenMenu = e =>{
    if(e.target.matches('.show')){
        mobileNavUl.classList.add('active');
        btnShowMenu.style.display = 'none'
        btncloseMenu.style.display = 'flex'
    }
}















mobileNavBtnContener.addEventListener('click', hideOpenMenu)