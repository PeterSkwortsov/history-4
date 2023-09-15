const form = document.forms["form"];
const button = form.elements["button"];

const inputArr = Array.from(form);
const validinputArr = [];

inputArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", '0')
        validinputArr.push(el)
    }  
})

console.log(validinputArr)

form.addEventListener('input', inputHandler);
button.addEventListener('click', buttonHandler);



function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "2px solid rgb(0, 196, 0)";
        el.setAttribute("is-valid", '1');
        } else {
            el.style.border = "2px solid rgb(255, 0, 0)"
            el.setAttribute("is-valid", '0');
        }
    }

    function buttonHandler (e) {
        const isAllValid = [];
        validinputArr.forEach((el) => {
            isAllValid.push(el.getAttribute("is-valid"))
        })
        const isAValid = isAllValid.reduce((acc, current) => {
            return acc && current
        })
        if (!Boolean(Number(isAValid))) {
            e.preventDefault();
        }
    }





    // http://127.0.0.1:5500/forma/index2.html