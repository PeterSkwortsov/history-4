//открывающаяся картинка

const images = document.querySelectorAll('.img');
const popUp = document.querySelector('.pop-up');
const popUpImg = document.querySelector('.pop-up img');
const popUpClose = document.querySelectorAll('.pop-up span');
const overlay = document.querySelector('.overlay');



images.forEach((event) => {
    event.addEventListener('click', function () {
        popUp.style.display = 'block';
        document.body.style.position = 'fixed';        
        popUpImg.src = event.src;
        
    })
})



overlay.addEventListener('click', () => {
    popUp.style.display = 'none';

    document.body.style.position = '';
    document.body.style.top = '';
    

});

popUpClose.forEach((event) => {
    event.addEventListener('click', () => {
        popUp.style.display = 'none';
        document.body.style.position = '';
        document.body.style.top = '';
    })
})



// блок о нас 

const text1 = document.querySelectorAll(".text-1");
const denisImg = document.querySelectorAll(".denis-img");
const denisText = document.querySelectorAll(".denis-text");
const overlayPerson = document.querySelectorAll(".overlay-person")

overlayPerson.forEach((event) => {
    event.addEventListener('click', () => {
        event.style.display = 'none'
        let res = event.nextElementSibling;
        res.classList.toggle('hidden');
        });
    })

denisImg.forEach((event) => {
    event.addEventListener('click', () => {
        let res = event.nextElementSibling
        res.style.display = 'block';
        let res2 = res.nextElementSibling // тут открыли denis-text
        res2.classList.add('hidden');
        console.log(res2)
        // res2.classList.add('hidden');
    })
})




// всплытие вопроса 

const btnQ = document.querySelector('.btn-question');
const opisanie = document.querySelector('.opisanie');

btnQ.addEventListener('click', function () {
    opisanie.classList.toggle('hidden')
    btnQ.classList.add('hidden')
})

opisanie.addEventListener('click', function () {
    if (btnQ.classList  = 'hidden') {
        opisanie.classList.add('hidden')
        btnQ.classList.remove('hidden')
    }
})