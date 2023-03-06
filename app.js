// Появление заголовка на главной странице
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add(`_active`)   

      } else {
        if (!animItem.classList.contains('_anim_no-hide')) {
        animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect();
    let scrollLeft = window.scrollY || document.documentElement.scrollLeft;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
  
}

// Прокрутка страницы
const smoothELement = document.querySelector('.hero');
smoothELement.addEventListener('click', function() {
window.scrollTo({top:1000, left:0, behavior: "smooth"})
})


// Выезд статей на экран
const scrollElements = document.querySelectorAll("[data-scroll]");

const scroll = function(){
  for(let i = 0; i < scrollElements.length; i++){
    const isElementsOnScreen = scrollElements[i].getBoundingClientRect().top < window.innerHeight;
    
    if(isElementsOnScreen){
      scrollElements[i].classList.add("revealed")
    } else {
      scrollElements[i].classList.remove("revealed")
    }
  }
}
window.addEventListener("scroll", scroll);
window.addEventListener("load", scroll);



// Клик по кнопке-бургер
const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body;

navButton.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleMobileNav()
})

//Клик за пределами навигации (по окну)
window.addEventListener('click', function() {
  if (body.classList.contains('no-scroll')) {
    toggleMobileNav()
  }
})

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {
  event.stopPropagation()
})

// ---
function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navButton.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
}
// ---

// Модальное окно Аккаунта
const popupLinks = document.querySelectorAll('.popup-link');

if (popupLinks.length > 0) {
  for (let index=0; index < popupLinks.length; index++) {
  const popupLink = popupLinks[index];
  popupLink.addEventListener('click', function(e) {
    const popupName = popupLink.getAttribute('href').replace('#', '');
    const currentPopup = document.getElementById(popupName);
    popupOpen(currentPopup);
    e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.popup_close');

if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function(e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup){
  if(currentPopup ) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function(e) {
      if (!e.target.closest('.popup_content')) {
        popupClose(e.target.closest('.popup'));
        }
    });
  }
}

function popupClose (popupActive) {
     popupActive.classList.remove('open');
}


// Галерея блюд - меню
const slides = document.querySelectorAll ('.slide')

for (const slide of slides) {
   slide.addEventListener ('click', () => {
      clearActiveClasses()
      slide.classList.add('active')
   }) 
}

function clearActiveClasses() {
   slides.forEach((slide)=> {
      slide.classList.remove('active')
   })
}

