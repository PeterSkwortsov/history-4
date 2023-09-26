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

// исправление бага закрытия картинки 



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

const btnQ = document.querySelectorAll('.btn-question');
const opisanie = document.querySelectorAll('.opisanie');

btnQ.forEach((event) => {
    event.addEventListener('click', function () {
        let res = event.nextElementSibling // вышли на opisanie
        res.classList.toggle('hidden');
        let btn = res.previousElementSibling; // вышли на btn-question
        btn.classList.add('hidden')
    })
})

opisanie.forEach((event) => {
    event.addEventListener('click', function () {
        let opisanie = event // получил opisanie
        let btn = event.previousElementSibling // вышли на btnQ

        if (btn.classList  = 'hidden') {
            opisanie.classList.add('hidden')
            btn.classList.remove('hidden')
        }
    })
})

