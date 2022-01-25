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
const closeFav = document.querySelector('.closeFavSkills')

// read more creator
let moreMobileParaAboutMe = document.createElement('p')
        moreMobileParaAboutMe.classList.add('mobileParaAboutMe')
        moreMobileParaAboutMe.style.margin = '0px'
        mobileAboutMeSection.append(moreMobileParaAboutMe)
// button creator
const btnReadMore = document.createElement('button')
titleContener.append(btnReadMore)
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
mobileAboutMeSection.append(btnMyTaks)
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
     cytat.classList.toggle('hideTxt')
        signature.classList.toggle('hideTxt')
        btnShowCV.classList.toggle('hideTxt')
        btnGetCv.classList.toggle('hideTxt')
        btnMyTaks.classList.toggle('hideTxt')
        btnMySkills.classList.toggle('hideTxt')
    e.target.textContent == 'o mnie' ? e.target.textContent = 'ukryj' : e.target.textContent = 'o mnie'
    }
}
`${moreMobileParaAboutMe.textContent}`

// pokaż-zamknij skile
const showSkills = e =>{
    if(e.target.matches('.btnMySkills') || e.target.matches('.closeFavSkills')){
        mobileLanguanges.classList.toggle('showTxt')
        cytat.classList.toggle('hideTxt')
        signature.classList.toggle('hideTxt')
        btnShowCV.classList.toggle('hideTxt')
        btnGetCv.classList.toggle('hideTxt')
        btnMyTaks.classList.toggle('hideTxt')
        btnReadMore.classList.toggle('hideTxt')
        btnMySkills.textContent == 'moje skile </>' ? btnMySkills.textContent = 'ukryj skile </>' : btnMySkills.textContent = 'moje skile </>'
    }
}
// pobierz CV
const getCV  = (e) =>{
    if(e.target.matches('.btnGetCV')){
        let download = (getUrl, fileName) =>{
       let a = document.createElement('a');
        a.href = getUrl;
        a.setAttribute('downlad', fileName)
        a.click()
        }
        download('./obrazy/dokumenty/Andrzej_Gębala_CV_IT.pdf', 'Andrzej_Gębala_CV')
    }
}
// pokaż CV
let divImg = document.createElement('div')
    divImg.style.height = 50 + 'vh'
    let openModalCV = document.createElement('img')
    openModalCV.setAttribute('src', './obrazy/dokumenty/Andrzej_Gebala_CV_IT_photo.jpg')
    openModalCV.style.margin = '0 auto'
    divImg.append(openModalCV)
    divImg.classList.add('hideTxt')
    titleContener.append(divImg)
const showCV = e =>{
     if(e.target.matches('.btnShowCV')){
        divImg.classList.toggle('showTxt')
        cytat.classList.toggle('hideTxt')
        signature.classList.toggle('hideTxt')
        btnMySkills.classList.toggle('hideTxt')
        // btnGetCv.classList.toggle('hideTxt')
        btnMyTaks.classList.toggle('hideTxt')
        btnReadMore.classList.toggle('hideTxt')
        btnShowCV.textContent == 'zobacz moje CV' ? btnShowCV.textContent = 'zamknij moje CV' : btnShowCV.textContent = 'zobacz moje CV'
    }
}






mobileAboutMeSection.addEventListener('click', showSkills)
titleContener.addEventListener('click', showMoreTxt)
titleContener.addEventListener('click', getCV)
titleContener.addEventListener('click', showCV)
mobileNavBtnContener.addEventListener('click', hideOpenMenu)