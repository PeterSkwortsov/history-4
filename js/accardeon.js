//блок аккардеон
let label = document.querySelectorAll('.label');

label.forEach((event) => {
    event.addEventListener('click', function(el) {        
        let panel = event.nextElementSibling;
        let tag = el.target;
        
        if (panel.style.display === "block") { 
            panel.style.display = "none"
          } else {
            panel.style.display = "block"
            tag.classList.add('green')
          }
          if (panel.style.display === "none") { 
            tag.classList.remove('green')
          }
        });
})

// блок бургер -меню

let res = document.querySelector('.menu-btn')

res.addEventListener('click', function (el) {
  el.preventDefault();
  let tag = el.target;
  let res = tag.parentElement;
  res.classList.toggle('menu-active')
  let content = res.nextElementSibling; // content-menu
  content.classList.toggle('content-menu-active')
  
})


// плавный скролл

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};

// куки 

