const img = document.querySelector('.img');
const popUp = document.querySelector('.pop-up');
const popUpImg = document.querySelector('.pop-up img');
const popUpClose = document.querySelector('.pop-up span');
const overlay = document.querySelector('.overlay');
const card1 = document.querySelector('.card__o_nas-2'); 

img.addEventListener('click', ()=> {
    popUp.style.display = 'block';
})

overlay.addEventListener('click', () => {
    popUp.style.display = 'none';
});

popUpClose.addEventListener('click', () => {
    popUp.style.display = 'none';
});

//блок аккардеон

const accordeon = document.querySelector('.feature-list');
const accordeonBtns = accordeon.querySelectorAll('.feature__link');
const accordeonText = accordeon.querySelectorAll('.feature-sub');

accordeonBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        accordeonBtns.forEach((buttons) => {
            buttons.classList.remove('feature__link_active');
            buttons.nextElementSibling.classList.add('hidden')
        })

        btn.classList.toggle('feature__link_active');
        btn.nextElementSibling.classList.toggle('hidden')
    })
})

