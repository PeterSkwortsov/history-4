//открывающаяся картинка

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


