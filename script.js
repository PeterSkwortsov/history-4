let img = document.querySelector('.img');

img.addEventListener('click', function () {
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.pop-up img').src = img.getAttribute('src');
})

let x = document.querySelector('.pop-up span');
x.addEventListener('click', function () {
    document.querySelector('.pop-up').style.display = 'none';

})