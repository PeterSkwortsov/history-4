//блок аккардеон
let label = document.querySelectorAll('.label');

label.forEach((event) => {
    event.addEventListener('click', function(el) {        
        let panel = event.nextElementSibling;
        let tag = el.target;
        console.log(tag)
        
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
