const mobileNavBtnContener = document.querySelector('.burger-menu');
const btnShowMenu = document.querySelector('.show');
const btncloseMenu = document.querySelector('.hide');
const mobileNavUl = document.querySelector('.navUl');
const mobileAboutMe = document.querySelector('.mobileAboutMe');
const mobileTasks = document.querySelector('.mobileMyTasks');
const mobileLinks = document.querySelector('.mobileLinks');
const mobileAboutMeSection = document.querySelector('#mobileAboutMeSection')
const mobileParaAboutMe = document.querySelector('.mobileParaAboutMe')
const dots = '...'
const mobileLanguanges = document.querySelector('.mobileLanguanges');

// skills creator
let h4skills = document.createElement('h4');
mobileLanguanges.append(h4skills)
class AddSkills{
    constructor(skillName, favicon){
        this.skillName = skillName,
        this.favicon = favicon
    }
    addSkills(){
        h4skills.textContent = `${this.skillName} i ${this.favicon}`
    }
}
// let htmlSkill = '';
// htmlSkill.innerHtml = `<i class="fab fa-html5 fa-5x" ></i>`
// const newSkill = new AddSkills('html', htmlSkill)
// newSkill.addSkills()
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
const btnShowCV = document.createElement('button')
mobileAboutMeSection.append(btnShowCV)
btnShowCV.setAttribute('class','btnShowCV')
btnShowCV.classList.add('button-style')
btnShowCV.textContent = 'zobacz moje CV'
const btnGetCv = document.createElement('button')
mobileAboutMeSection.append(btnGetCv)
btnGetCv.setAttribute('class','btnGetCV')
btnGetCv.classList.add('button-style')
btnGetCv.textContent = 'pobierz moje cv'
// burger menu
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
// read more
mobileParaAboutMe.setAttribute('style','white-space:pre')
const showMoreTxt = (e) =>{
    moreMobileParaAboutMe.classList.add('hideTxt')
    if(e.target.matches('.btnMore')){
        moreMobileParaAboutMe.textContent =`Cześć, nazywam się Andrzej i jestem początkującym frontend developerem bez 
        doświadczenia komercyjnego. 
        Wiem, jak w życiu człowieka ważna jest determinacja i chęć 
        dążenia do celu, nie boję się nowych wyzwań. Potrafię pracować w zespole, jestem otwarty i nastawiony na 
     dłuższą współpracę. Ponadto znam język angielski w stopniu komunikatywnym, w tym słownictwo branżowe 
        związane z programowaniem i obsługą komputera. Jestem świadomy i w pełni przekonany, że chęć ciągłego rozwoju pozwoli 
        mi osiągnąć wyznaczony przeze mnie cel, czyli pracę na stanowisku Front-End Developera.`
        moreMobileParaAboutMe.classList.toggle('showTxt')
    e.target.textContent == 'czytaj więcej' ? e.target.textContent = 'czytaj mniej' : e.target.textContent = 'czytaj więcej'

    }
}
mobileParaAboutMe.textContent = `"pisz kod tak, jakby gość,który go \r\ndostanie,był agresywnym psychopatą,
który wie, gdzie mieszkasz."\r\nMartin Golding${moreMobileParaAboutMe.textContent}`









mobileAboutMeSection.addEventListener('click', showMoreTxt)
mobileNavBtnContener.addEventListener('click', hideOpenMenu)