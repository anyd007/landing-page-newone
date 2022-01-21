const mobileNavBtnContener = document.querySelector('.burger-menu');
const btnShowMenu = document.querySelector('.show');
const btncloseMenu = document.querySelector('.hide');
const mobileNavUl = document.querySelector('.navUl');
const mobileAboutMe = document.querySelector('.mobileAboutMe');
const mobileTasks = document.querySelector('.mobileMyTasks');
const mobileLinks = document.querySelector('.mobileLinks');
const mobileAboutMeSection = document.querySelector('#mobileAboutMeSection')
const mobileParaAboutMe = document.querySelector('.mobileParaAboutMe')
const dots = ['...']

// read more creator
let moreMobileParaAboutMe = document.createElement('p')
        moreMobileParaAboutMe.classList.add('mobileParaAboutMe')
        moreMobileParaAboutMe.style.margin = '0px'
        mobileAboutMeSection.append(moreMobileParaAboutMe)
// button creator
const btnReadMore = document.createElement('button')
mobileAboutMeSection.append(btnReadMore)
btnReadMore.setAttribute('class', 'btnMore')
btnReadMore.classList.add('button-style')
btnReadMore.textContent = 'czytaj więcej'  


const hideOpenMenu = e =>{
    if(e.target.matches('.show')){
        mobileNavUl.classList.add('active')
        btnShowMenu.style.display = 'none'
        btncloseMenu.style.display = 'flex'
    }else if(e.target.matches('.hide')){
        mobileNavUl.classList.remove('active');
        btnShowMenu.style.display = 'flex';
        btncloseMenu.style.display = 'none';
    }
}

const showMoreTxt = (e) =>{
    console.log(btnReadMore.textContent);
    moreMobileParaAboutMe.classList.add('hideTxt')
    if(e.target.matches('.btnMore')){
        moreMobileParaAboutMe.textContent =`Wiem, jak w życiu człowieka ważna jest determinacja i chęć 
dążenia do celu, nie boję się nowych wyzwań. Potrafię pracować w zespole, jestem otwarty i nastawiony na 
dłuższą współpracę. Ponadto znam język angielski w stopniu komunikatywnym, w tym słownictwo branżowe 
związane z programowaniem i obsługą komputera.`
        moreMobileParaAboutMe.classList.toggle('showTxt')
    e.target.textContent == 'czytaj więcej' ? e.target.textContent = 'czytaj mniej' : e.target.textContent = 'czytaj więcej'
    }
}
mobileParaAboutMe.textContent = `Jestem świadomy i w pełni przekonany, że chęć ciągłego rozwoju pozwoli mi osiągnąć wyznaczony przeze mnie cel, 
czyli pracę na stanowisku Front-End Developera.${dots}${moreMobileParaAboutMe.textContent}`









mobileAboutMeSection.addEventListener('click', showMoreTxt)
mobileNavBtnContener.addEventListener('click', hideOpenMenu)