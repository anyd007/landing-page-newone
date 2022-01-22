const mobileNavBtnContener = document.querySelector('.burger-menu');
const btnShowMenu = document.querySelector('.show');
const btncloseMenu = document.querySelector('.hide');
const mobileNavUl = document.querySelector('.navUl');
const mobileAboutMe = document.querySelector('.mobileAboutMe');
const mobileTasks = document.querySelector('.mobileMyTasks');
const mobileLinks = document.querySelector('.mobileLinks');
const titleContener = document.querySelector('.titleContener')
const mobileAboutMeSection = document.querySelector('#mobileAboutMeSection')
const mobileParaAboutMe = document.querySelector('.mobileParaAboutMe')
const dots = '...'
const mobileLanguanges = document.querySelector('.mobileLanguanges');
const cytat = document.querySelector('.cytat')
const signature = document.querySelector('.signature')
const closeFav = document.querySelector('.closeFav')

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
btnReadMore.textContent = 'o mnie'  
const btnShowCV = document.createElement('button')
titleContener.append(btnShowCV)
btnShowCV.setAttribute('class','btnShowCV')
btnShowCV.classList.add('button-style')
btnShowCV.textContent = 'zobacz moje CV'
const btnGetCv = document.createElement('button')
titleContener.append(btnGetCv)
btnGetCv.setAttribute('class','btnGetCV')
btnGetCv.classList.add('button-style')
btnGetCv.textContent = 'pobierz moje cv'
const btnMyTaks = document.createElement('button')
titleContener.append(btnMyTaks)
btnMyTaks.setAttribute('class','btnMyTasks')
btnMyTaks.classList.add('button-style')
btnMyTaks.textContent = 'moje ćwiczenia'
const btnMySkills = document.createElement('button')
mobileAboutMeSection.append(btnMySkills)
btnMySkills.setAttribute('class','btnMySkills')
btnMySkills.classList.add('button-style')
btnMySkills.textContent = 'moje skile </>'
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
const showMoreTxt = (e) =>{
    moreMobileParaAboutMe.classList.add('hideTxt')
    
    if(e.target.matches('.btnMore')){
        moreMobileParaAboutMe.textContent =`Cześć, nazywam się Andrzej i jestem początkującym front-end developerem bez 
        doświadczenia komercyjnego. 
        Wiem, jak w życiu człowieka ważna jest determinacja i chęć 
        dążenia do celu, dlatego nie boję się nowych wyzwań. Potrafię pracować w zespole, jestem otwarty i nastawiony na 
     dłuższą współpracę. Ponadto znam język angielski w stopniu komunikatywnym, w tym słownictwo branżowe 
        związane z programowaniem i obsługą komputera. Jestem świadomy i w pełni przekonany, że chęć ciągłego rozwoju pozwoli 
        mi osiągnąć wyznaczony przeze mnie cel, czyli pracę na stanowisku Front-End Developera.`
    
        moreMobileParaAboutMe.classList.toggle('showTxt')
    e.target.textContent == 'o mnie' ? e.target.textContent = 'ukryj' : e.target.textContent = 'o mnie'
    }
    if(e.target.matches('.btnMySkills')){
        mobileLanguanges.classList.toggle('showTxt')
        cytat.classList.toggle('hideTxt')
        signature.classList.toggle('hideTxt')
        btnShowCV.classList.toggle('hideTxt')
        btnGetCv.classList.toggle('hideTxt')
        btnMyTaks.classList.toggle('hideTxt')
        e.target.textContent == 'moje skile </>' ? e.target.textContent = 'ukryj skile </>' : e.target.textContent = 'moje skile </>'
    }
}
`${moreMobileParaAboutMe.textContent}`
const closeIcon = (e)=>{
    if(e.target.matches('.closeFav')){
        mobileLanguanges.classList.toggle('showTxt')
        cytat.classList.toggle('hideTxt')
        signature.classList.toggle('hideTxt')
        btnShowCV.classList.toggle('hideTxt')
        btnGetCv.classList.toggle('hideTxt')
        btnMyTaks.classList.toggle('hideTxt')
        btnMySkills.textContent == 'moje skile </>' ? btnMySkills.textContent = 'ukryj skile </>' : btnMySkills.textContent = 'moje skile </>'
    }
}






mobileLanguanges.addEventListener('click', closeIcon)
mobileAboutMeSection.addEventListener('click', showMoreTxt)
mobileNavBtnContener.addEventListener('click', hideOpenMenu)